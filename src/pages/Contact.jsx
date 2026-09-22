import React, { useState } from 'react';
import './Contact.css';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    university: '',
    course: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', mobile: '', email: '', university: '', course: '', message: '' });
    }, 4000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content text-center">
            <span className="subtitle text-primary mb-2 block">SUPPORT</span>
            <h1 className="mb-4">We're Here to Help</h1>
            <p className="mb-0 max-w-2xl mx-auto">
              Have questions about admissions, courses, or fees? Our dedicated support team is ready to guide you through your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info Sidebar */}
            <div className="contact-sidebar">
              <div className="info-card">
                <h3>Contact Information</h3>
                
                <div className="info-item">
                  <div className="info-icon text-primary"><Phone size={24} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon text-green-600"><MessageCircle size={24} /></div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon text-primary"><Mail size={24} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@gensparkuni.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon text-primary"><MapPin size={24} /></div>
                  <div>
                    <h4>Address</h4>
                    <p>123 Education Hub, Knowledge Park,<br/>Chennai, Tamil Nadu, 600001</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon text-primary"><Clock size={24} /></div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="whatsapp-cta">
                <MessageCircle size={40} className="wa-icon" />
                <h3>Need Instant Help?</h3>
                <p>Chat directly with our admission counselors on WhatsApp for quick responses.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-wa">
                  <MessageCircle size={18} /> Chat With Admission Team
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>

              {isSubmitted && (
                <div className="success-msg">
                  <span className="success-icon">✅</span>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. Our team will contact you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred University</label>
                    <select name="university" value={formData.university} onChange={handleChange}>
                      <option value="">Select University</option>
                      <option value="Alagappa University">Alagappa University</option>
                      <option value="Bharathidasan University">Bharathidasan University</option>
                      <option value="Other/Not Sure">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Interested Course</label>
                    <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="E.g., MBA, B.Sc" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          title="Gen Spark Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.208151528659!2d76.9532801!3d11.0229871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzIyLjgiTiA3NsKwNTcnMTEuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0, display: 'block' }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </section>
    </div>
  );
};

export default Contact;
