import React, { useState } from 'react';
import './AlagappaUniversity.css';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, BookOpen, GraduationCap, 
  ChevronDown, CheckCircle2, ArrowRight, Library, Layers, Award
} from 'lucide-react';

const AlagappaUniversity = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is Alagappa University UGC recognized?",
      a: "Yes, Alagappa University is recognized by the University Grants Commission (UGC) and is accredited with a NAAC A+ grade."
    },
    {
      q: "Does the university offer distance education?",
      a: "Yes, Gen Spark Distance Academy facilitates admissions to numerous programs offered through Alagappa University's Directorate of Distance Education (DDE)."
    },
    {
      q: "Where is the campus located?",
      a: "The main campus is located in Karaikudi, Sivaganga District, Tamil Nadu, spread across a lush 435.98-acre eco-friendly environment."
    },
    {
      q: "Can I pay fees in installments?",
      a: "Yes, Gen Spark provides EMI facilities and lowest fees for distance education admissions."
    }
  ];

  return (
    <div className="au-page">
      {/* Hero Section */}
      <section className="au-hero">
        <div className="au-hero-overlay"></div>
        <div className="container au-hero-content">
          <div className="au-logo-badge">A</div>
          <h1>Alagappa University</h1>
          <p>Excellence in Action • NAAC A+ Graded State University</p>
          <a href="#programs" className="btn btn-white-rounded mt-4">Explore Programs <ArrowRight size={18} className="ml-2"/></a>
        </div>
      </section>

      {/* About Section */}
      <section className="au-about-section">
        <div className="container">
          <div className="au-about-grid">
            <div className="au-about-text">
              <span className="subtitle text-blue">ABOUT UNIVERSITY</span>
              <h2>A Legacy of Academic Excellence</h2>
              <p>
                Alagappa University is located at Karaikudi in Tamil Nadu and is accessible from Madurai and Tiruchirappalli Airports within two hours. The 435.98-acre green and lush campus houses all the academic activities. The University emerged from the galaxy of institutions initially founded by the great philanthropist and educationist Dr. RM. Alagappa Chettiar during the 1950s.
              </p>
              <p>
                Established in May 1985, Alagappa University offers regular, distance, online, and collaborative programs. It is recognized by the UGC, member of AIU and ACU, and comprises 44 Departments and 3 Centres. Gen Spark Distance Academy is proud to partner and offer direct admissions for these esteemed programs.
              </p>
            </div>
            
            <div className="au-highlights-grid">
              <div className="au-highlight-card">
                <Calendar size={28} className="text-blue mb-3" />
                <h4>Established</h4>
                <p>May 1985</p>
              </div>
              <div className="au-highlight-card">
                <MapPin size={28} className="text-blue mb-3" />
                <h4>Location</h4>
                <p>Karaikudi, Tamil Nadu</p>
              </div>
              <div className="au-highlight-card">
                <Library size={28} className="text-blue mb-3" />
                <h4>Academic Areas</h4>
                <p>44 Departments & 3 Centres</p>
              </div>
              <div className="au-highlight-card">
                <Award size={28} className="text-blue mb-3" />
                <h4>Recognitions</h4>
                <p>UGC, AIU, ACU, NAAC A+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Programs Section */}
      <section id="programs" className="au-programs-section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="subtitle text-blue">ACADEMICS</span>
            <h2 className="section-title">Available Programs</h2>
            <p className="section-desc max-w-2xl mx-auto">
              Discover a comprehensive range of undergraduate and postgraduate courses.
            </p>
          </div>

          <div className="au-course-grid">
            {/* UG Arts */}
            <div className="au-course-category">
              <div className="au-category-header bg-blue-gradient">
                <GraduationCap size={24} color="white" />
                <h3>UG Program - Arts</h3>
              </div>
              <ul className="au-course-list">
                <li>B.A Tamil</li>
                <li>B.A English</li>
                <li>B.A History</li>
                <li>B.A Economics</li>
                <li>B.A Public Administration</li>
                <li>B.Lit Tamil</li>
                <li>B.B.A (Bachelor of Business Administration)</li>
                <li>B.Com (General)</li>
                <li>B.Com (Computer Application)</li>
              </ul>
            </div>

            {/* UG Science */}
            <div className="au-course-category">
              <div className="au-category-header bg-dark-gradient">
                <BookOpen size={24} color="white" />
                <h3>UG Program - Science</h3>
              </div>
              <ul className="au-course-list">
                <li>B.Sc Mathematics</li>
                <li>B.Sc Psychology</li>
                <li>B.Sc Computer Science</li>
                <li>B.Sc Information Technology</li>
                <li>B.C.A (Bachelor of Computer Application)</li>
              </ul>
            </div>

            {/* PG Arts & Science */}
            <div className="au-course-category">
              <div className="au-category-header bg-dark-gradient">
                <BookOpen size={24} color="white" />
                <h3>PG Programs</h3>
              </div>
              <ul className="au-course-list">
                <li>M.A Tamil, English, History, Economics</li>
                <li>M.A Journalism and Mass Communication</li>
                <li>M.A Child Care and Education</li>
                <li>Master of Social Work (MSW)</li>
                <li>M.Com (General)</li>
                <li>M.Com (Finance and Control)</li>
                <li>M.Sc Mathematics, Psychology, Botany</li>
                <li>M.Sc Zoology, Chemistry, Physics</li>
                <li>M.Sc Computer Science, Information Technology</li>
                <li>Master of Computer Application (MCA)</li>
                <li>Master of Library and Information Science (MLIS)</li>
              </ul>
            </div>

            {/* MBA Specializations */}
            <div className="au-course-category">
              <div className="au-category-header bg-blue-gradient">
                <Layers size={24} color="white" />
                <h3>MBA Specializations</h3>
              </div>
              <ul className="au-course-list">
                <li>MBA General</li>
                <li>MBA Human Resource Management</li>
                <li>MBA Marketing / Finance / System / Production</li>
                <li>MBA Banking & Finance</li>
                <li>MBA Corporate Secretaryship / Hospital Management</li>
                <li>MBA Project / Retail / Logistics Management</li>
                <li>MBA Technology / International Business</li>
                <li>MBA Tourism / Education Management</li>
                <li>MBA Co-operative Management</li>
                <li>MBA Corporate Management</li>
              </ul>
            </div>
            
            {/* Certifications & Diplomas */}
            <div className="au-course-category" style={{ gridColumn: '1 / -1' }}>
              <div className="au-category-header bg-dark-gradient">
                <Award size={24} color="white" />
                <h3>Certifications & Diplomas</h3>
              </div>
              <div className="au-course-list-multi">
                <ul>
                  <li>Certificate in Library and Information Science</li>
                  <li>Certificate in GST</li>
                  <li>Certificate in Astrology</li>
                  <li>Certificate in Office Automation</li>
                  <li>Certificate in Gender Studies</li>
                  <li>Diploma in Montessori Education</li>
                  <li>Diploma in Computer Applications</li>
                </ul>
                <ul>
                  <li>PG Diploma in Hospital Administration</li>
                  <li>PG Diploma in Personnel Management</li>
                  <li>PG Diploma in Computer Applications</li>
                  <li>PG Diploma in Artificial Intelligence and ML</li>
                  <li>PG Diploma in Cyber Security</li>
                  <li>PG Diploma in Human Resource Management</li>
                  <li>PG Diploma in Sports Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Eligibility & Process */}
      <section className="au-admission-section">
        <div className="container">
          <div className="au-admission-grid">
            {/* Eligibility */}
            <div className="au-eligibility">
              <span className="subtitle text-blue">REQUIREMENTS</span>
              <h2 className="mb-6 text-3xl font-bold">Admission Eligibility</h2>
              
              <div className="eligibility-card">
                <h4>For UG Programs</h4>
                <ul className="custom-list">
                  <li><CheckCircle2 size={18} className="text-blue" /> Candidates must have passed 10+2 (HSC) or equivalent examination from a recognized board.</li>
                  <li><CheckCircle2 size={18} className="text-blue" /> For NIOS and BOSSE candidates, Gen Spark provides direct guidance and passing assurance.</li>
                </ul>
              </div>
              
              <div className="eligibility-card mt-6">
                <h4>For PG Programs</h4>
                <ul className="custom-list">
                  <li><CheckCircle2 size={18} className="text-blue" /> A relevant Bachelor's degree from a recognized university under 10+2+3 pattern.</li>
                  <li><CheckCircle2 size={18} className="text-blue" /> Direct admission available for Distance Education modes without stringent entrance tests.</li>
                </ul>
              </div>
            </div>

            {/* Process Flow */}
            <div className="au-process">
              <span className="subtitle text-blue">HOW TO APPLY</span>
              <h2 className="mb-6 text-3xl font-bold">Admission Process</h2>
              
              <div className="process-timeline">
                <div className="timeline-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Contact Gen Spark Academy</h4>
                    <p>Reach out to our counseling team across Tamil Nadu (Coimbatore, Chennai, Madurai, etc.) for guidance.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Document Submission</h4>
                    <p>Submit your 10th, 12th, or UG mark sheets along with ID proof for verification.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Fee Payment & EMI</h4>
                    <p>Pay the lowest university fees directly. We also provide flexible EMI options for students.</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Enrollment Confirmation</h4>
                    <p>Receive your admission letter, ID card, and study materials to start your journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="au-faq-section bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <span className="subtitle text-red">SUPPORT</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-accordion max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <ChevronDown className="faq-icon" size={20} />
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
      <section className="au-bottom-cta">
        <div className="container text-center">
          <h2>Ready to take the next step?</h2>
          <p className="mb-8">Join Alagappa University through Gen Spark Academy for a brighter future.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-white-outline">Contact Gen Spark</Link>
            <Link to="/admissions" className="btn btn-white">Apply Now</Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AlagappaUniversity;
