import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <img src="/images/GenSpark-landscape-logo.png" alt="Gen Spark University" className="footer-logo-img" />
          </Link>
          <p className="footer-desc">
            Empowering students through university-partnered education and flexible learning programs.
          </p>
        </div>
        
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/universities">Universities</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Programs</h3>
          <ul>
            <li><Link to="/courses/ug">UG</Link></li>
            <li><Link to="/courses/pg">PG</Link></li>
            <li><Link to="/courses">All Courses</Link></li>
          </ul>
          <h3 className="mt-4">Student</h3>
          <ul>
            <li><Link to="/admissions/apply">Apply Now</Link></li>
            <li><Link to="/application-status">Application Status</Link></li>
            <li><Link to="/admissions/documents">Documents Required</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Phone: +91 9876543210</li>
            <li>Email: info@gensparkuni.com</li>
            <li>WhatsApp: +91 9876543210</li>
            <li>Address: Chennai, Tamil Nadu, India</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/legal/privacy">Privacy Policy</Link></li>
            <li><Link to="/legal/terms">Terms & Conditions</Link></li>
            <li><Link to="/legal/refund">Refund Policy</Link></li>
            <li><Link to="/legal/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gen Spark University. All rights reserved.</p>
          <p className="powered-by">Powered by Gen Z Neural-X</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
