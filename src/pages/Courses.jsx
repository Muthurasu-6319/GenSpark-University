import React, { useState } from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Landmark, GraduationCap, Search, FileText, Settings,
  Target, TargetIcon, User, Clock, CheckCircle2, Headphones, Map
} from 'lucide-react';

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const tabs = ['All', 'UG', 'PG', 'Diploma', 'Certification'];

  const courses = [
    { id: 1, title: 'B.Sc Computer Science', uni: 'Alagappa University', type: 'UG', duration: '3 Years', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'M.Sc Biotechnology', uni: 'Bharathidasan University', type: 'PG', duration: '2 Years', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Diploma in Computer Applications', uni: 'Alagappa University', type: 'Diploma', duration: '1 Year', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: 'AI & Machine Learning', uni: 'Bharathidasan University', type: 'Certification', duration: '6 Months', img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop' },
    { id: 5, title: 'B.E Civil Engineering', uni: 'Alagappa University', type: 'UG', duration: '4 Years', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop' },
    { id: 6, title: 'M.Sc Nursing', uni: 'Bharathidasan University', type: 'PG', duration: '2 Years', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop' },
  ];

  const filteredCourses = filter === 'All' ? courses : courses.filter(c => c.type === filter);

  return (
    <div className="courses-page-new">
      
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero-grid">
            <div className="hero-content">
              <span className="subtitle text-blue">OUR COURSES</span>
              <h1 className="hero-title">Explore Programs That <span className="text-blue">Build Your Future</span></h1>
              <p className="hero-desc">Choose from a wide range of undergraduate, postgraduate, diploma and certification programs offered through our university collaborations.</p>
              
              <div className="hero-stats-row">
                <div className="hero-stat">
                  <div className="stat-icon-wrapper"><BookOpen size={20} color="#3b82f6" /></div>
                  <div className="stat-info">
                    <strong>100+</strong>
                    <span>Courses</span>
                  </div>
                </div>
                <div className="hero-stat">
                  <div className="stat-icon-wrapper"><Landmark size={20} color="#3b82f6" /></div>
                  <div className="stat-info">
                    <strong>2</strong>
                    <span>Partner Universities</span>
                  </div>
                </div>
                <div className="hero-stat">
                  <div className="stat-icon-wrapper"><User size={20} color="#3b82f6" /></div>
                  <div className="stat-info">
                    <strong>1000+</strong>
                    <span>Students</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="image-blob-container">
                {/* Decorative Elements */}
                <div className="floating-text">
                  <span>Learn</span>
                  <span>Grow</span>
                  <span>Succeed</span>
                </div>
                
                <div className="blob-image student-img"></div>
                
                {/* Floating Cards */}
                <div className="floating-list-card">
                  <div className="list-item">
                    <div className="icon-circle bg-light-blue"><GraduationCap size={16} color="#3b82f6" /></div>
                    <div>
                      <strong>UG</strong>
                      <span>Undergraduate</span>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="icon-circle bg-light-purple"><BookOpen size={16} color="#8b5cf6" /></div>
                    <div>
                      <strong>PG</strong>
                      <span>Postgraduate</span>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="icon-circle bg-light-green"><FileText size={16} color="#10b981" /></div>
                    <div>
                      <strong>Diploma</strong>
                      <span>Certification</span>
                    </div>
                  </div>
                </div>
                
                <div className="floating-badge top-right">
                  <div className="icon-circle bg-blue"><GraduationCap size={20} color="white" /></div>
                  <strong>Your Future</strong>
                  <span className="text-blue">Our Mission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="courses-main-content">
        <div className="container layout-grid">
          
          {/* Left Column - Courses */}
          <div className="content-left">
            <div className="top-filter-tabs">
              {tabs.map(t => (
                <button 
                  key={t} 
                  className={`top-tab-btn ${filter === t ? 'active' : ''}`}
                  onClick={() => setFilter(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            
            <div className="section-header-left">
              <span className="badge">FEATURED COURSES</span>
              <h2>Popular Courses</h2>
              <p>Explore some of the most sought-after programs from our partner universities.</p>
            </div>
            
            <div className="courses-grid-3">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-img-wrapper" style={{ backgroundImage: `url('${course.img}')` }}>
                    <span className="course-type-badge">{course.type}</span>
                  </div>
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <div className="course-meta">
                      <span><Clock size={14}/> {course.duration}</span>
                      <span><User size={14}/> {course.type === 'UG' ? 'Undergraduate' : course.type === 'PG' ? 'Postgraduate' : course.type}</span>
                    </div>
                    <div className="course-uni">
                      <div className={`mini-logo ${course.uni.includes('Alagappa') ? 'alagappa-logo' : 'bharathidasan-logo'}`}>
                        {course.uni.charAt(0)}
                      </div>
                      {course.uni}
                    </div>
                    <div className="course-footer">
                      <Link to={`/courses/${course.id}`} className="view-link text-blue">View Course &rarr;</Link>
                      <button className="icon-btn-round">&rarr;</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="sidebar-right">
            <div className="search-box">
              <Search size={18} className="search-icon" color="#94a3b8" />
              <input type="text" placeholder="Search courses..." />
            </div>
            
            <div className="filter-box">
              <h3>Filter Courses</h3>
              
              <div className="filter-group">
                <h4>Program Level</h4>
                <label className="filter-option">
                  <input type="radio" name="level" defaultChecked />
                  <span className="option-text">Undergraduate (UG)</span>
                  <span className="option-count">42</span>
                </label>
                <label className="filter-option">
                  <input type="radio" name="level" />
                  <span className="option-text">Postgraduate (PG)</span>
                  <span className="option-count">28</span>
                </label>
                <label className="filter-option">
                  <input type="radio" name="level" />
                  <span className="option-text">Diploma</span>
                  <span className="option-count">18</span>
                </label>
                <label className="filter-option">
                  <input type="radio" name="level" />
                  <span className="option-text">Certification</span>
                  <span className="option-count">12</span>
                </label>
              </div>
              
              <div className="filter-group">
                <h4>University</h4>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="option-text">Alagappa University</span>
                  <span className="option-count">52</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="option-text">Bharathidasan University</span>
                  <span className="option-count">48</span>
                </label>
              </div>
              
              <div className="filter-group">
                <h4>Duration</h4>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="option-text">1 Year</span>
                  <span className="option-count">16</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="option-text">2 Years</span>
                  <span className="option-count">24</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="option-text">3 Years</span>
                  <span className="option-count">28</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="option-text">4 Years</span>
                  <span className="option-count">12</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="option-text">6 Months</span>
                  <span className="option-count">8</span>
                </label>
              </div>
              
              <button className="btn btn-primary w-full">Apply Filters &rarr;</button>
            </div>
            
            <div className="help-box">
              <div className="icon-circle bg-blue text-white mx-auto"><GraduationCap size={24} /></div>
              <h4>Need Help Choosing a Course?</h4>
              <p>Our team is here to guide you in finding the right program.</p>
              <Link to="/contact" className="btn btn-outline w-full">Contact Us &rarr;</Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="why-choose-courses">
        <div className="container">
          <div className="section-header-center">
            <span className="badge">WHY CHOOSE OUR COURSES</span>
            <h2>Your Success, Our Priority</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><GraduationCap size={28} /></div>
              <h4>University Collaboration</h4>
              <p>Get certified degrees from renowned universities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Target size={28} /></div>
              <h4>Career-Focused Programs</h4>
              <p>Programs designed for real-world opportunities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BookOpen size={28} /></div>
              <h4>Flexible Learning</h4>
              <p>Simple and hassle-free admission process.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Headphones size={28} /></div>
              <h4>Continuous Support</h4>
              <p>Guidance at every step of your journey.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA Banner */}
      <section className="courses-bottom-cta">
        <div className="container">
          <div className="cta-banner-img">
            <div className="cta-banner-content">
              <div className="flex items-center gap-2 mb-3 text-white text-sm font-bold tracking-wider">
                <TargetIcon size={16} /> BETTER EDUCATION. BRIGHTER FUTURE.
              </div>
              <h2>Ready to Start Your Journey?</h2>
              <p>Explore our courses, apply online and take the first step towards a brighter future.</p>
              <Link to="/admissions" className="btn btn-white-rounded">Apply Now &rarr;</Link>
            </div>
            <div className="cta-decoration-right">
              <span className="decorative-text-white">Your<br/>Dreams<br/>Matter</span>
              <span className="decorative-arrow-white">&rarr;</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;
