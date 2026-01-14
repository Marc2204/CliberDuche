import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title-contact">CONTACT US</h2>
        <p className="section-subtitle">Get in touch with our team</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>📍Office Address</h3>
              <p>Lot 3739 National Highway, 3/F CBD Building
Brgy. Pulo, Cabuyao City, Laguna, Philippines</p>
            </div>
            <div className="info-item">
              <h3>📞Phone</h3>
              <p>+63 49 546-6107 / 0967-302-6643</p>
            </div>
            <div className="info-item">
              <h3>✉️Email</h3>
              <p>cliberduche.corp@yahoo.com</p>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;