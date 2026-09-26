import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Landmark, GraduationCap, Scroll, Medal, User, 
  Building2, FileText, Settings, Search, ClipboardEdit, Star, 
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'UG', 'PG', 'Diploma', 'Certification'];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <GraduationCap size={16} className="badge-icon" /> Your Future <span className="dot">•</span> Our Mission
          </div>
          <h1 className="hero-title">
            Learn Today,<br />
            <span className="text-blue relative-text">Lead Tomorrow<span className="yellow-swoosh"></span></span>
          </h1>
          <p className="hero-description">
            Gen Spark University offers quality education with<br />
            modern learning, expert guidance and a brighter future<br />
            for every student.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary">Explore Courses <ArrowRight size={16} className="ml-2" /></Link>
            <Link to="/apply-now" className="btn btn-outline">Admission Now</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper"><GraduationCap className="stat-icon" size={18} color="#3b82f6" /></div>
              <div className="stat-text">
                <span className="stat-value">UG / PG / MBA</span>
                <span className="stat-label">Wide Range of Courses</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><User className="stat-icon" size={18} color="#3b82f6" /></div>
              <div className="stat-text">
                <span className="stat-value">Expert Faculty</span>
                <span className="stat-label">Learn from the Best</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><Medal className="stat-icon" size={18} color="#3b82f6" /></div>
              <div className="stat-text">
                <span className="stat-value">Trusted & Recognized</span>
                <span className="stat-label">Build Your Career</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-text-art-svg">
            <svg width="300" height="150" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="20" y="40" fontFamily="Caveat, cursive" fontSize="32" fontWeight="bold" fill="#2563eb" transform="rotate(-10 20 40)">Better</text>
              <text x="60" y="80" fontFamily="Caveat, cursive" fontSize="38" fontWeight="bold" fill="#2563eb" transform="rotate(-10 60 80)">Education</text>
              <text x="70" y="120" fontFamily="Caveat, cursive" fontSize="32" fontWeight="bold" fill="#2563eb" transform="rotate(-10 70 120)">Brighter Future</text>

            </svg>
          </div>
          <div className="hero-image-wrapper">
             <img src="/girl.png" alt="Student" className="hero-graphic" />
          </div>
          
          <div className="floating-card course-card">
            <div className="card-icon bg-blue"><GraduationCap size={20} color="white" /></div>
            <div className="card-text">
              <strong>Multiple<br/>Courses</strong>
              <span>UG / PG / MBA</span>
            </div>
            <div className="dots-container">
               <span className="dot active"></span><span className="dot"></span><span className="dot"></span>
            </div>
          </div>



          <div className="floating-card skill-card">
            <div className="card-icon text-blue"><Landmark size={24} color="#3b82f6" /></div>
            <div className="card-text">
              <strong>Skill Based<br/>Learning</strong>
              <span>For Real World</span>
            </div>
          </div>


        </div>
      </section>

      {/* University Collaborations Banner */}
      <section className="collaborations-banner">
        <div className="collab-header">
          <h3>University<br/>Collaborations</h3>
          <p>Learn through recognized<br/>and reputed universities.</p>
        </div>
        <div className="collab-logos">
          <div className="collab-logo">
            <div className="logo-placeholder alagappa-logo">A</div>
            <div className="collab-details">
              <strong>Alagappa University</strong>
              <span>Tamil Nadu</span>
            </div>
          </div>
          <div className="collab-logo">
            <div className="logo-placeholder bharathidasan-logo">B</div>
            <div className="collab-details">
              <strong>Bharathidasan University</strong>
              <span>Tamil Nadu</span>
            </div>
          </div>
        </div>
        <div className="collab-stats-right">
          <div><User size={16} className="icon" /> 100+ Courses</div>
          <div><Building2 size={16} className="icon" /> Multiple Programs</div>
        </div>
      </section>

      {/* Choose Your Learning Path */}
      <section className="learning-path-section">
        <div className="section-header-center">
          <span className="badge">EXPLORE</span>
          <h2>Choose Your Learning Path</h2>
          <p>Find a program that matches your goals.</p>
        </div>
        
        <div className="path-grid">
          <div className="path-card bg-light-blue">
            <div className="path-icon text-blue"><GraduationCap size={32} /></div>
            <h3>Undergraduate</h3>
            <p>Build your foundation<br/>for a brighter future.</p>
            <Link to="/courses/ug" className="path-link text-blue">Explore &rarr;</Link>
          </div>
          <div className="path-card bg-light-purple">
            <div className="path-icon text-purple"><BookOpen size={32} /></div>
            <h3>Postgraduate</h3>
            <p>Deepen your expertise<br/>and grow your career.</p>
            <Link to="/courses/pg" className="path-link text-purple">Explore &rarr;</Link>
          </div>
          <div className="path-card bg-light-green">
            <div className="path-icon text-green"><FileText size={32} /></div>
            <h3>Diploma</h3>
            <p>Gain practical skills<br/>for real world opportunities.</p>
            <Link to="/courses/diploma" className="path-link text-green">Explore &rarr;</Link>
          </div>
          <div className="path-card bg-light-orange">
            <div className="path-icon text-orange"><Settings size={32} /></div>
            <h3>Certification</h3>
            <p>Boost your skills with<br/>industry-preferred courses.</p>
            <Link to="/courses/certification" className="path-link text-orange">Explore &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Learn Through Recognized Universities */}
      <section className="recognized-universities-section">
        <div className="section-header-center">
          <span className="badge">OUR PARTNER UNIVERSITIES</span>
          <h2>Learn Through Recognized Universities</h2>
          <p>Get access to quality education through our trusted University partners.</p>
        </div>
        
        <div className="uni-carousel">
          <button className="nav-btn prev-btn">&larr;</button>
          
          <div className="uni-cards-container">
            <div className="uni-detail-card">
              <div className="uni-info">
                <div className="uni-logo-header">
                  <div className="logo-placeholder alagappa-logo">A</div>
                  <div>
                    <h4>Alagappa University</h4>
                    <span className="location">Tamil Nadu</span>
                  </div>
                </div>
                <p>University Programs</p>
                <Link to="/universities/alagappa" className="view-programs-link text-blue">View Programs &rarr;</Link>
              </div>
              <div className="uni-image-area bg-alagappa"></div>
            </div>
            
            <div className="uni-detail-card">
              <div className="uni-info">
                <div className="uni-logo-header">
                  <div className="logo-placeholder bharathidasan-logo">B</div>
                  <div>
                    <h4>Bharathidasan University</h4>
                    <span className="location">Tamil Nadu</span>
                  </div>
                </div>
                <p>University Programs</p>
                <Link to="/universities/bharathidasan" className="view-programs-link text-blue">View Programs &rarr;</Link>
              </div>
              <div className="uni-image-area bg-bharathidasan"></div>
            </div>
          </div>
          
          <button className="nav-btn next-btn">&rarr;</button>
        </div>
      </section>

      {/* Explore Featured Programs */}
      <section className="featured-programs">
        <div className="section-header-center">
          <span className="badge">FEATURED COURSES</span>
          <h2>Explore Featured Programs</h2>
          <p>Discover programs designed to help you move forward.</p>
        </div>
        
        <div className="program-tabs">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="programs-grid">
          {/* Program 1 */}
          <div className="program-card">
            <div className="program-img-wrapper img-cs">
              <span className="program-badge">UG</span>
            </div>
            <div className="program-content">
              <h4>B.Sc Computer Science</h4>
              <div className="program-meta">
                <span>⏱️ 3 Years</span>
                <span>🎓 Undergraduate</span>
              </div>
              <div className="program-uni-tag">
                <div className="mini-logo alagappa-logo">A</div>
                Alagappa University
              </div>
              <div className="program-footer">
                <Link to="/courses/bsc-cs" className="view-course-link text-blue">View Course &rarr;</Link>
                <button className="icon-btn-round">&rarr;</button>
              </div>
            </div>
          </div>
          
          {/* Program 2 */}
          <div className="program-card">
            <div className="program-img-wrapper img-bio">
              <span className="program-badge">PG</span>
            </div>
            <div className="program-content">
              <h4>M.Sc Biotechnology</h4>
              <div className="program-meta">
                <span>⏱️ 2 Years</span>
                <span>🎓 Postgraduate</span>
              </div>
              <div className="program-uni-tag">
                <div className="mini-logo bharathidasan-logo">B</div>
                Bharathidasan University
              </div>
              <div className="program-footer">
                <Link to="/courses/msc-bio" className="view-course-link text-blue">View Course &rarr;</Link>
                <button className="icon-btn-round">&rarr;</button>
              </div>
            </div>
          </div>
          
          {/* Program 3 */}
          <div className="program-card">
            <div className="program-img-wrapper img-dca">
              <span className="program-badge">Diploma</span>
            </div>
            <div className="program-content">
              <h4>Diploma in Computer Applications</h4>
              <div className="program-meta">
                <span>⏱️ 1 Year</span>
                <span>🎓 Diploma</span>
              </div>
              <div className="program-uni-tag">
                <div className="mini-logo alagappa-logo">A</div>
                Alagappa University
              </div>
              <div className="program-footer">
                <Link to="/courses/dca" className="view-course-link text-blue">View Course &rarr;</Link>
                <button className="icon-btn-round">&rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us-section">
        <div className="why-content-left">
          <span className="badge text-white">WHY CHOOSE US</span>
          <h2>More Than a Course.<br/>A Path Forward.</h2>
          <p>We make quality education accessible through trusted universities, flexible learning options and a simple admission process.</p>
        </div>
        <div className="why-grid">
          <div className="why-item">
            <div className="why-number">01</div>
            <div className="why-text">
              <h4>University Collaborations</h4>
              <p>Learn through partnered institutions.</p>
            </div>
            <div className="why-arrow">&rarr;</div>
          </div>
          <div className="why-item">
            <div className="why-number">02</div>
            <div className="why-text">
              <h4>Career-Focused Programs</h4>
              <p>Programs aligned with modern careers.</p>
            </div>
            <div className="why-arrow">&rarr;</div>
          </div>
          <div className="why-item">
            <div className="why-number">03</div>
            <div className="why-text">
              <h4>Simple Admission Process</h4>
              <p>Hassle-free and transparent application process.</p>
            </div>
            <div className="why-arrow">&rarr;</div>
          </div>
          <div className="why-item">
            <div className="why-number">04</div>
            <div className="why-text">
              <h4>Accessible Learning</h4>
              <p>Learn at your pace, from anywhere.</p>
            </div>
            <div className="why-arrow">&rarr;</div>
          </div>
        </div>
      </section>

      {/* Your Admission Journey */}
      <section className="admission-journey-section">
        <div className="section-header-center">
          <span className="badge">HOW IT WORKS</span>
          <h2>Your Admission Journey</h2>
          <p>Get started in just a few simple steps.</p>
        </div>
        
        <div className="journey-stepper">
          <div className="journey-step">
            <div className="step-icon-circle bg-blue-grad">
              <Search size={32} />
            </div>
            <h4>Explore<br/>Courses</h4>
            <p>Browse a wide range of programs and universities.</p>
          </div>
          <div className="step-connector">&rarr;</div>
          <div className="journey-step">
            <div className="step-icon-circle bg-blue-grad">
              <FileText size={32} />
            </div>
            <h4>Choose<br/>Program</h4>
            <p>Find the right course for your goals.</p>
          </div>
          <div className="step-connector">&rarr;</div>
          <div className="journey-step">
            <div className="step-icon-circle bg-blue-grad">
              <ClipboardEdit size={32} />
            </div>
            <h4>Apply<br/>Online</h4>
            <p>Fill in your details and submit your application.</p>
          </div>
          <div className="step-connector">&rarr;</div>
          <div className="journey-step">
            <div className="step-icon-circle bg-blue-grad">
              <Star size={32} />
            </div>
            <h4>Start<br/>Learning</h4>
            <p>Get enrolled and begin your journey.</p>
          </div>
        </div>
      </section>

      {/* What Our Students Say */}
      <section className="testimonials-section">
        <div className="section-header-center">
          <span className="badge">STUDENT STORIES</span>
          <h2>What Our Students Say</h2>
          <p>Real stories. Real people. Real success.</p>
        </div>
        
        <div className="testimonials-carousel">
          <button className="nav-btn prev-btn">&larr;</button>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="quote">"This platform made it so easy to find the right course and apply. The support team was really helpful."</p>
              <div className="test-author-row">
                <div className="author-img placeholder-img"></div>
                <div className="author-info">
                  <strong>Priya Dharshini</strong>
                  <span>B.Sc Computer Science • Alagappa University</span>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="quote">"I got admission to my dream course without any hassle. The process was smooth and simple."</p>
              <div className="test-author-row">
                <div className="author-img placeholder-img"></div>
                <div className="author-info">
                  <strong>Arun Kumar</strong>
                  <span>M.Sc Biotechnology • Bharathidasan University</span>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="quote">"Great platform with genuine universities and proper guidance. Highly recommended!"</p>
              <div className="test-author-row">
                <div className="author-img placeholder-img"></div>
                <div className="author-info">
                  <strong>Sneha R</strong>
                  <span>B.A English • Alagappa University</span>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="nav-btn next-btn">&rarr;</button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bottom-cta-section">
        <div className="cta-banner">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Find your Spark. Apply Now to enroll.</p>
            <Link to="/admissions" className="btn btn-white-rounded">Apply Now &rarr;</Link>
          </div>
          <div className="cta-decoration">
            <span className="decorative-text">Your<br/>dreams<br/>matter</span>
            <span className="decorative-arrow">&rarr;</span>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
