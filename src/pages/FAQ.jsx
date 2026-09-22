import React, { useState } from 'react';
import './FAQ.css';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openQ, setOpenQ] = useState(null);

  const faqData = {
    "General": [
      { q: "What is Gen Spark?", a: "Gen Spark is a premier educational consultancy and distance learning partner that connects students with top-tier universities for UG, PG, and Diploma programs." },
      { q: "How does Gen Spark work?", a: "We partner with UGC-approved universities like Alagappa and Bharathidasan to offer distance education. We assist you from course selection to application submission and document verification." }
    ],
    "Universities": [
      { q: "Which universities are available?", a: "Currently, we offer programs from Alagappa University and Bharathidasan University. We are continuously working to partner with more top institutions." },
      { q: "Who awards the qualification?", a: "Your final degree or diploma is awarded directly by the respective university (e.g., Alagappa University), not by Gen Spark. It holds the same value as a regular distance education degree." }
    ],
    "Courses": [
      { q: "Which UG courses are available?", a: "We offer various undergraduate courses including B.Sc in Computer Science, B.Com, BBA, B.A in Tamil/English, and more depending on the university." },
      { q: "Which PG courses are available?", a: "Postgraduate offerings include MBA with various specializations, MCA, M.Com, M.Sc, and M.A programs." }
    ],
    "Admission": [
      { q: "How do I apply?", a: "You can apply directly through our website by clicking the 'Apply Now' button and completing our 10-step online application form." },
      { q: "What documents are required?", a: "Generally, you need your Aadhaar card, 10th & 12th marksheets, a passport size photo, signature, and for PG programs, your UG degree certificate and TC." }
    ],
    "Application": [
      { q: "How do I track my application?", a: "You can track your application status in real-time by visiting our 'Application Status' page and entering your Application ID or registered mobile number." },
      { q: "Can I correct my application?", a: "If you have already submitted your application, you cannot edit it online. Please contact our support team immediately to make any corrections before the university processing begins." }
    ],
    "Fees": [
      { q: "What are the fees?", a: "Fees vary depending on the chosen university and program. Detailed fee structures are provided on the respective university pages and during the application process." },
      { q: "How do I make payments?", a: "Payments are typically made directly through secure bank transfers or online payment gateways integrated into our platform once your application is verified." }
    ]
  };

  const categories = Object.keys(faqData);

  const toggleQuestion = (index) => {
    setOpenQ(openQ === index ? null : index);
  };

  return (
    <div className="faq-page bg-gray-50 min-h-screen py-16">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider mb-2 block text-sm">ANSWERS TO YOUR QUESTIONS</span>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our university partners, admission process, courses, and more.
          </p>
        </div>

        <div className="faq-layout">
          {/* Sidebar Categories */}
          <div className="faq-sidebar">
            <div className="faq-sidebar-card">
              <h3 className="faq-sidebar-title">Categories</h3>
              <ul className="faq-category-list">
                {categories.map(category => (
                  <li key={category}>
                    <button 
                      className={`faq-cat-btn ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => {
                        setActiveCategory(category);
                        setOpenQ(null);
                      }}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="faq-contact-card">
                <MessageCircle size={32} className="faq-contact-icon" />
                <h4>Still have questions?</h4>
                <p>Can't find the answer you're looking for?</p>
                <Link to="/contact" className="btn btn-primary faq-contact-btn">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-content">
            <div className="faq-content-card">
              <h2 className="faq-content-title">
                {activeCategory} Questions
              </h2>
              
              <div className="accordion">
                {faqData[activeCategory].map((faq, index) => (
                  <div key={index} className={`accordion-item ${openQ === index ? 'open' : ''}`}>
                    <button 
                      className="accordion-header"
                      onClick={() => toggleQuestion(index)}
                    >
                      <span className="accordion-q">{faq.q}</span>
                      <ChevronDown 
                        size={20} 
                        className={`accordion-icon ${openQ === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <div 
                      className="accordion-body"
                      style={{ maxHeight: openQ === index ? '200px' : '0' }}
                    >
                      <div className="accordion-a">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
