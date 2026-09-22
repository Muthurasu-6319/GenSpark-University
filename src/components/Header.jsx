import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/images/GenSpark-landscape-logo.png" alt="Gen Spark University" className="logo-img" />
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-actions-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <nav className="main-nav">
            <ul>
              <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
              <li className="nav-dropdown">
                <span className="dropdown-trigger">Universities</span>
                <ul className="dropdown-menu">
                  <li><Link to="/universities/alagappa-university" onClick={closeMobileMenu}>Alagappa University</Link></li>
                  <li><Link to="/universities/bharathidasan-university" onClick={closeMobileMenu}>Bharathidasan University</Link></li>
                </ul>
              </li>
              <li><Link to="/courses" onClick={closeMobileMenu}>Courses</Link></li>
              <li><Link to="/admissions" onClick={closeMobileMenu}>Admissions</Link></li>
              <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
          <div className="header-actions">
            <Link to="/application-status" className="status-link" onClick={closeMobileMenu}>Application Status</Link>
            <Link to="/apply-now" className="btn btn-primary" onClick={closeMobileMenu}>Apply Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
