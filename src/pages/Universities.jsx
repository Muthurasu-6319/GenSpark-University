import React from 'react';
import './Universities.css';
import { Link } from 'react-router-dom';
import { MapPin, Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

const Universities = () => {
  return (
    <div className="universities-page">
      {/* Hero Section */}
      <section className="uni-hero">
        <div className="container text-center">
          <span className="subtitle text-blue">OUR COLLABORATIONS</span>
          <h1 className="hero-title">Partner Universities</h1>
          <p className="hero-desc mx-auto">
            We collaborate with India's most prestigious institutions to bring you world-class education, recognized degrees, and exceptional career opportunities.
          </p>
        </div>
      </section>

      {/* Universities List */}
      <section className="uni-list-section">
        <div className="container">
          
          {/* Alagappa University */}
          <div className="uni-card">
            <div className="uni-image-side">
              <div className="uni-logo-large alagappa-logo">A</div>
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop" alt="Alagappa University Campus" className="uni-campus-img" />
              <div className="uni-accreditation">
                <Award size={20} color="#eab308" />
                <span>NAAC A+ Grade</span>
              </div>
            </div>
            
            <div className="uni-content-side">
              <h2>Alagappa University</h2>
              <div className="uni-meta">
                <span><MapPin size={16} /> Karaikudi, Tamil Nadu</span>
                <span><BookOpen size={16} /> State University</span>
              </div>
              
              <p className="uni-description">
                Alagappa University is recognized globally for its excellence in higher education and research. It offers a wide range of undergraduate and postgraduate programs designed to equip students with contemporary skills and knowledge.
              </p>
              
              <div className="uni-highlights">
                <h4>Why Choose Alagappa?</h4>
                <ul>
                  <li><CheckCircle2 size={16} className="text-green"/> State-of-the-art curriculum</li>
                  <li><CheckCircle2 size={16} className="text-green"/> Highly qualified faculty members</li>
                  <li><CheckCircle2 size={16} className="text-green"/> Globally recognized degree programs</li>
                  <li><CheckCircle2 size={16} className="text-green"/> Excellent placement assistance</li>
                </ul>
              </div>
              
              <div className="uni-actions">
                <Link to="/universities/alagappa-university" className="btn btn-primary">View University Details &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Bharathidasan University */}
          <div className="uni-card reverse-layout">
            <div className="uni-image-side">
              <div className="uni-logo-large bharathidasan-logo">B</div>
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" alt="Bharathidasan University Campus" className="uni-campus-img" />
              <div className="uni-accreditation">
                <Award size={20} color="#eab308" />
                <span>NAAC A+ Grade</span>
              </div>
            </div>
            
            <div className="uni-content-side">
              <h2>Bharathidasan University</h2>
              <div className="uni-meta">
                <span><MapPin size={16} /> Tiruchirappalli, Tamil Nadu</span>
                <span><BookOpen size={16} /> State University</span>
              </div>
              
              <p className="uni-description">
                Named after the great revolutionary Tamil Poet Bharathidasan, the university aims to create a brave new world of academic excellence. It provides cutting-edge education in various disciplines.
              </p>
              
              <div className="uni-highlights">
                <h4>Why Choose Bharathidasan?</h4>
                <ul>
                  <li><CheckCircle2 size={16} className="text-green"/> Research-oriented approach</li>
                  <li><CheckCircle2 size={16} className="text-green"/> Diverse academic programs</li>
                  <li><CheckCircle2 size={16} className="text-green"/> Innovative teaching methodologies</li>
                  <li><CheckCircle2 size={16} className="text-green"/> Strong industry connections</li>
                </ul>
              </div>
              
              <div className="uni-actions">
                <Link to="/courses?uni=bharathidasan" className="btn btn-primary">View Offered Courses &rarr;</Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="uni-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-icon"><GraduationCap size={40} color="white" /></div>
            <h2>Start Your Academic Journey Today</h2>
            <p>Enroll in programs from these prestigious universities through our simplified admission process.</p>
            <Link to="/admissions" className="btn btn-white-rounded">Apply Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Universities;
