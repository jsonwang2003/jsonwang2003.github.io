import './Portfolio.css'

function Portfolio() {
  return (
    <div className="page-content">
      <section className="portfolio">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 1</div>
              </div>
              <div className="portfolio-content">
                <h3>Modern E-commerce Platform</h3>
                <p>A full-stack e-commerce solution with React and Node.js featuring user authentication, payment processing, inventory management, and admin dashboard.</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Stripe</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 2</div>
              </div>
              <div className="portfolio-content">
                <h3>Task Management Application</h3>
                <p>A collaborative task management application with real-time updates, team collaboration features, file attachments, and progress tracking.</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>Socket.io</span>
                  <span>Express</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 3</div>
              </div>
              <div className="portfolio-content">
                <h3>Portfolio Website</h3>
                <p>A responsive portfolio website with smooth animations, dark mode support, and automatic theme detection based on system preferences.</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>Vite</span>
                  <span>GitHub Pages</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 4</div>
              </div>
              <div className="portfolio-content">
                <h3>Weather Dashboard</h3>
                <p>A weather application with location-based forecasts, interactive maps, historical data, and customizable weather alerts.</p>
                <div className="portfolio-tags">
                  <span>Vue.js</span>
                  <span>Weather API</span>
                  <span>Chart.js</span>
                  <span>PWA</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 5</div>
              </div>
              <div className="portfolio-content">
                <h3>Social Media Analytics</h3>
                <p>A comprehensive analytics dashboard for social media metrics with data visualization, report generation, and automated insights.</p>
                <div className="portfolio-tags">
                  <span>Angular</span>
                  <span>D3.js</span>
                  <span>Python</span>
                  <span>APIs</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">Project 6</div>
              </div>
              <div className="portfolio-content">
                <h3>Learning Management System</h3>
                <p>An educational platform with course management, video streaming, quizzes, progress tracking, and student-teacher communication.</p>
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Video.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
