import React from 'react';
import './AlagappaUniversity.css';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Award, Users, Building, 
  Landmark, MapPin, Star, Library, 
  Check, ArrowRight, FileText, Navigation, Headset, BookOpen, MonitorPlay, Briefcase
} from 'lucide-react';

const AlagappaUniversity = () => {
  return (
    <div className="au-page-redesign">
      {/* Combined Hero Section */}
      <section className="au-hero-combined">
        <div className="container">
          <div className="au-header-grid">
            <div className="au-header-left">
              <span className="subtitle text-blue">UNIVERSITY COLLABORATION</span>
              <h1 className="hero-title">
                Alagappa University<br />
                <span className="text-light-blue">in Collaboration with</span><br />
                <span className="text-blue">Gen Spark University</span>
              </h1>
              <p className="hero-desc">
                Your Gateway to Quality Education, Industry-Relevant<br/>Learning and a Brighter Future.
              </p>
              <div className="hero-actions">
                <Link to="/courses?uni=alagappa" className="btn btn-primary">Explore Programs <ArrowRight size={16}/></Link>
                <Link to="/apply-now" className="btn btn-outline">Apply Now <ArrowRight size={16}/></Link>
              </div>
            </div>
            
            <div className="au-header-right">
               <div className="collab-logos">
                 <div className="au-logo-wrap">
                   <img src="/images/alagappa-logo.jpg" alt="Alagappa Logo" className="au-main-logo" />
                   <span>ALAGAPPA UNIVERSITY</span>
                 </div>
                 <span className="logo-cross">X</span>
                 <div className="gs-logo-wrap">
                   <img src="/images/GenSpark-landscape-logo.png" alt="Gen Spark Logo" className="gs-main-logo" />
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="container floating-stats-wrapper">
           <div className="floating-stats-bar">
             <div className="stat-item">
               <div className="stat-icon"><GraduationCap size={28} color="#0064ff"/></div>
               <div className="stat-text">
                 <h4>UG, PG & MBA</h4>
                 <p>Wide range of programs</p>
               </div>
             </div>
             <div className="stat-divider"></div>
             <div className="stat-item">
               <div className="stat-icon"><Award size={28} color="#0064ff"/></div>
               <div className="stat-text">
                 <h4>Recognized University</h4>
                 <p>UGC Approved</p>
               </div>
             </div>
             <div className="stat-divider"></div>
             <div className="stat-item">
               <div className="stat-icon"><Users size={28} color="#0064ff"/></div>
               <div className="stat-text">
                 <h4>Expert Guidance</h4>
                 <p>Admission & Career Support</p>
               </div>
             </div>
             <div className="stat-divider"></div>
             <div className="stat-item">
               <div className="stat-icon"><Building size={28} color="#0064ff"/></div>
               <div className="stat-text">
                 <h4>Industry Collaboration</h4>
                 <p>Bridging Education & Industry</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* About Alagappa Section */}
      <section className="au-about-section">
        <div className="container">
          <div className="au-about-grid">
            <div className="au-about-left">
              <span className="subtitle text-blue">ABOUT ALAGAPPA UNIVERSITY</span>
              <h2 className="section-title">A Legacy of Excellence<br/>in Education</h2>
              <p className="section-desc">
                Alagappa University, established in 1985, is a premier institution in Tamil Nadu, known for its commitment to academic excellence, research and innovation. With a strong legacy and modern infrastructure, it offers a wide range of undergraduate, postgraduate and research programs.
              </p>
              <Link to="/courses?uni=alagappa" className="btn btn-outline-small">Learn More <ArrowRight size={14}/></Link>
            </div>
            
            <div className="au-about-right">
              <div className="au-info-card">
                 <div className="info-row">
                   <div className="info-item">
                     <div className="info-icon"><Landmark size={24} color="#0064ff"/></div>
                     <div className="info-text">
                       <h5>Established</h5>
                       <p>1985</p>
                     </div>
                   </div>
                   <div className="info-item">
                     <div className="info-icon"><MapPin size={24} color="#0064ff"/></div>
                     <div className="info-text">
                       <h5>Location</h5>
                       <p>Karaikudi, Tamil Nadu</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="info-row">
                   <div className="info-item">
                     <div className="info-icon"><Star size={24} color="#0064ff"/></div>
                     <div className="info-text">
                       <h5>Accreditation</h5>
                       <p>UGC Recognized</p>
                     </div>
                   </div>
                   <div className="info-item">
                     <div className="info-icon"><Users size={24} color="#0064ff"/></div>
                     <div className="info-text">
                       <h5>Programs</h5>
                       <p>UG / PG / MBA / Research</p>
                     </div>
                   </div>
                 </div>

                 <div className="info-row full-width">
                   <div className="info-item">
                     <div className="info-icon"><Award size={24} color="#0064ff"/></div>
                     <div className="info-text">
                       <h5>Reputation</h5>
                       <p>One of the leading universities in Tamil Nadu</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Available Section */}
      <section className="au-courses-section">
        <div className="container">
          <div className="au-courses-header">
            <span className="subtitle text-blue center">COURSES AVAILABLE</span>
            <h2 className="section-title center">Popular Programs at Alagappa University</h2>
            <p className="section-desc center">Choose from a wide range of programs designed to build your future.</p>
          </div>
          
          <div className="au-programs-grid">
            {/* UG Card */}
            <div className="program-card">
              <div className="program-card-header">
                <div className="card-icon"><GraduationCap size={20} color="#0064ff"/></div>
                <div className="program-badge">UG PROGRAMS</div>
              </div>
              <ul className="program-list">
                <li><Check size={16} color="#0064ff"/> B.Sc Computer Science</li>
                <li><Check size={16} color="#0064ff"/> B.Sc Information Technology</li>
                <li><Check size={16} color="#0064ff"/> BCA (Bachelor of Computer Applications)</li>
              </ul>
              <Link to="/courses?uni=alagappa&type=UG" className="view-all-link">View All <ArrowRight size={14}/></Link>
            </div>
            
            {/* PG Card */}
            <div className="program-card">
              <div className="program-card-header">
                <div className="card-icon"><Library size={20} color="#0064ff"/></div>
                <div className="program-badge">PG PROGRAMS</div>
              </div>
              <ul className="program-list">
                <li><Check size={16} color="#0064ff"/> M.Sc Computer Science</li>
                <li><Check size={16} color="#0064ff"/> MCA (Master of Computer Applications)</li>
              </ul>
              <Link to="/courses?uni=alagappa&type=PG" className="view-all-link">View All <ArrowRight size={14}/></Link>
            </div>
            
            {/* MBA Card */}
            <div className="program-card">
              <div className="program-card-header">
                <div className="card-icon"><Briefcase size={20} color="#0064ff"/></div>
                <div className="program-badge">MBA PROGRAMS</div>
              </div>
              <ul className="program-list">
                <li><Check size={16} color="#0064ff"/> MBA Human Resource Management</li>
                <li><Check size={16} color="#0064ff"/> MBA Marketing Management</li>
              </ul>
              <Link to="/courses?uni=alagappa&type=MBA" className="view-all-link">View All <ArrowRight size={14}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Collaboration */}
      <section className="au-why-collab-section">
        <div className="container">
          <div className="au-why-header">
            <span className="subtitle text-blue center">WHY CHOOSE THIS COLLABORATION?</span>
            <h2 className="section-title center">More Than Just a Degree</h2>
          </div>
          
          <div className="au-benefits-row">
            <div className="benefit-item">
              <FileText size={32} color="#0064ff"/>
              <h5>Admission Assistance</h5>
              <p>Step-by-step support</p>
            </div>
            <div className="benefit-item">
              <Navigation size={32} color="#0064ff"/>
              <h5>Course Guidance</h5>
              <p>Right program, right career</p>
            </div>
            <div className="benefit-item">
              <Landmark size={32} color="#0064ff"/>
              <h5>University Support</h5>
              <p>Direct coordination</p>
            </div>
            <div className="benefit-item">
              <MonitorPlay size={32} color="#0064ff"/>
              <h5>Online / Distance Learning</h5>
              <p>Flexible learning options</p>
            </div>
            <div className="benefit-item">
              <BookOpen size={32} color="#0064ff"/>
              <h5>Study Materials</h5>
              <p>(If provided)</p>
            </div>
            <div className="benefit-item">
              <Headset size={32} color="#0064ff"/>
              <h5>Student Support</h5>
              <p>Always with you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="au-cta-section">
        <div className="container">
           <div className="au-cta-content">
             <div className="cta-left">
               <h2>Your Journey to a Better Future<br/>Starts Here</h2>
               <p>Join Alagappa University through Gen Spark University and gain<br/>access to quality education, expert guidance and endless opportunities.</p>
             </div>
             <div className="cta-right">
               <Link to="/apply-now" className="btn btn-primary btn-yellow">Apply Now <ArrowRight size={16}/></Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AlagappaUniversity;
