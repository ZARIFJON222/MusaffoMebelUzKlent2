// =====================
// INITIALIZATION
// =====================

document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 500);

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Setup event listeners
    setupNavigation();
    setupForm();
    setupPortfolioFilters();
    setupSmoothScroll();
});

// =====================
// NAVIGATION
// =====================

function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });

        // Close menu when link clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            });
        });
    }
}

// =====================
// SMOOTH SCROLL
// =====================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// =====================
// PORTFOLIO FILTERS
// =====================

function setupPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
}

// =====================
// FORM HANDLING
// =====================

function setupForm() {
    const form = document.getElementById('orderForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form
        if (!validateForm(name, phone, message)) {
            return;
        }

        // Submit form
        await submitForm(name, phone, message, form);
    });
}

function validateForm(name, phone, message) {
    const statusDiv = document.getElementById('formStatus');

    // Validate name
    if (name.length < 2) {
        showError(statusDiv, i18n.t('form_error_name'));
        return false;
    }

    // Validate phone
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.length < 5) {
        showError(statusDiv, i18n.t('form_error_phone'));
        return false;
    }

    // Validate message
    if (message.length < 10) {
        showError(statusDiv, i18n.t('form_error_message'));
        return false;
    }

    return true;
}

async function submitForm(name, phone, message, form) {
    const statusDiv = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.submit-button');
    const originalBtnText = submitBtn.innerHTML;

    try {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>${i18n.t('form_sending')}</span>`;

        // Telegram Bot credentials
        const BOT_TOKEN = '8767517939:AAHr3M1hARuZra9qusuQm5lKH6ccnwI9TUg';
        const CHAT_ID = '7958070473';

        // Prepare message for Telegram
        const telegramMessage = `📋 <b>Yangi mebellar buyurtmasi</b>

👤 <b>Ismi:</b> ${escapeHtmlForTelegram(name)}

📱 <b>Telefon:</b> <code>${escapeHtmlForTelegram(phone)}</code>

💬 <b>Xabar:</b>
<code>${escapeHtmlForTelegram(message)}</code>

⏰ <b>Vaqti:</b> ${new Date().toLocaleString()}`;

        // Send to Telegram Bot API
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();

        if (data.ok) {
            // Success
            showSuccess(statusDiv, i18n.t('form_success'));
            form.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;

            // Clear success message after 5 seconds
            setTimeout(() => {
                statusDiv.textContent = '';
                statusDiv.className = 'form-status';
            }, 5000);
        } else {
            // Error from Telegram
            showError(statusDiv, data.description || i18n.t('form_error_message'));
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    } catch (error) {
        console.error('Error:', error);
        showError(statusDiv, i18n.t('form_network_error'));
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
}

// Helper function to escape HTML for Telegram
function escapeHtmlForTelegram(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function showError(statusDiv, message) {
    statusDiv.textContent = message;
    statusDiv.className = 'form-status error';
    statusDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showSuccess(statusDiv, message) {
    statusDiv.textContent = message;
    statusDiv.className = 'form-status success';
    statusDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// =====================
// SCROLL EFFECTS
// =====================

// Parallax scroll effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Hero image parallax
    const heroImage = document.querySelector('.furniture-placeholder');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (scrollPosition > 10) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    }
});

// =====================
// ANIMATIONS
// =====================

// Button glow effect
document.querySelectorAll('.cta-button, .submit-button').forEach(button => {
    button.addEventListener('mouseenter', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const glow = this.querySelector('.button-glow');
        if (glow) {
            glow.style.width = '0';
            glow.style.height = '0';
            
            setTimeout(() => {
                glow.style.transition = 'all 0.6s ease-out';
                glow.style.width = '300px';
                glow.style.height = '300px';
            }, 10);
        }
    });

    button.addEventListener('mouseleave', function () {
        const glow = this.querySelector('.button-glow');
        if (glow) {
            glow.style.width = '0';
            glow.style.height = '0';
            glow.style.transition = 'all 0.3s ease-out';
        }
    });
});

// =====================
// UTILITY FUNCTIONS
// =====================

// Get API endpoint (configure based on your backend URL)
function getApiEndpoint() {
    // For local development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3000';
    }
    // For production
    return window.location.origin;
}

// =====================
// SERVICE WORKER (optional, for offline support)
// =====================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, app will still work
        });
    });
}

// =====================
// PERFORMANCE OPTIMIZATION
// =====================

// Lazy load images if available
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// =====================
// ACCESSIBILITY
// =====================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) {
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        }
    }
});

// =====================
// MOBILE OPTIMIZATION
// =====================

// Handle mobile viewport
const handleViewportChange = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', handleViewportChange);
handleViewportChange();
