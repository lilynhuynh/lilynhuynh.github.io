# Lily's Portfolio - React Version

A modern, responsive portfolio website built with **React**, **Vite**, and **React Router**. This retro pixel-art themed portfolio works seamlessly on desktop, tablet, and mobile devices.

## Features

✨ **Responsive Design** - Mobile-first approach with breakpoints for mobile (480px), tablet (768px), and desktop
🎮 **Retro Aesthetic** - Maintains your original pixel-art style with Press Start 2P font
⚡ **Fast & Modern** - Built with Vite for instant dev experience and optimized builds
🧩 **Component-Based** - Reusable, maintainable React components
🎯 **Single Page Application** - Smooth navigation using React Router
📱 **Touch-Friendly** - Interactive modals and navigation optimized for all devices

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── CharacterDisplay.jsx
│   ├── ExperienceCard.jsx
│   ├── Ground.jsx
│   ├── Navigation.jsx
│   ├── SpeechBubble.jsx
│   └── modal/
│       └── ExperienceModal.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── AboutMe.jsx
│   ├── Experiences.jsx
│   └── Contact.jsx
├── data/
│   └── experiences.js   # Experience data
├── styles/              # CSS modules
│   ├── index.css        # Global styles
│   ├── App.css          # App layout
│   ├── components/      # Component styles
│   └── pages/           # Page styles
├── App.jsx              # Main app with routing
└── main.jsx             # React entry point
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server will open at `http://localhost:3000` with hot module reloading.

## Responsive Breakpoints

The design is fully responsive with optimizations for:

- **Mobile**: ≤ 480px
- **Tablet**: ≤ 768px
- **Desktop**: > 768px

All components, fonts, and spacing adapt gracefully to screen size.

## Customization

### Adding New Pages

1. Create a new file in `src/pages/YourPage.jsx`
2. Add the route to `src/App.jsx`:
```jsx
<Route path="/your-page" element={<YourPage />} />
```

### Modifying Experiences

Edit `src/data/experiences.js` to add/update your experience entries.

### Updating Styles

Each component has a dedicated CSS file in `src/styles/components/` or `src/styles/pages/`

## Available Routes

- `/` - Home
- `/about` - About Me
- `/experiences` - Work Experiences
- `/contact` - Contact & Social Links

## Technology Stack

- **React 18** - UI library
- **Vite 5** - Build tool & dev server
- **React Router 6** - Client-side routing
- **CSS 3** - Responsive styling

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Deployment

The build is optimized and ready for deployment. Build the project:

```bash
npm run build
```

The `dist/` folder contains optimized production files ready to deploy to GitHub Pages, Netlify, or any static host.

## License

Your portfolio, your rules! 🎨
