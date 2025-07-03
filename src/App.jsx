import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')
  
  // Detect system preference for dark mode
  const getSystemPreference = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  const [isDarkMode, setIsDarkMode] = useState(getSystemPreference())

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleThemeChange = (e) => {
      console.log('System theme changed to:', e.matches ? 'dark' : 'light')
      setIsDarkMode(e.matches)
      document.body.classList.toggle('dark-mode', e.matches)
      document.body.classList.toggle('light-mode', !e.matches)
    }

    // Set initial theme based on system preference
    console.log('Initial system preference:', isDarkMode ? 'dark' : 'light')
    document.body.classList.toggle('dark-mode', isDarkMode)
    document.body.classList.toggle('light-mode', !isDarkMode)

    // Listen for changes in system theme
    mediaQuery.addEventListener('change', handleThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={isDarkMode ? 'src/assets/CW Dark.png' : 'src/assets/CW Light.png'} alt="Logo" className="logo" />
            <span>Chia-Sheng Wang</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a 
              href="#home" 
              className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`nav-link ${currentSection === 'services' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className={`nav-link ${currentSection === 'portfolio' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </div>
          <div className="nav-actions">
            <div className="theme-indicator">
              <span className="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
              <span className="theme-text">Auto</span>
            </div>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Your Website</span>
            </h1>
            <p className="hero-subtitle">
              Create amazing experiences with modern web technologies
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Hi, I'm a passionate developer</h3>
              <p>
                I specialize in creating modern, responsive websites and applications 
                using the latest technologies. With a focus on user experience and 
                clean code, I bring ideas to life through innovative web solutions.
              </p>
              <div className="skills">
                <span className="skill">React</span>
                <span className="skill">JavaScript</span>
                <span className="skill">TypeScript</span>
                <span className="skill">CSS3</span>
                <span className="skill">Node.js</span>
                <span className="skill">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Mobile-first designs that work perfectly on all devices</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Fast-loading websites optimized for speed and SEO</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful and intuitive user interfaces that engage users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 1</div>
              </div>
              <div className="portfolio-content">
                <h3>Modern E-commerce</h3>
                <p>A full-stack e-commerce solution with React and Node.js</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 2</div>
              </div>
              <div className="portfolio-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>Socket.io</span>
                  <span>Express</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 3</div>
              </div>
              <div className="portfolio-content">
                <h3>Portfolio Website</h3>
                <p>A responsive portfolio website with smooth animations</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Your City, Country</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2025 Your Name. All rights reserved.</p>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="GitHub">
                <span>📚</span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" aria-label="Twitter">
                <span>🐦</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
