import './Footer.css'

function Footer() {
  return (
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
  )
}

export default Footer
