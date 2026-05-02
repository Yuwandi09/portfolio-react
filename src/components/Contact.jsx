import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot, FaEnvelope, FaPhone } from 'react-icons/fa6'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Get in Touch</h2>
          <p>I'm open to internship opportunities and collaborations. Feel free to reach out!</p>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="info">

              <div className="address">
                <i><FaLocationDot /></i>
                <h4>Location:</h4>
                <p>Sri Lanka</p>
              </div>

              <div className="email">
                <i><FaEnvelope /></i>
                <h4>Email:</h4>
                <p><a href="mailto:yuwandisandanayake@gmail.com">yuwandisandanayake@gmail.com</a></p>
              </div>

              <div className="phone">
                <i><FaPhone /></i>
                <h4>Call / WhatsApp:</h4>
                <p><a href="tel:+94743537714">+94 743 537 714</a></p>
              </div>

              <div className="phone">
                <i><FaLinkedin /></i>
                <h4>LinkedIn:</h4>
                <p><a href="https://www.linkedin.com/in/yuwandi" target="_blank" rel="noopener">Yuwandi Sandanayake</a></p>
              </div>

              <div className="phone">
                <i><FaGithub /></i>
                <h4>GitHub:</h4>
                <p><a href="https://github.com/Yuwandi09" target="_blank" rel="noopener">Yuwandi09</a></p>
              </div>

            </div>
          </div>

          <div className="col-lg-7">
            <form action="https://formspree.io/f/mjgpjlvz" method="POST" className="email-form">
              <div className="form-group">
                <label>Your Name:</label>
                <input type="text" name="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Your Email:</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea name="message" rows="8" className="form-control" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact