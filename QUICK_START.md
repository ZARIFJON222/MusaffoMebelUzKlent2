╔════════════════════════════════════════════════════════════════╗
║         MEBEL USTASI - QUICK START GUIDE                        ║
║    Premium Custom Furniture Website with Multi-Language         ║
════════════════════════════════════════════════════════════════╝

🎉 CONGRATULATIONS! Your website is ready to use!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

musaffomebel/
├── index.html              ← Main website file
├── styles.css              ← All styling and animations
├── script.js               ← Website interactivity
├── i18n.js                 ← Multi-language translations (EN, RU, UZ)
├── README.md               ← Full documentation
├── QUICK_START.md          ← This file
└── backend/                ← API server (optional)
    ├── server.js           ← Express.js server
    ├── package.json        ← Dependencies
    ├── .env.example        ← Environment template
    ├── README.md           ← Backend setup guide
    └── .gitignore          ← Git ignore file

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ QUICK START - FRONTEND ONLY (5 minutes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open index.html in your browser
   - Double-click index.html file
   - Or use a local server:
   
   Windows:
   python -m http.server 8000
   
   Mac/Linux:
   python3 -m http.server 8000
   
   Then open: http://localhost:8000

2. View the website
   - Sakura petals animation ✨
   - Smooth scrolling 👆
   - Responsive design 📱
   - Multi-language support 🌍

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 FULL SETUP - WITH TELEGRAM INTEGRATION (30 minutes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: Create Telegram Bot
─────────────────────────────────────────────────────────────

1. Open Telegram
2. Search for: @BotFather
3. Send message: /newbot
4. Follow instructions:
   - Choose bot name: "Mebel Ustasi Orders Bot"
   - Choose bot username: "mebelustasi_orders_bot"
5. Copy the API Token (you'll get a message like this):
   
   ✅ Done! Congratulations on your new bot. You will find it at 
   t.me/mebelustasi_orders_bot. You can now add a description, about 
   section and profile picture for your bot, see /help for a list of 
   commands.
   
   Use this token to access the HTTP API:
   ➡️  1234567890:ABCDEFGHIJKLMNOPQRST-UVWXYZ12345678
   
   Keep it safe and store it securely!

STEP 2: Get Your Telegram User ID
─────────────────────────────────────────────────────────────

1. Open Telegram
2. Search for: @userinfobot
3. Send message: /start
4. You'll get your ID (a number like: 987654321)

STEP 3: Setup Backend Server
─────────────────────────────────────────────────────────────

1. Install Node.js
   - Go to: https://nodejs.org/
   - Download LTS version
   - Install with default options

2. Open Terminal/Command Prompt
   
   Windows:
   - Press: Windows Key + R
   - Type: cmd
   - Press: Enter
   
   Mac:
   - Press: Command + Space
   - Type: terminal
   - Press: Enter
   
   Linux:
   - Press: Ctrl + Alt + T

3. Navigate to backend folder:
   
   cd path/to/musaffomebel/backend

4. Install dependencies:
   
   npm install
   
   (Wait for installation to complete)

5. Create .env file:
   
   Copy .env.example to .env:
   
   Windows:
   copy .env.example .env
   
   Mac/Linux:
   cp .env.example .env

6. Edit .env file with your credentials:
   
   BOT_TOKEN=YOUR_BOT_TOKEN_HERE
   USER_ID=YOUR_USER_ID_HERE
   PORT=3000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   
   Example (with real values):
   BOT_TOKEN=1234567890:ABCDEFGHIJKLMNOPQRST-UVWXYZ12345678
   USER_ID=987654321
   PORT=3000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000

STEP 4: Start the Backend Server
─────────────────────────────────────────────────────────────

In the terminal (in backend folder):

Development mode (with auto-reload):
npm run dev

Production mode:
npm start

You should see:
✅ Server is running on port 3000
🤖 Telegram Integration: ✅ Ready

STEP 5: Test Everything
─────────────────────────────────────────────────────────────

1. Open website: http://localhost:3000 (or index.html)
2. Scroll to "Buyurtma berish" (Order Now) section
3. Fill in the form:
   - Name: Your Name
   - Phone: +998901234567
   - Message: Test message
4. Click "Send Order Request"
5. Check your Telegram for the message!

If message arrives in Telegram ✅ - Everything works!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 MULTI-LANGUAGE SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The website supports 3 languages:

🇬🇧 English    (EN)  - Default language
🇷🇺 Russian    (РУ)  - Русский язык
🇺🇿 Uzbek      (UZ)  - O'zbek tili

How to use:
1. Look at top-right corner of website
2. Click language buttons: EN, РУ, UZ
3. Entire website translates instantly!
4. Your choice is saved in browser

How to add more languages:
1. Open i18n.js
2. Add new language object:

   translations.spanish = {
       nav_home: "Inicio",
       nav_order: "Hacer pedido",
       // ... more translations
   }

3. Add language button in navbar (index.html)
4. Update language selector

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ FEATURES INCLUDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Hero Section
   - Large title: "Custom Furniture Made With Passion"
   - Floating sakura petals animation
   - Call-to-action button

✅ About Section
   - Craftsman experience display
   - Statistics (500+ customers, 20+ years, 100% satisfaction)
   - About description

✅ Portfolio
   - 6 furniture showcase items
   - Hover 3D effects
   - Filter by category (Kitchen, Bedroom, Wardrobes, Custom)
   - Smooth transitions

✅ Services
   - 6 service cards
   - Icons and descriptions
   - Hover animations

✅ Testimonials
   - 3 customer reviews
   - 5-star ratings
   - Professional appearance

✅ Contact Form
   - Name, Phone, Message fields
   - Form validation
   - Telegram integration
   - Success/error messages

✅ Design
   - Sakura pink color scheme (#ff69b4)
   - Glassmorphism effects
   - Soft shadows
   - Smooth gradients
   - Fully responsive

✅ Animations
   - Page load animation
   - Scroll animations (fade, slide, scale)
   - Hover effects
   - Button glow effect
   - 3D card transforms

✅ Performance
   - Lazy loading ready
   - Optimized images
   - Fast animations (60fps)
   - Service worker ready

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 CUSTOMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Change Colors:
──────────────
1. Open styles.css
2. Find :root section (line ~12)
3. Change these values:

   --primary-color: #fff0f5;      (light background)
   --secondary-color: #ffc0cb;    (medium pink)
   --accent-color: #ff69b4;       (bright pink)
   --dark-accent: #ff1493;        (dark pink)

Change Company Name:
────────────────────
1. Open index.html
2. Search for "Mebel Ustasi"
3. Replace with your company name
4. Update title tag: <title>Your Name - ...</title>

Change Contact Info:
─────────────────────
1. Open index.html
2. Find contact section (search for "Phone")
3. Update phone number
4. Update email address
5. Update location

Add Images:
───────────
1. Replace placeholder icons with real images
2. In portfolio section, add image URLs
3. Update background images in styles.css

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 DEPLOYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Deploy Frontend to Netlify (Free):
──────────────────────────────────
1. Go to netlify.com
2. Sign up with GitHub
3. Drag and drop your folder
4. Website is live! 🚀

Deploy Backend to Heroku (Free tier ended):
───────────────────────────────────────────
See backend/README.md for detailed instructions

Deploy to your own server:
─────────────────────────
1. Upload files via FTP
2. Setup Node.js
3. Run: npm install && npm start

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Form not sending orders?
────────────────────────
✓ Make sure backend server is running
✓ Check .env file has correct BOT_TOKEN and USER_ID
✓ Verify bot is working (send /start to bot in Telegram)
✓ Check browser console for errors (F12)

Orders arriving but format is wrong?
──────────────────────────────────────
✓ Edit server.js telegramMessage format
✓ Change how message is displayed in Telegram
✓ Restart server after changes

Website not loading?
─────────────────────
✓ Check all files are in same folder
✓ Ensure HTML, CSS, JS files exist
✓ Try different browser
✓ Check console errors (F12)

Language not changing?
──────────────────────
✓ Refresh browser
✓ Clear cache/cookies
✓ Check i18n.js is loaded
✓ Verify data-i18n attributes exist

Port already in use?
────────────────────
Stop other servers or change PORT in .env

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 USEFUL LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Telegram Bot Setup:
- @BotFather: https://t.me/botfather
- User ID Bot: https://t.me/userinfobot

Frontend Hosting:
- Netlify: https://netlify.com
- Vercel: https://vercel.com
- GitHub Pages: https://pages.github.com

Backend Hosting:
- DigitalOcean: https://digitalocean.com
- Render: https://render.com
- Railway: https://railway.app

Tools:
- Node.js: https://nodejs.org/
- Visual Studio Code: https://code.visualstudio.com/
- Git: https://git-scm.com/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ✅ Customize company name and colors
2. ✅ Add real furniture images
3. ✅ Setup Telegram bot (see above)
4. ✅ Test form submission
5. ✅ Deploy to your server
6. ✅ Setup custom domain (optional)
7. ✅ Monitor orders in Telegram

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For detailed documentation, see:
- README.md (Full documentation)
- backend/README.md (Backend setup)
- browser console for errors (F12)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Made with ❤️ for Mebel Ustasi - Premium Custom Furniture Maker

Version: 1.0.0
Last Updated: April 2026

╚════════════════════════════════════════════════════════════════╝
