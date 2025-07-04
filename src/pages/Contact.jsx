import './Contact.css'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WorkIcon from '@mui/icons-material/Work'
import { contactConfig } from '../config/contact'

function Contact() {
  return (
    <div className="page-content">
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's connect</h3>
              <p>
                I'm a computer science student passionate about technology, robotics, and innovation. 
                I'm always eager to learn, collaborate on exciting projects, or discuss the latest 
                developments in tech and robotics!
              </p>
              <p>
                Whether you're interested in collaborating on a robotics project, need help with 
                software development, or just want to connect with a fellow tech enthusiast, 
                I'd love to hear from you.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <EmailIcon className="contact-icon" />
                  <span 
                    className="contact-email"
                    onClick={() => navigator.clipboard?.writeText(contactConfig.email)}
                    title="Click to copy email"
                  >
                    {contactConfig.email}
                  </span>
                </div>
                <div className="contact-item">
                  <LocationOnIcon className="contact-icon" />
                  <span>{contactConfig.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
