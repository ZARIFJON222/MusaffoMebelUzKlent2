// =====================
// INTERNATIONALIZATION (i18n)
// =====================

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_services: "Services",
        nav_testimonials: "Testimonials",
        nav_order: "Order Now",

        // Hero Section
        hero_title: "Custom Furniture Made With Passion",
        hero_subtitle: "Handcrafted furniture that matches your dreams and lifestyle",

        // About Section
        about_title: "About the Craftsman",
        about_subtitle: "Ustaning Tajribasi",
        about_desc1: "With over 20 years of craftsmanship experience, I create bespoke furniture pieces that blend functionality with artistic design. Each piece is carefully handcrafted using premium materials and traditional techniques combined with modern innovation.",
        about_desc2: "My philosophy is simple: quality, attention to detail, and your complete satisfaction. Every furniture piece tells a story and fits perfectly into your space.",
        stat_customers: "Happy Customers",
        stat_years: "Years Experience",
        stat_satisfaction: "Satisfaction Rate",

        // Portfolio Section
        portfolio_title: "Our Portfolio",
        portfolio_desc: "Explore our latest furniture designs and custom creations",
        filter_all: "All",
        filter_kitchen: "Kitchen",
        filter_bedroom: "Bedroom",
        filter_wardrobes: "Wardrobes",
        filter_custom: "Custom",

        // Portfolio items
        portfolio_kitchen_title: "Modern Kitchen Set",
        portfolio_kitchen_desc: "Oak wood with white finish",
        portfolio_bedroom_title: "Luxury Bedroom Set",
        portfolio_bedroom_desc: "Walnut wood with sakura accents",
        portfolio_wardrobes_title: "Designer Wardrobe",
        portfolio_wardrobes_desc: "Custom sliding doors",
        portfolio_chair_title: "Custom Armchair",
        portfolio_chair_desc: "Personalized design",
        portfolio_dining_title: "Dining Table Set",
        portfolio_dining_desc: "Handcrafted details",
        portfolio_media_title: "Media Console",
        portfolio_media_desc: "Modern entertainment unit",

        // Services Section
        services_title: "Our Services",
        service_design_title: "Custom Design",
        service_design_desc: "Personalized furniture design tailored to your exact specifications and preferences.",
        service_handcrafted_title: "Handcrafted",
        service_handcrafted_desc: "Each piece is meticulously handcrafted by skilled artisans with attention to every detail.",
        service_material_title: "Material Selection",
        service_material_desc: "Premium materials sourced from trusted suppliers for durability and beauty.",
        service_delivery_title: "Delivery & Installation",
        service_delivery_desc: "Safe delivery and professional installation included with all orders.",
        service_warranty_title: "Warranty & Support",
        service_warranty_desc: "Comprehensive warranty and ongoing support for all furniture pieces.",
        service_turnaround_title: "Quick Turnaround",
        service_turnaround_desc: "Fast production and delivery without compromising on quality.",

        // Testimonials Section
        testimonials_title: "Customer Testimonials",
        testimonial_1: "The quality of the furniture is outstanding! Exactly what I envisioned. Highly recommended!",
        testimonial_1_name: "Aisha Rahman",
        testimonial_1_role: "Interior Designer",
        testimonial_2: "Best furniture maker in the city. The craftsmanship is impeccable and the service is excellent.",
        testimonial_2_name: "Muhammad Hassan",
        testimonial_2_role: "Homeowner",
        testimonial_3: "Absolutely stunning work! They listened to every detail and delivered beyond expectations.",
        testimonial_3_name: "Sophia Williams",
        testimonial_3_role: "Architect",

        // Contact Section
        contact_title: "Order Your Custom Furniture",
        contact_subtitle: "Get in touch and let's create something beautiful together",
        contact_phone_label: "Phone",
        contact_email_label: "Email",
        contact_location_label: "Location",
        contact_location_value: "Tashkent, Uzbekistan",

        // Form
        form_name_label: "Your Name",
        form_name_placeholder: "Enter your full name",
        form_phone_label: "Phone Number",
        form_phone_placeholder: "Enter your phone number",
        form_message_label: "Your Message",
        form_message_placeholder: "Describe your furniture needs...",
        form_submit: "Send Order Request",
        form_success: "Order sent successfully! We will contact you soon.",
        form_error_name: "Please enter a valid name (at least 2 characters)",
        form_error_phone: "Please enter a valid phone number",
        form_error_message: "Please enter a message (at least 10 characters)",
        form_sending: "Sending...",
        form_network_error: "Network error. Please check your connection and try again."
    },
    ru: {
        // Navigation
        nav_home: "Главная",
        nav_about: "О нас",
        nav_portfolio: "Портфолио",
        nav_services: "Услуги",
        nav_testimonials: "Отзывы",
        nav_order: "Заказать",

        // Hero Section
        hero_title: "Мебель, Сделанная со Страстью",
        hero_subtitle: "Мебель ручной работы, которая соответствует вашим мечтам и образу жизни",

        // About Section
        about_title: "О мастере",
        about_subtitle: "Опыт мастера",
        about_desc1: "С более чем 20-летним опытом в области мебельного дизайна я создаю изделия на заказ, которые сочетают функциональность с художественным дизайном. Каждое изделие тщательно изготовлено вручную с использованием премиальных материалов и традиционных методов, в сочетании с современными инновациями.",
        about_desc2: "Моя философия проста: качество, внимание к деталям и ваше полное удовлетворение. Каждое мебельное изделие рассказывает историю и идеально вписывается в ваше пространство.",
        stat_customers: "Довольных клиентов",
        stat_years: "Лет опыта",
        stat_satisfaction: "Уровень удовлетворения",

        // Portfolio Section
        portfolio_title: "Наше портфолио",
        portfolio_desc: "Изучите наши последние дизайнерские работы и изготовленную мебель на заказ",
        filter_all: "Все",
        filter_kitchen: "Кухня",
        filter_bedroom: "Спальня",
        filter_wardrobes: "Шкафы",
        filter_custom: "На заказ",

        // Portfolio items
        portfolio_kitchen_title: "Современный кухонный набор",
        portfolio_kitchen_desc: "Дуб с белой отделкой",
        portfolio_bedroom_title: "Люкс-набор для спальни",
        portfolio_bedroom_desc: "Орех с сакурными акцентами",
        portfolio_wardrobes_title: "Дизайнерский шкаф",
        portfolio_wardrobes_desc: "Раздвижные двери на заказ",
        portfolio_chair_title: "Кресло на заказ",
        portfolio_chair_desc: "Персонализированный дизайн",
        portfolio_dining_title: "Набор столовой мебели",
        portfolio_dining_desc: "Ручная работа с деталями",
        portfolio_media_title: "Медиа-консоль",
        portfolio_media_desc: "Современный развлекательный центр",

        // Services Section
        services_title: "Наши услуги",
        service_design_title: "Индивидуальный дизайн",
        service_design_desc: "Дизайн мебели на заказ в соответствии с вашими требованиями и предпочтениями.",
        service_handcrafted_title: "Ручная работа",
        service_handcrafted_desc: "Каждое изделие тщательно изготовлено опытными мастерами с вниманием к каждой детали.",
        service_material_title: "Выбор материалов",
        service_material_desc: "Премиальные материалы от надежных поставщиков для долговечности и красоты.",
        service_delivery_title: "Доставка и установка",
        service_delivery_desc: "Безопасная доставка и профессиональная установка включены во все заказы.",
        service_warranty_title: "Гарантия и поддержка",
        service_warranty_desc: "Полная гарантия и постоянная поддержка всех мебельных изделий.",
        service_turnaround_title: "Быстрое воплощение",
        service_turnaround_desc: "Быстрое производство и доставка без ущерба качеству.",

        // Testimonials Section
        testimonials_title: "Отзывы клиентов",
        testimonial_1: "Качество мебели превосходно! Именно так я это представляла. Очень рекомендую!",
        testimonial_1_name: "Aisha Rahman",
        testimonial_1_role: "Дизайнер интерьера",
        testimonial_2: "Лучший мастер мебели в городе. Мастерство безупречно, обслуживание отличное.",
        testimonial_2_name: "Muhammad Hassan",
        testimonial_2_role: "Домовладелец",
        testimonial_3: "Абсолютно потрясающая работа! Они слушали каждую деталь и превзошли ожидания.",
        testimonial_3_name: "Sophia Williams",
        testimonial_3_role: "Архитектор",

        // Contact Section
        contact_title: "Закажите вашу мебель на заказ",
        contact_subtitle: "Свяжитесь с нами и давайте вместе создадим что-то прекрасное",
        contact_phone_label: "Телефон",
        contact_email_label: "Электронная почта",
        contact_location_label: "Место нахождения",
        contact_location_value: "Ташкент, Узбекистан",

        // Form
        form_name_label: "Ваше имя",
        form_name_placeholder: "Введите свое полное имя",
        form_phone_label: "Номер телефона",
        form_phone_placeholder: "Введите номер телефона",
        form_message_label: "Ваше сообщение",
        form_message_placeholder: "Опишите ваши потребности в мебели...",
        form_submit: "Отправить заказ",
        form_success: "Заказ успешно отправлен! Мы скоро с вами свяжемся.",
        form_error_name: "Пожалуйста, введите правильное имя (минимум 2 символа)",
        form_error_phone: "Пожалуйста, введите правильный номер телефона",
        form_error_message: "Пожалуйста, введите сообщение (минимум 10 символов)",
        form_sending: "Отправка...",
        form_network_error: "Ошибка сети. Пожалуйста, проверьте соединение и попробуйте снова."
    },
    uz: {
        // Navigation
        nav_home: "Bosh sahifa",
        nav_about: "Biz haqida",
        nav_portfolio: "Portfel",
        nav_services: "Xizmatlari",
        nav_testimonials: "Fikrlar",
        nav_order: "Buyurtma berish",

        // Hero Section
        hero_title: "Ehtiyoj Bilan Yaratilgan Mebellar",
        hero_subtitle: "Sizning orzularingizga va turmush tarzingizga mos keladigan qo'lyozib mebellar",

        // About Section
        about_title: "Usta haqida",
        about_subtitle: "Ustaning tajribasi",
        about_desc1: "20 yildan ko'p tajribaga ega bo'lib, men funksionallik va san'at dizaynini birlashtirgan maxsus mebellar yarataman. Har bir buyum ehtiyotkorlik bilan yuqori sifatli materiallar va an'anaviy texnikalar hamda zamonaviy inovatsiyalardan foydalanib qo'lyozib tayyorlanadi.",
        about_desc2: "Mening falsafam sodda: sifat, har bir detalga e'tibor va sizning to'liq qanoatlanishing. Har bir mebel buyumi bir hikoya aytadi va sizning bo'shoningizga mukammal mos keladi.",
        stat_customers: "Qanoatli mijozlar",
        stat_years: "Yillik tajriba",
        stat_satisfaction: "Qanoatlanish darajasi",

        // Portfolio Section
        portfolio_title: "Bizning Portfeli",
        portfolio_desc: "Bizning eng so'nggi mebellar dizaynlari va maxsus buyumlarni ko'rib chiqing",
        filter_all: "Barchasi",
        filter_kitchen: "Oshxona",
        filter_bedroom: "Yotaqcha",
        filter_wardrobes: "Shkaflar",
        filter_custom: "Maxsus",

        // Portfolio items
        portfolio_kitchen_title: "Zamonaviy oshxona to'plami",
        portfolio_kitchen_desc: "Oq tumugi qoplamasiga ega",
        portfolio_bedroom_title: "Hashamatli yataqcha to'plami",
        portfolio_bedroom_desc: "Qora yog'och va sakura aksentlari",
        portfolio_wardrobes_title: "Dizayner shkafi",
        portfolio_wardrobes_desc: "Maxsus suvuvchan eshiklari",
        portfolio_chair_title: "Maxsus kreslo",
        portfolio_chair_desc: "Shaxsiylashtirgan dizayn",
        portfolio_dining_title: "Ovqat masasi to'plami",
        portfolio_dining_desc: "Detallar bilan qo'lyozib",
        portfolio_media_title: "Media konsoli",
        portfolio_media_desc: "Zamonaviy o'yin-kulgi markazi",

        // Services Section
        services_title: "Bizning xizmatlari",
        service_design_title: "Maxsus dizayn",
        service_design_desc: "Sizning aniq talablaringiz va afzalliklaringizga mos keladigan mebellar dizayni.",
        service_handcrafted_title: "Qo'lyozib",
        service_handcrafted_desc: "Har bir buyum ko'nikma ustalari tomonidan har bir detalga e'tibor qaratib qo'lyozib tayyorlanadi.",
        service_material_title: "Material Tanlov",
        service_material_desc: "Uzun umr va go'zallik uchun ishonchli ta'minotchilardan olingan yuqori sifatli materiallar.",
        service_delivery_title: "Yetkazib berish va o'rnatish",
        service_delivery_desc: "Xavfsiz yetkazib berish va professional o'rnatish barcha buyumlarga kiritilgan.",
        service_warranty_title: "Kafolat va qo'llab-quvvatlash",
        service_warranty_desc: "Barcha mebellar uchun to'liq kafolat va doimiy qo'llab-quvvatlash.",
        service_turnaround_title: "Tez bajarilishi",
        service_turnaround_desc: "Sifatga zarar yetkazmay, tez ishlab chiqarish va yetkazib berish.",

        // Testimonials Section
        testimonials_title: "Mijozlarning fikrlari",
        testimonial_1: "Mebelning sifati ajoyib! Aynan shunday tasavvur qilgan edim. Katta qor tavsiyalaman!",
        testimonial_1_name: "Aisha Rahman",
        testimonial_1_role: "Ichki dizayneri",
        testimonial_2: "Shahardagi eng yaxshi mebellar ustasi. Hunarmandchiligi yetakchi va xizmat ajoyib.",
        testimonial_2_name: "Muhammad Hassan",
        testimonial_2_role: "Uy egasi",
        testimonial_3: "Ajoyib shoh-bastalik! Ular har bir detalga o'zlashtirdim va kutish dan ko'proq berdi.",
        testimonial_3_name: "Sophia Williams",
        testimonial_3_role: "Arxitektor",

        // Contact Section
        contact_title: "Maxsus mebellar buyurtma qiling",
        contact_subtitle: "Biz bilan bog'laning va keling birgalikda qandaydir go'zallikni yarataylik",
        contact_phone_label: "Telefon",
        contact_email_label: "Elektron pochta",
        contact_location_label: "Joylashuv",
        contact_location_value: "Tashkent, O'zbekiston",

        // Form
        form_name_label: "Sizning ismi",
        form_name_placeholder: "Tam ismingizni kiriting",
        form_phone_label: "Telefon raqami",
        form_phone_placeholder: "Telefon raqamingizni kiriting",
        form_message_label: "Sizning xabari",
        form_message_placeholder: "Mebellarni talab qilinishini rasm qiling...",
        form_submit: "Buyurtmani yuborish",
        form_success: "Buyurtma muvaffaqiyatli jo'natildi! Biz tez orada siz bilan bog'lanamiz.",
        form_error_name: "Iltimos, to'g'ri ismni kiriting (hech bo'lmaganda 2 ta belgi)",
        form_error_phone: "Iltimos, to'g'ri telefon raqamini kiriting",
        form_error_message: "Iltimos, ilova qabul qiling (hech bo'lmaganda 10 ta belgi)",
        form_sending: "Jo'natilmoqda...",
        form_network_error: "Tarmoq xatosi. Iltimos, ulanishingizni tekshiring va qayta urinib ko'ring."
    }
};

// =====================
// i18n MANAGER
// =====================

class I18nManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.initLanguage();
    }

    initLanguage() {
        this.updateLanguage(this.currentLanguage);
        this.setupLanguageSwitcher();
    }

    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.updateLanguage(lang);
            });
        });
    }

    updateLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not supported, defaulting to English`);
            lang = 'en';
        }

        this.currentLanguage = lang;
        localStorage.setItem('language', lang);

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Update all translatable elements
        this.translatePage(lang);

        // Set HTML lang attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    translatePage(lang) {
        const t = translations[lang];

        // Translate all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Translate all elements with data-i18n-attr
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.setAttribute('placeholder', t[key]);
            }
        });

        // Update direction for RTL languages if needed
        document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    }

    t(key) {
        return translations[this.currentLanguage][key] || translations['en'][key] || key;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize i18n manager
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18nManager();
});
