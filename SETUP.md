# 🚀 Quick Start Guide - React Portfolio

## First Time Setup

```bash
# 1. Install dependencies (already done)
npm install

# 2. Start development server
npm run dev

# The app will open at: http://localhost:3000
```

## Development Workflow

### Run Development Server
```bash
npm run dev
```
- Hot Module Reloading (HMR) - changes appear instantly
- Access at `http://localhost:3000`
- Terminal shows any errors or warnings

### Build for Production
```bash
npm run build
```
- Optimizes all assets
- Creates `dist/` folder with production files
- Ready to deploy to GitHub Pages or any static host

### Preview Production Build
```bash
npm run preview
```
- Tests the production build locally
- Useful before deploying

## Project Files Overview

### Core Files
- `src/App.jsx` - Main app with React Router configuration
- `src/main.jsx` - React entry point
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration

### Components (reusable across pages)
- `src/components/Ground.jsx` - Bottom background element
- `src/components/CharacterDisplay.jsx` - Your character image
- `src/components/SpeechBubble.jsx` - Text bubbles
- `src/components/Navigation.jsx` - Arrow navigation between pages
- `src/components/ExperienceCard.jsx` - Experience card button
- `src/components/modal/ExperienceModal.jsx` - Experience details modal

### Pages
- `src/pages/Home.jsx` - Landing page
- `src/pages/AboutMe.jsx` - About section
- `src/pages/Experiences.jsx` - Work experiences with modals
- `src/pages/Contact.jsx` - Contact info & social links

### Data
- `src/data/experiences.js` - Experience information (edit this to update your work history)

### Styles
All CSS is organized by component:
- `src/styles/components/` - Component-specific styles
- `src/styles/pages/` - Page-specific styles
- Each CSS file includes mobile/tablet/desktop breakpoints

## Common Tasks

### Add a New Experience
Edit `src/data/experiences.js`:
```js
{
  id: 'your-id',
  title: 'Company Name',
  link: 'https://company.com',
  role: 'Your Role',
  duration: 'Month Year - Month Year',
  icon: '/images/icon.png',
  skills: ['Skill1', 'Skill2'],
  achievements: ['Achievement 1', 'Achievement 2']
}
```

### Change Text/Messages
- Home: Edit `src/pages/Home.jsx`
- About: Edit `src/pages/AboutMe.jsx`
- Experiences title: Edit `src/pages/Experiences.jsx`
- Contact: Edit `src/pages/Contact.jsx`

### Customize Colors
Edit the CSS files or modify `src/styles/index.css`:
- Primary color: `#ed9ed6` (pink)
- Background: `#190025` (dark purple)
- Font: Press Start 2P (retro style)

### Update Images
Replace files in `images/` folder:
- `character.gif` - Your character animation
- `aha_icon.png` & `nstem_icon.png` - Experience icons
- `ground_block.png` - Bottom background
- `left arrow.png` & `right arrow.png` - Navigation arrows
- `linkedin.png` & `github.png` - Social icons

## Responsive Design Features

Your portfolio now automatically adjusts to:
- ✅ Mobile phones (320px - 480px)
- ✅ Tablets (481px - 768px)
- ✅ Desktop (769px+)

No code changes needed - all breakpoints are built in!

## Deployment Options

### GitHub Pages (Free)
```bash
# Build first
npm run build

# Then push dist/ folder to gh-pages branch
```

### Netlify
1. Connect your GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import project from GitHub
2. Framework: Vite
3. Deploy!

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Images not showing?**
- Check files are in `public/images/`
- Restart dev server

**Styles not updating?**
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server

**Build errors?**
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

## Need Help?

- React docs: https://react.dev
- Vite docs: https://vitejs.dev
- React Router: https://reactrouter.com
- Tailwind CSS (if you want to add it): https://tailwindcss.com

Happy coding! 🎨
