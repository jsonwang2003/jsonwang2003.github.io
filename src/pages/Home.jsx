import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Your Website</span>
            </h1>
            <p className="hero-subtitle">
              Create amazing experiences with modern web technologies
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
