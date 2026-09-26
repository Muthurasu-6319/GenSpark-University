import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { 
  Building2, MonitorPlay, Target, Settings, Settings2, ShieldCheck, 
  BookOpen, HeartHandshake, Zap, GraduationCap, ArrowRight, User, Star
} from 'lucide-react';

const About = () => {
  return (
    <div className="about-page-new">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            <div className="hero-left">
              <span className="subtitle text-blue">ABOUT GEN Z NEURAL X</span>
              <h1 className="hero-title">
                Building a Brighter<br />
                Future Through<br />
                <span className="text-blue">Education & Technology</span>
              </h1>
              <p className="hero-desc">
                Gen Z Neural X is a next-generation education and technology company, bridging the gap between students and universities through innovative learning solutions and digital platforms.
              </p>
              
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-icon-wrapper"><Building2 size={24} color="#3b82f6"/></div>
                  <span>University<br/>Collaboration</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-wrapper"><MonitorPlay size={24} color="#3b82f6"/></div>
                  <span>Modern<br/>Learning</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-wrapper"><Target size={24} color="#3b82f6"/></div>
                  <span>Career<br/>Focused</span>
                </div>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <div className="hero-img-bg-blob"></div>
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" alt="University Students" className="hero-img" />
                
                {/* Floating Elements */}
                <div className="floating-card-brand">
                  <div className="brand-logo">N</div>
                  <div className="brand-text">
                    <strong>GEN Z<br/>NEURAL X</strong>
                    <span>Learn • Grow • Build</span>
                  </div>
                </div>
                
                <div className="handdrawn-text education-text">
                  <span>Education</span>
                  <span>Creates</span>
                  <span>Opportunities</span>
                  <div className="drawn-arrow">&searr;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-left">
              <div className="mission-image-wrapper">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Students learning" className="mission-img" />
                <div className="handdrawn-text together-text">
                  <span>Together</span>
                  <span>We Grow</span>
                  <div className="drawn-arrow-down">&darr;</div>
                </div>
              </div>
            </div>
            
            <div className="mission-right">
              <span className="subtitle text-green">OUR MISSION</span>
              <h2 className="section-title">Empowering Students<br/>with the Right Opportunities</h2>
              <p className="section-desc">
                We aim to make quality higher education accessible to every learner by collaborating with reputed universities and leveraging technology to create seamless learning and admission experiences.
              </p>
              
              <div className="mv-cards">
                <div className="mv-card">
                  <div className="mv-icon"><Settings2 size={24} color="#3b82f6"/></div>
                  <div className="mv-content">
                    <h4>Our Mission</h4>
                    <p>To bridge education and opportunity through technology, partnerships and innovation.</p>
                  </div>
                </div>
                <div className="mv-card">
                  <div className="mv-icon"><Settings size={24} color="#3b82f6"/></div>
                  <div className="mv-content">
                    <h4>Our Vision</h4>
                    <p>To become a leading platform for university education and career-driven learning in India.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-header">
            <div className="impact-title-area">
              <span className="subtitle text-blue">OUR IMPACT</span>
              <h2>Numbers That<br/>Tell Our Story</h2>
              <p>We are just getting started, and every number represents a student's dream, a course, and a step towards a better future.</p>
            </div>
            
            <div className="impact-stats">
              <div className="stat-card">
                <div className="stat-icon bg-blue-light"><GraduationCap size={28} color="#3b82f6"/></div>
                <h3>100+</h3>
                <h4>Courses</h4>
                <p>Across multiple programs and disciplines.</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon bg-blue-light"><Building2 size={28} color="#3b82f6"/></div>
                <h3>2</h3>
                <h4>Partner Universities</h4>
                <p>Alagappa University & Bharathidasan University.</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon bg-blue-light"><User size={28} color="#3b82f6"/></div>
                <h3>1000+</h3>
                <h4>Students</h4>
                <p>Already started their journey with us.</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon bg-blue-light"><Star size={28} color="#3b82f6"/></div>
                <h3>100%</h3>
                <h4>Commitment</h4>
                <p>To your growth and success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="wcu-grid">
            <div className="wcu-left">
              <span className="subtitle text-blue">WHY CHOOSE US</span>
              <h2>More Than Just Education.<br/>It's a Partnership.</h2>
              <p>We combine the credibility of trusted universities with the power of technology to give you a smooth, simple and supportive learning experience.</p>
              <Link to="/courses" className="btn btn-primary">Learn More &rarr;</Link>
            </div>
            
            <div className="wcu-features-grid">
              <div className="wcu-feature">
                <div className="wcu-icon bg-blue-light"><GraduationCap size={24} color="#3b82f6"/></div>
                <div className="wcu-content">
                  <h4>Trusted University Collaborations</h4>
                  <p>Learn through reputed and recognized universities.</p>
                </div>
              </div>
              <div className="wcu-feature">
                <div className="wcu-icon bg-green-light"><BookOpen size={24} color="#10b981"/></div>
                <div className="wcu-content">
                  <h4>Career-Focused Programs</h4>
                  <p>Courses designed for real-world opportunities.</p>
                </div>
              </div>
              <div className="wcu-feature">
                <div className="wcu-icon bg-purple-light"><ShieldCheck size={24} color="#8b5cf6"/></div>
                <div className="wcu-content">
                  <h4>Easy Admission Process</h4>
                  <p>Simple, digital and hassle-free application.</p>
                </div>
              </div>
              <div className="wcu-feature">
                <div className="wcu-icon bg-blue-light"><MonitorPlay size={24} color="#3b82f6"/></div>
                <div className="wcu-content">
                  <h4>Flexible Learning</h4>
                  <p>Study at your pace, from anywhere.</p>
                </div>
              </div>
              <div className="wcu-feature">
                <div className="wcu-icon bg-orange-light"><Settings size={24} color="#f59e0b"/></div>
                <div className="wcu-content">
                  <h4>Expert Guidance</h4>
                  <p>Support at every step of your journey.</p>
                </div>
              </div>
              <div className="wcu-feature">
                <div className="wcu-icon bg-yellow-light"><Star size={24} color="#eab308"/></div>
                <div className="wcu-content">
                  <h4>Affordable Education</h4>
                  <p>Quality education at the right cost.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-header">
            <div>
              <span className="subtitle text-blue">OUR PARTNER UNIVERSITIES</span>
              <h2>Learn Through Renowned Universities</h2>
              <p>We are proud to collaborate with two prestigious universities to bring you quality education and recognized academic programs.</p>
            </div>
            <Link to="/courses" className="view-all-link">View All Universities &rarr;</Link>
          </div>
          
          <div className="partners-grid-wrapper">
            <img 
              src="/images/collaborations.png" 
              alt="Collaborating for a Brighter Academic Future" 
              className="collaboration-banner-img"
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-card-gradient">
            <div className="team-left">
              <span className="subtitle text-white-50">OUR TEAM</span>
              <h2>Passionate People.<br/>One Vision.</h2>
              <p>We are a team of creators, problem solvers and education enthusiasts, working together to make a real impact.</p>
              <button className="btn btn-white-rounded mt-4">Meet Our Team &rarr;</button>
            </div>
            
            <div className="team-right">
              <div className="handdrawn-text small-team-text">
                <span>Small Team</span>
                <span>Big Dreams</span>
                <div className="drawn-arrow-curved-white">&swarrow;</div>
              </div>
              
              <div className="team-members">
                <div className="team-member">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="CEO" />
                  <h4>Ragul Kishore S.</h4>
                  <span>CEO</span>
                </div>
                <div className="team-member">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" alt="Founder" />
                  <h4>Muthurasu M.</h4>
                  <span>Founder & MD</span>
                </div>
                <div className="team-member brand-member">
                  <div className="brand-circle">N</div>
                  <h4>Gen Z Neural X</h4>
                  <span>Team</span>
                </div>
                <div className="team-member">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop" alt="Developers" />
                  <h4>Our Developers</h4>
                  <span>Tech Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
