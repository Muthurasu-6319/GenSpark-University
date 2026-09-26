import React, { useState } from 'react';
import './BharathidasanUniversity.css';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, BookOpen, GraduationCap, 
  ChevronDown, CheckCircle2, ArrowRight, Library, Layers, Award
} from 'lucide-react';

const BharathidasanUniversity = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is Bharathidasan University recognized by the UGC?",
      a: "Yes, Bharathidasan University is fully recognized by the University Grants Commission (UGC) and boasts an 'A+' grade by NAAC."
    },
    {
      q: "Are these distance learning programs valid for government jobs?",
      a: "Absolutely. Gen Spark Distance Academy guarantees that all degrees from Bharathidasan University are fully valid for both State and Central Government jobs."
    },
    {
      q: "Where is Bharathidasan University located?",
      a: "The main campus is situated in Palkalaiperur, Tiruchirappalli (Trichy), Tamil Nadu."
    },
    {
      q: "Can I pay the admission fees in EMI?",
      a: "Yes, Gen Spark Academy provides the lowest fees with flexible EMI options for all our students."
    }
  ];

  return (
    <div className="bu-page">
      {/* Hero Section */}
      <section className="bu-hero">
        <div className="bu-hero-overlay"></div>
        <div className="container bu-hero-content">
          <img src="/images/bharathidasan-logo.jpg" alt="Bharathidasan University Logo" className="bu-logo-image" />
          <h1>Bharathidasan University</h1>
          <p>We Will Create a Brave New World • NAAC A+ Grade</p>
          <a href="#programs" className="btn btn-white-rounded mt-4">Explore Programs <ArrowRight size={18} className="ml-2"/></a>
        </div>
      </section>

      {/* About Section */}
      <section className="bu-about-section">
        <div className="container">
          <div className="bu-about-grid">
            <div className="bu-about-text">
              <span className="subtitle text-blue">ABOUT UNIVERSITY</span>
              <h2>Empowering Through Education</h2>
              <p>
                Bharathidasan University was established in February 1982 and was named after the great revolutionary Tamil Poet, Bharathidasan. The University motto is "We will create a brave new world", aiming to create a modern, enlightened society through educational innovation.
              </p>
              <p>
                The Centre for Distance and Online Education (CDOE) was established in the year 1992 to serve students who could not enter regular colleges. Today, it offers 41 cutting-edge programmes in Arts, Science, Commerce, and Management. Gen Spark Academy partners with the university to bring these world-class programs right to your doorstep.
              </p>
            </div>
            
            <div className="bu-highlights-grid">
              <div className="bu-highlight-card">
                <Calendar size={28} className="text-blue mb-3" />
                <h4>Established</h4>
                <p>February 1982</p>
              </div>
              <div className="bu-highlight-card">
                <MapPin size={28} className="text-blue mb-3" />
                <h4>Location</h4>
                <p>Trichy, Tamil Nadu</p>
              </div>
              <div className="bu-highlight-card">
                <Library size={28} className="text-blue mb-3" />
                <h4>Academic Areas</h4>
                <p>41 Diverse Programmes</p>
              </div>
              <div className="bu-highlight-card">
                <Award size={28} className="text-blue mb-3" />
                <h4>Recognitions</h4>
                <p>UGC-DEB, NAAC A+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Programs Section */}
      <section id="programs" className="bu-programs-section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="subtitle text-blue">ACADEMICS</span>
            <h2 className="section-title">Available Programs</h2>
            <p className="section-desc max-w-2xl mx-auto">
              Explore 41 specialized programs ranging from Arts and Science to advanced Management degrees.
            </p>
          </div>

          <div className="bu-course-grid">
            {/* UG Arts */}
            <div className="bu-course-category">
              <div className="bu-category-header bg-blue-gradient">
                <GraduationCap size={24} color="white" />
                <h3>UG Program - Arts</h3>
              </div>
              <ul className="bu-course-list">
                <li>B.A Tamil</li>
                <li>B.A English</li>
                <li>B.A Economics</li>
                <li>B.A History</li>
                <li>B.A Public Administration</li>
                <li>B.A Political Science</li>
                <li>B.Lit Tamil</li>
              </ul>
            </div>

            {/* UG Science */}
            <div className="bu-course-category">
              <div className="bu-category-header bg-dark-gradient">
                <BookOpen size={24} color="white" />
                <h3>UG Program - Science</h3>
              </div>
              <ul className="bu-course-list">
                <li>B.Sc Mathematics</li>
                <li>B.Sc Physics</li>
                <li>B.Sc Chemistry</li>
                <li>B.Sc Botany</li>
                <li>B.Sc Zoology</li>
                <li>B.Sc Geography</li>
                <li>B.Sc Computer Science</li>
                <li>B.Sc Information Technology</li>
              </ul>
            </div>

            {/* UG Commerce & Management */}
            <div className="bu-course-category">
              <div className="bu-category-header bg-dark-gradient">
                <Layers size={24} color="white" />
                <h3>UG Commerce & Mgmt</h3>
              </div>
              <ul className="bu-course-list">
                <li>B.Com (General)</li>
                <li>B.Com (Bank Management)</li>
                <li>B.Com (Computer Application)</li>
                <li>B.B.A (Bachelor of Business Administration)</li>
                <li>B.B.A (Retail Management)</li>
                <li>B.C.A (Bachelor of Computer Application)</li>
                <li>Bachelor of Library and Information Science (BLIS)</li>
              </ul>
            </div>

            {/* PG Programs */}
            <div className="bu-course-category">
              <div className="bu-category-header bg-blue-gradient">
                <BookOpen size={24} color="white" />
                <h3>PG Programs</h3>
              </div>
              <ul className="bu-course-list">
                <li>M.A Tamil / English / Economics / History</li>
                <li>M.A Political Science / Public Administration</li>
                <li>M.Sc Mathematics / Physics / Chemistry</li>
                <li>M.Sc Botany / Zoology / Geography</li>
                <li>M.Sc Computer Science / Information Technology</li>
                <li>M.Com (General) / M.Com (Bank Management)</li>
                <li>M.Com (Computer Application) / M.Com (Financial Mgmt)</li>
                <li>Master of Library and Information Science (MLIS)</li>
                <li>Master of Computer Application (MCA)</li>
              </ul>
            </div>
            
            {/* MBA Specializations */}
            <div className="bu-course-category" style={{ gridColumn: '1 / -1' }}>
              <div className="bu-category-header bg-dark-gradient">
                <Award size={24} color="white" />
                <h3>MBA Specializations (Master of Business Administration)</h3>
              </div>
              <div className="bu-course-list-multi">
                <ul>
                  <li>MBA Human Resource Management</li>
                  <li>MBA Marketing Management</li>
                  <li>MBA Finance Management</li>
                </ul>
                <ul>
                  <li>MBA Operations Management</li>
                  <li>MBA Systems Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Eligibility & Process */}
      <section className="bu-admission-section">
        <div className="container">
          <div className="bu-admission-grid">
            {/* Eligibility */}
            <div className="bu-eligibility">
              <span className="subtitle text-blue">REQUIREMENTS</span>
              <h2 className="mb-6 text-3xl font-bold">Admission Eligibility</h2>
              
              <div className="eligibility-card">
                <h4>For UG Programs</h4>
                <ul className="custom-list">
                  <li><CheckCircle2 size={18} className="text-blue" /> Pass in 10+2 (HSC) or equivalent from a recognized board.</li>
                  <li><CheckCircle2 size={18} className="text-blue" /> Gen Spark provides direct admissions without entrance tests for regular DDE courses.</li>
                </ul>
              </div>
              
              <div className="eligibility-card mt-6">
                <h4>For PG Programs</h4>
                <ul className="custom-list">
                  <li><CheckCircle2 size={18} className="text-blue" /> An appropriate Bachelor's degree (10+2+3) from any recognized university.</li>
                  <li><CheckCircle2 size={18} className="text-blue" /> For MBA/MCA, relevant undergraduate subjects might be required based on specialization.</li>
                </ul>
              </div>
            </div>

            {/* Process Flow */}
            <div className="bu-process">
              <span className="subtitle text-blue">HOW TO APPLY</span>
              <h2 className="mb-6 text-3xl font-bold">Admission Process</h2>
              
              <div className="process-timeline-blue">
                <div className="timeline-step">
                  <div className="step-number-blue">1</div>
                  <div className="step-content">
                    <h4>Visit Gen Spark</h4>
                    <p>Contact our admission centers across Tamil Nadu for a free counseling session.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number-blue">2</div>
                  <div className="step-content">
                    <h4>Submit Documents</h4>
                    <p>Provide your educational certificates (10th, 12th, Degree) for verification.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number-blue">3</div>
                  <div className="step-content">
                    <h4>Flexible Fee Payment</h4>
                    <p>Enjoy our low fees structure and choose an EMI plan that works for you.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number-blue">4</div>
                  <div className="step-content">
                    <h4>Start Learning</h4>
                    <p>Get your ID and study materials directly from Bharathidasan University DDE.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bu-faq-section bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <span className="subtitle text-blue">SUPPORT</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-accordion max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item-blue ${activeFaq === index ? 'active' : ''}`}
              >
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <ChevronDown className="faq-icon-blue" size={20} />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bu-bottom-cta">
        <div className="container text-center">
          <h2>Ready to take the next step?</h2>
          <p className="mb-8">Join Bharathidasan University through Gen Spark Academy for a brighter future.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-white-outline">Contact Gen Spark</Link>
            <Link to="/admissions" className="btn btn-white-blue">Apply Now</Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default BharathidasanUniversity;
