import './Services.css'

function Services() {
  return (
    <div className="page-content">
      <section className="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies like React, Vue, and Angular. From simple landing pages to complex enterprise applications.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Mobile-first designs that work perfectly on all devices. Ensuring your website looks great and functions flawlessly across all screen sizes.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Fast-loading websites optimized for speed and SEO. Using modern techniques like code splitting, lazy loading, and CDN optimization.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful and intuitive user interfaces that engage users. Creating wireframes, prototypes, and high-fidelity designs that convert.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>API Development</h3>
              <p>RESTful APIs and GraphQL endpoints built with Node.js, Express, and modern databases. Secure, scalable, and well-documented.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud Deployment</h3>
              <p>Deploy your applications to AWS, Azure, or Google Cloud. CI/CD pipelines, monitoring, and scaling solutions included.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
