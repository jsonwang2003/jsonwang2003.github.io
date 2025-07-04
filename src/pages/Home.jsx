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
              Hi, I'm <span className="gradient-text">Chia-Sheng Wang</span>
            </h1>
            <p className="hero-subtitle">
              Computer Science Student | Robotics Enthusiast | Future Innovator
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
