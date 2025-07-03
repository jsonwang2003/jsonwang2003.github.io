import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
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

  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/' || path === '/home') return 'home'
    if (path === '/about') return 'about'
    if (path === '/services') return 'services'
    if (path === '/portfolio') return 'portfolio'
    if (path === '/contact') return 'contact'
    return 'home'
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={isDarkMode ? '/CW Dark.png' : '/CW Light.png'} alt="Logo" className="logo" />
          <span className="nav-logo-text">Chia-Sheng Wang</span>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${getCurrentPage() === 'home' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${getCurrentPage() === 'about' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${getCurrentPage() === 'services' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-link ${getCurrentPage() === 'portfolio' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${getCurrentPage() === 'contact' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
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
  )
}

export default Navigation
