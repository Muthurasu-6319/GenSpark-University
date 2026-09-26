import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { 
  Building2, BookOpen, Target, Settings, Settings2, ShieldCheck, 
  HeartHandshake, Zap, GraduationCap, ArrowRight, User, Star, MonitorPlay, Briefcase, Award, CheckCircle2, HeadphonesIcon
} from 'lucide-react';

const About = () => {
  return (
    <div className="about-page-redesign">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <span className="subtitle text-blue">ABOUT US</span>
              <h1 className="hero-title">
                Your Education,<br />
                Our <span className="text-blue">Collaboration</span>
              </h1>
              <p className="hero-desc">
                <strong>Gen Spark University</strong> is a smart education initiative by Gen Spark, designed to bring the best of university education to every learner. We collaborate with reputed universities to offer quality, flexible and future-ready courses that match your goals and aspirations.
              </p>
              
              <div className="hero-badges">
                <div className="badge-item">
                  <div className="badge-icon bg-blue-light"><ShieldCheck size={20} color="#0064ff"/></div>
                  <span>Trusted<br/>Universities</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon bg-blue-light"><BookOpen size={20} color="#0064ff"/></div>
                  <span>Industry-Aligned<br/>Courses</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon bg-blue-light"><Target size={20} color="#0064ff"/></div>
                  <span>Better Career<br/>Opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="about-hero-visual">
              <div className="visual-background-shape">
                <div className="shape-blue"></div>
                <div className="shape-yellow"></div>
              </div>
              <img src="/hero_student.png" alt="Student looking at university" className="about-student-img" />
              
              {/* Floating elements */}
              <div className="floating-gs-logo">
                 <img src="/images/GenSpark-Icon.png" alt="Gen Spark Logo" />
              </div>
              
              <div className="floating-handdrawn-text">
                <span className="drawn-learn">Learn</span>
                <span className="drawn-grow">Grow</span>
                <span className="drawn-succeed">Succeed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="collab-section">
        <div className="container relative">
          <div className="collab-header">
            <span className="subtitle text-blue">OUR PARTNER UNIVERSITIES</span>
            <h2 className="section-title">In Collaboration with<br/>Renowned <span className="text-blue">Universities</span></h2>
            <p className="section-desc">
              We are proud to partner with two prestigious universities — Alagappa University and Bharathidasan University — to bring you the best academic programs, expert faculty, and a trusted learning experience.
            </p>
          </div>
          
          <div className="collab-drawn-text">
            <span className="c-text-1">Prestigious</span>
            <span className="c-text-2">Partnerships</span>
            <span className="c-text-3">for Your Future</span>
            <svg width="180" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="c-text-underline">
              <path d="M5 15Q40 5 115 5" stroke="#facc15" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="collab-cards">
            {/* Alagappa Card */}
            <div className="uni-card-large">
              <div className="uni-card-img-wrapper">
                <img src="/images/university.png" alt="Alagappa University" className="uni-building-img" />
              </div>
              <div className="uni-card-content">
                <div className="uni-logo-wrapper">
                  <img src="/images/alagappa-logo.jpg" alt="Alagappa Logo" />
                </div>
                <div className="uni-text">
                  <h3>Alagappa University</h3>
                  <div className="uni-tags">
                    <span>Excellence</span> <span className="tag-divider">|</span> <span>Knowledge</span> <span className="tag-divider">|</span> <span>Progress</span>
                  </div>
                  <p>Alagappa University, established in 1985, is a renowned university in Tamil Nadu, known for its academic excellence, research and commitment to higher education.</p>
                  <Link to="/universities/alagappa-university" className="btn btn-outline-small">Explore Courses <ArrowRight size={14}/></Link>
                </div>
              </div>
            </div>

            {/* Bharathidasan Card */}
            <div className="uni-card-large">
              <div className="uni-card-img-wrapper">
                <img src="/images/university.png" alt="Bharathidasan University" className="uni-building-img" />
              </div>
              <div className="uni-card-content">
                <div className="uni-logo-wrapper">
                  <img src="/images/bharathidasan-logo.jpg" alt="Bharathidasan Logo" />
                </div>
                <div className="uni-text">
                  <h3>Bharathidasan University</h3>
                  <div className="uni-tags">
                    <span>Knowledge</span> <span className="tag-divider">|</span> <span>Culture</span> <span className="tag-divider">|</span> <span>Empowerment</span>
                  </div>
                  <p>Bharathidasan University, established in 1982, is a leading university in Tamil Nadu, celebrated for its quality education, research and contribution to society.</p>
                  <Link to="/universities/bharathidasan-university" className="btn btn-outline-small">Explore Courses <ArrowRight size={14}/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <span className="subtitle text-blue">WHY CHOOSE GEN SPARK UNIVERSITY</span>
              <h2 className="section-title">What Makes Us <span className="text-blue">Different?</span></h2>
              <p className="section-desc">
                We go beyond traditional education by combining trusted university programs with modern learning support, flexible access and career-focused guidance — all under one platform.
              </p>
            </div>
            
            <div className="why-right">
              <div className="feature-grid">
                <div className="feat-box">
                  <div className="feat-icon"><Building2 size={28} color="#0064ff"/></div>
                  <span>Recognized<br/>Universities</span>
                </div>
                <div className="feat-box">
                  <div className="feat-icon"><MonitorPlay size={28} color="#0064ff"/></div>
                  <span>Flexible<br/>Learning Modes</span>
                </div>
                <div className="feat-box">
                  <div className="feat-icon"><User size={28} color="#0064ff"/></div>
                  <span>Expert Faculty<br/>& Mentorship</span>
                </div>
                <div className="feat-box">
                  <div className="feat-icon"><Target size={28} color="#0064ff"/></div>
                  <span>Career<br/>Focused Programs</span>
                </div>
                <div className="feat-box">
                  <div className="feat-icon"><Award size={28} color="#0064ff"/></div>
                  <span>Valid University<br/>Certificates</span>
                </div>
                <div className="feat-box">
                  <div className="feat-icon"><HeadphonesIcon size={28} color="#0064ff"/></div>
                  <span>Dedicated<br/>Student Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner-section">
        <div className="container">
          <div className="stats-container">
            <div className="stats-title-box">
              <div className="stats-icon-wrapper"><GraduationCap size={32} color="#0064ff"/></div>
              <h3>Building a Brighter<br/>Future Together</h3>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-number-box">
              <h2>2</h2>
              <span>Partner Universities</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-number-box">
              <h2>100+</h2>
              <span>Courses Available</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-number-box">
              <h2>1000+</h2>
              <span>Future Learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="cta-bg-image"></div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-logo">
              <img src="/images/GenSpark-landscape-logo.png" alt="Gen Spark" />
            </div>
            <div className="cta-text">
              <h2>Ready to <span className="text-blue-light">shape your future</span> with<br/>Gen <span className="text-blue-light">Spark University?</span></h2>
              <p>Explore our partner universities and available courses today.</p>
            </div>
            <div className="cta-action">
              <Link to="/courses" className="btn btn-primary btn-yellow">Explore Courses <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
