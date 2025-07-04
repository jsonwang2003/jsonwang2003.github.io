import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 Chia-Sheng Wang. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/jsonwang2003" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="social-link">
              <GitHubIcon sx={{ fontSize: '2.4rem' }} />
            </a>
            <a href="https://www.linkedin.com/in/chia-sheng-wang/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="social-link">
              <LinkedInIcon sx={{ fontSize: '2.4rem' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
