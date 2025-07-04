import './Education.css'
import WebIcon from '@mui/icons-material/Web'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SpeedIcon from '@mui/icons-material/Speed'
import PaletteIcon from '@mui/icons-material/Palette'
import SettingsIcon from '@mui/icons-material/Settings'
import CloudIcon from '@mui/icons-material/Cloud'

function Education() {
  return (
    <div className="page-content">
      <section className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <WebIcon sx={{ fontSize: 48 }} />
              </div>
              <h3>University of California, San Diego</h3>
              <p>Custom websites and web applications built with modern technologies like React, Vue, and Angular. From simple landing pages to complex enterprise applications.</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <PhoneAndroidIcon sx={{ fontSize: 48 }} />
              </div>
              <h3>Responsive Design</h3>
              <p>Mobile-first designs that work perfectly on all devices. Ensuring your website looks great and functions flawlessly across all screen sizes.</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <SpeedIcon sx={{ fontSize: 48 }} />
              </div>
              <h3>Performance Optimization</h3>
              <p>Fast-loading websites optimized for speed and SEO. Using modern techniques like code splitting, lazy loading, and CDN optimization.</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <PaletteIcon sx={{ fontSize: 48 }} />
              </div>
              <h3>UI/UX Design</h3>
              <p>Beautiful and intuitive user interfaces that engage users. Creating wireframes, prototypes, and high-fidelity designs that convert.</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <SettingsIcon sx={{ fontSize: 48 }} />
              </div>
              <h3>API Development</h3>
              <p>RESTful APIs and GraphQL endpoints built with Node.js, Express, and modern databases. Secure, scalable, and well-documented.</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <CloudIcon sx={{ fontSize: 48 }} />
              </div>
              <h3>Cloud Deployment</h3>
              <p>Deploy your applications to AWS, Azure, or Google Cloud. CI/CD pipelines, monitoring, and scaling solutions included.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
