# Mebel Ustasi - Premium Custom Furniture Website

A modern, fully responsive website for a premium custom furniture maker with multi-language support (English, Russian, Uzbek), animations, and Telegram integration for orders.

## Features

✨ **Design & UX**
- Modern glassmorphism design with sakura pink theme
- Smooth animations and parallax scrolling
- Floating sakura petals animation in hero section
- Responsive design (mobile-first approach)
- Beautiful gradient backgrounds and soft shadows
- 3D hover effects on cards

🌍 **Multi-Language Support**
- English (EN)
- Russian (РУ)
- Uzbek (UZ)
- Language preference saved to localStorage
- Instant language switching

📱 **Responsive**
- Mobile-first design
- Tablet optimized
- Desktop experience
- Fast loading

🔗 **Telegram Integration**
- Order form sends data to Telegram Bot
- Custom message formatting
- Real-time notifications

## File Structure

```
musaffomebel/
├── index.html           # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── i18n.js             # Multi-language translations
├── server.js           # Backend server (Node.js/Express)
├── .env                # Environment variables
└── README.md           # This file
```

## Setup Instructions

### 1. Frontend Setup

The frontend is ready to use! Just open `index.html` in your browser or host it on a web server.

```bash
# Option 1: Open directly
Open index.html in your browser

# Option 2: Use a local server
python -m http.server 8000
# or
python3 -m http.server 8000
```

### 2. Backend Setup (For Telegram Integration)

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Telegram Bot API Token

#### Installation Steps

1. **Create a Telegram Bot**
   - Talk to [@BotFather](https://t.me/botfather) on Telegram
   - Create a new bot and get your API token
   - Get your Telegram User ID:
     - Talk to [@userinfobot](https://t.me/userinfobot)
     - Send it any message to get your ID

2. **Setup Backend**
   ```bash
   # Navigate to backend directory
   cd backend
   
   # Install dependencies
   npm install
   
   # Create .env file
   cp .env.example .env
   
   # Edit .env file with your Telegram credentials
   # Add your BOT_TOKEN and USER_ID
   ```

3. **Configure Environment Variables**

Create a `.env` file in the backend directory:

```env
# Telegram Bot Configuration
BOT_TOKEN=YOUR_BOT_TOKEN_HERE
USER_ID=YOUR_USER_ID_HERE

# Server Configuration
PORT=3000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

4. **Run the Server**

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3000`

## Telegram Bot Setup

1. **Get Bot Token**
   - Message [@BotFather](https://t.me/botfather)
   - Command: `/newbot`
   - Follow the instructions
   - Copy the token provided

2. **Get Your User ID**
   - Message [@userinfobot](https://t.me/userinfobot)
   - You'll receive your ID
   - Add it to `.env` file as `USER_ID`

## Multi-Language Implementation

### How It Works

The website uses the `i18n.js` file to manage all translations. Each page element has a `data-i18n` attribute that matches a key in the translations object.

### Language Keys

All translatable text is stored in the `translations` object in `i18n.js`:

```javascript
translations = {
    en: { /* English translations */ },
    ru: { /* Russian translations */ },
    uz: { /* Uzbek translations */ }
}
```

### Adding New Translations

1. Open `i18n.js`
2. Add your key-value pair to each language object:

```javascript
en: {
    new_key: "English text"
},
ru: {
    new_key: "Русский текст"
},
uz: {
    new_key: "O'zbek matn"
}
```

3. Use in HTML:

```html
<h1 data-i18n="new_key">English text</h1>
```

### For Form Inputs (Placeholders)

```html
<input 
    type="text" 
    placeholder="Enter text" 
    data-i18n="key_name"
    data-i18n-attr="placeholder"
>
```

## API Endpoints

### POST /api/order

Send a new furniture order via Telegram.

**Request Body:**
```json
{
    "name": "John Doe",
    "phone": "+998901234567",
    "message": "I need custom bedroom furniture..."
}
```

**Response:**
```json
{
    "success": true,
    "message": "Order received successfully"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Lazy loading for images
- Optimized CSS animations
- Minimized JavaScript
- 60fps animations with GPU acceleration
- Service Worker ready

## SEO Features

- Meta tags for social sharing
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times
- Structured data ready

## Customization

### Colors

Edit `:root` variables in `styles.css`:

```css
:root {
    --primary-color: #fff0f5;      /* Light pink */
    --secondary-color: #ffc0cb;    /* Sakura pink */
    --accent-color: #ff69b4;       /* Hot pink */
    --dark-accent: #ff1493;        /* Deep pink */
    --white: #ffffff;
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
}
```

### Fonts

Change typography in the `<head>` of `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT" rel="stylesheet">
```

### Animations

Modify animation speeds in `styles.css`. Search for `animation-duration` or `transition`.

## Troubleshooting

### Form Not Sending

1. Check that backend server is running
2. Verify `.env` file is correctly configured
3. Check browser console for errors
4. Ensure CORS is properly configured

### Telegram Not Receiving Messages

1. Verify BOT_TOKEN is correct
2. Check USER_ID is correct (must be a number)
3. Ensure bot has message permissions
4. Check backend logs for errors

### Language Not Changing

1. Clear browser cache and localStorage
2. Ensure i18n.js is loaded before script.js
3. Check console for any errors
4. Verify `data-i18n` attributes are correct

### Animations Not Working

1. Ensure styles.css is loaded
2. Check browser supports CSS animations
3. Disable ad blocker
4. Try a different browser

## Deployment

### Frontend (Static Hosting)

1. **Netlify**
   - Drag and drop the folder
   - All files will be deployed

2. **Vercel**
   - Connect your GitHub repo
   - Auto-deploys on push

3. **GitHub Pages**
   - Push to gh-pages branch
   - Enable in repository settings

### Backend (Server Hosting)

1. **Heroku**
   - Push with Git
   - Add .env variables in settings

2. **DigitalOcean**
   - Create a droplet
   - Install Node.js
   - Deploy with Git

3. **Render**
   - Connect GitHub repo
   - Add environment variables
   - Auto-deploys

## Backup & Maintenance

- Regularly backup order data
- Monitor bot API usage
- Keep translations updated
- Test all languages regularly
- Monitor performance metrics

## License

This project is created for premium furniture makers. All rights reserved.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review console errors
3. Check .env configuration
4. Verify all dependencies are installed

## Version

Current Version: 1.0.0

Last Updated: April 2026

---

Made with ❤️ for Mebel Ustasi - Premium Custom Furniture Maker
