import './Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  return (
    <div className="page-content">
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate, have questions 
                about my work, or just want to say hello!
              </p>
              <p>
                Whether you need a new website, want to improve an existing one, 
                or have a completely different project in mind, I'm here to help 
                bring your ideas to life.
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
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <span>Available for freelance work</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
