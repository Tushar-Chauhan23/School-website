// import React from 'react';
import '../css/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-info">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p className="address">
            <strong>Address:</strong> Bright Home Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <p className="phone">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="email">
            <strong>Email:</strong> <a href="mailto:info@brighthome.edu">info@brighthome.edu</a>
          </p>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <section className="map">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.084249!3d37.422035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb7ee2d5d73b%3A0x89b7d21b8e1b6d3d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633564589467!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
