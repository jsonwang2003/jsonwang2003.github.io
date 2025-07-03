# Modern Static Website Template

A beautiful, responsive static website template built with **Vite** and **React.js**. This template features modern design patterns, smooth animations, and a mobile-first approach.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Smooth Navigation**: Smooth scrolling between sections with active navigation indicators
- **Interactive Elements**: Hover effects, form validation, and mobile-friendly hamburger menu
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal/company information with skill tags
3. **Services Section**: Grid layout showcasing services with icons
4. **Portfolio Section**: Project showcase with descriptions and tags
5. **Contact Section**: Contact form and information
6. **Footer**: Social links and copyright information

## 🛠️ Technologies Used

- **React 19.1.0**: Modern React with hooks
- **Vite 7.0.0**: Fast build tool and development server
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **JavaScript ES6+**: Modern JavaScript features
- **Google Fonts**: Inter font family for clean typography

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The website uses a gradient color scheme that can be easily customized by modifying the CSS custom properties in `src/App.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Secondary gradient */
background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
```

### Content

Update the content in `src/App.jsx`:

1. **Navigation**: Modify the `nav-logo` and navigation links
2. **Hero Section**: Change the title, subtitle, and button text
3. **About Section**: Update personal information and skills
4. **Services**: Modify service cards with your offerings
5. **Portfolio**: Add your projects with descriptions
6. **Contact**: Update contact information and form

### Styling

All styles are contained in `src/App.css` and follow a mobile-first approach. Key areas to customize:

- **Typography**: Font sizes and weights
- **Colors**: Primary and secondary color schemes
- **Spacing**: Padding and margins
- **Animations**: Hover effects and transitions

## 📱 Mobile Responsiveness

The template is fully responsive with breakpoints at:

- **768px**: Tablet layout
- **480px**: Mobile layout

Features include:

- Collapsible navigation menu
- Stacked layouts for mobile
- Optimized touch targets
- Readable typography on small screens

## 🌐 Deployment

### GitHub Pages

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern web design trends
- Icons from Unicode emojis
- Fonts from Google Fonts
- Built with Vite and React

---

**Happy coding! 🚀**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
