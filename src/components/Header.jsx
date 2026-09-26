import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
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
              <li><Link to="/" className="active" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
              <li className="dropdown">
                <Link to="#" className="nav-link-dropdown">Universities</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/universities/alagappa-university" onClick={closeMobileMenu}>Alagappa University</Link></li>
                  <li><Link to="/universities/bharathidasan-university" onClick={closeMobileMenu}>Bharathidasan University</Link></li>
                </ul>
              </li>
              <li><Link to="/courses" onClick={closeMobileMenu}>Courses</Link></li>
              <li><Link to="/admissions" onClick={closeMobileMenu}>Admission</Link></li>
              <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
              <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
          <div className="header-actions">
            <Link to="/apply-now" className="btn btn-primary" onClick={closeMobileMenu}>
              Apply Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '6px'}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
