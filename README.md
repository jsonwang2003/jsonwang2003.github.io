# Chia-Sheng Wang Portfolio Website

A modern, responsive portfolio website showcasing my professional journey, skills, and projects. Built with cutting-edge web technologies for optimal performance and user experience.

🌐 **Live Site**: [https://jsonwang2003.vercel.app](https://jsonwang2003.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjsonwang2003%2Fjsonwang2003.github.io)

## ✨ Features

- **Modern Design**: Clean, professional interface with Material-UI components
- **Responsive Layout**: Seamless experience across desktop, tablet, and mobile devices
- **Theme Support**: Light and dark theme support with smooth transitions
- **Interactive Navigation**: Sliding border animations and active page indicators
- **Performance Optimized**: Built with Vite for lightning-fast loading
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Proper meta tags and structured data

## 🏗️ Project Structure

```
├── public/                 # Static assets
│   ├── favicon-light.png   # Light theme favicon
│   ├── favicon-dark.png    # Dark theme favicon
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navigation.jsx # Main navigation with hover effects
│   │   └── Footer.jsx     # Footer with social links
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About me section
│   │   ├── Education.jsx  # Educational background
│   │   └── Projects.jsx   # Project showcase
│   ├── assets/            # Project assets
│   ├── theme.jsx          # Material-UI theme configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── vercel.json            # Vercel deployment configuration
├── .env.example           # Environment variables template
└── vite.config.js         # Vite configuration
```

## 🛠️ Technologies Used

### Core Framework

- **React 19.1.0** - Modern React with latest features and hooks
- **Vite 7.0.0** - Next-generation frontend build tool
- **React Router DOM 7.6.3** - Client-side routing with navigation

### UI & Styling

- **Material-UI 7.2.0** - React component library with Material Design
- **Emotion** - CSS-in-JS styling solution
- **Material Icons** - Comprehensive icon library

### Development Tools

- **ESLint** - Code linting and quality assurance
- **GitHub Actions** - Automated CI/CD pipeline
- **Vercel** - Modern deployment platform with global CDN
- **GitHub Pages** - Static site hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jsonwang2003/jsonwang2003.github.io.git
   cd jsonwang2003.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build optimized production bundle        |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint code analysis                 |

## 🎨 Customization

### Theme Configuration

The website uses a custom Material-UI theme with light/dark mode support. Modify `src/theme.jsx`:

```jsx
const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#86d1cc",
            },
            secondary: {
              main: "rgba(255, 149, 0, 0.95)",
            },
            background: {
              default: "#ffffff",
              paper: "#ffffff",
            },
            text: {
              primary: "#212121",
              secondary: "#212121",
            },
            navigationBorder: {
              main: "rgb(0, 116, 211)",
            },
          }
        : {
            primary: {
              main: "#FF6E1A",
            },
            secondary: {
              main: "#1a1a1a",
            },
            background: {
              default: "#0a0a0a",
              paper: "#1a1a1a",
            },
            text: {
              primary: "#ffffff",
              secondary: "#aaaaaa",
            },
            navigationBorder: {
              main: "#ffffffff",
            },
          }),
    },
  });
```

### Navigation Customization

The navigation features interactive hover effects and active page indicators. Modify `src/components/Navigation.jsx` to:

- Add new navigation links
- Customize hover animations
- Change active state styling

### Content Updates

Update personal information in the respective page components:

- **Home**: `src/pages/Home.jsx` - Landing page content
- **About**: `src/pages/About.jsx` - Personal background
- **Education**: `src/pages/Education.jsx` - Academic history
- **Projects**: `src/pages/Projects.jsx` - Portfolio showcase

## 🚀 Deployment

### Automatic Deployment with Vercel (Recommended)

The project is configured for automatic deployment with Vercel:

1. **Connect your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Import your repository
   - Vercel will automatically detect the Vite framework

2. **Every push to main branch will automatically:**
   - Install dependencies
   - Build the project using `npm run build`
   - Deploy to Vercel's global CDN

3. **Features included:**
   - Automatic HTTPS
   - Global CDN
   - Preview deployments for pull requests
   - Custom domains support

### Manual Deployment

**Using Vercel CLI:**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to production
npm run deploy

# Deploy to preview
npm run deploy-dev
```

**Using npm commands:**

```bash
npm run build
# Then manually deploy the dist/ folder to your hosting provider
```

## 🌐 Vercel Configuration

The site is optimized for Vercel deployment:

- **Framework**: Automatically detected as Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (recommended)
- **SPA Routing**: Configured via `vercel.json`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: 1200px+ (Full navigation, multi-column layouts)
- **Tablet**: 768px - 1199px (Adapted layouts)
- **Mobile**: < 768px (Stacked layouts, touch-optimized)

## 🔧 Development Notes

### Key Features Implemented

1. **Interactive Navigation**

   - Sliding border animations on hover
   - Active page indicators
   - Smooth transitions

2. **Material-UI Integration**

   - Custom theme with light/dark support
   - Responsive typography
   - Consistent component styling

3. **Performance Optimizations**
   - Code splitting with manual chunks
   - Optimized bundle sizes
   - Fast refresh during development

## �‍💻 About the Developer

**Chia-Sheng Wang**

- GitHub: [@jsonwang2003](https://github.com/jsonwang2003)
- LinkedIn: [Chia-Sheng Wang](https://www.linkedin.com/in/chia-sheng-wang/)
- Email: jason0100w@gmail.com

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the excellent React components
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [React Router](https://reactrouter.com/) for seamless navigation
- [GitHub Pages](https://pages.github.com/) for free hosting

---

**Built with ❤️ using React + Vite + Material-UI**
