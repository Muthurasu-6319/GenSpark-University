import React from 'react';
import { Link } from 'react-router-dom';
import './Admissions.css';
import { CheckCircle2, FileText, ArrowRight, BookOpen, GraduationCap, Building2 } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="admissions-page">
      {/* Hero Section */}
      <section className="admin-hero">
        <div className="container">
          <div className="admin-hero-content text-center">
            <span className="subtitle text-primary mb-2 block">YOUR FUTURE STARTS HERE</span>
            <h1 className="mb-4">Start Your Admission Journey</h1>
            <p className="mb-8 max-w-2xl mx-auto">
              Join Gen Spark Academy to pursue world-class education from top universities. Our streamlined admission process makes it easier than ever to get started.
            </p>
            <Link to="/apply-now" className="btn btn-primary btn-large">Apply Now <ArrowRight className="ml-2" size={20}/></Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="process-section section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">The Admission Process</h2>
            <p className="section-desc">A simple, transparent 7-step journey to your enrollment.</p>
          </div>

          <div className="process-steps-grid">
            {[
              { title: "Choose Your University", desc: "Select from our esteemed partners like Alagappa or Bharathidasan." },
              { title: "Choose Your Course", desc: "Pick the UG, PG, or Diploma program that fits your career goals." },
              { title: "Submit Application", desc: "Fill out our comprehensive online application form." },
              { title: "Upload Documents", desc: "Securely upload your educational and identity documents." },
              { title: "Document Verification", desc: "Our team validates your submitted documents for eligibility." },
              { title: "University Processing", desc: "Your application is processed by the respective university board." },
              { title: "Admission Confirmation", desc: "Receive your ID card, study materials, and start learning!" }
            ].map((step, index) => (
              <div key={index} className="process-step-card">
                <div className="step-indicator">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Eligibility Criteria</h2>
            <p className="section-desc">Ensure you meet the academic requirements before applying.</p>
          </div>

          <div className="eligibility-grid">
            <div className="eligibility-box">
              <div className="eli-header">
                <BookOpen size={32} className="text-primary mb-4" />
                <h3>UG Eligibility</h3>
              </div>
              <ul className="eli-list">
                <li><CheckCircle2 size={18} className="text-primary" /> Pass in 10+2 (HSC) or equivalent examination from a recognized state/central board.</li>
                <li><CheckCircle2 size={18} className="text-primary" /> 10th + 3 years Diploma is also accepted for certain UG programs.</li>
                <li><CheckCircle2 size={18} className="text-primary" /> NIOS and BOSSE candidates are eligible.</li>
              </ul>
            </div>

            <div className="eligibility-box">
              <div className="eli-header">
                <GraduationCap size={32} className="text-primary mb-4" />
                <h3>PG Eligibility</h3>
              </div>
              <ul className="eli-list">
                <li><CheckCircle2 size={18} className="text-primary" /> A valid Bachelor's degree (10+2+3 pattern) from any recognized university.</li>
                <li><CheckCircle2 size={18} className="text-primary" /> Final year UG students can apply provisionally.</li>
                <li><CheckCircle2 size={18} className="text-primary" /> Relevant major subjects may be required for specific Science PG courses.</li>
              </ul>
            </div>

            <div className="eligibility-box">
              <div className="eli-header">
                <Building2 size={32} className="text-primary mb-4" />
                <h3>Course & Univ Specifics</h3>
              </div>
              <ul className="eli-list">
                <li><CheckCircle2 size={18} className="text-primary" /> MBA/MCA might require specific UG mathematics background depending on the university.</li>
                <li><CheckCircle2 size={18} className="text-primary" /> Direct admissions available without stringent entrance tests for DDE modes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="documents-section section-padding">
        <div className="container">
          <div className="doc-wrapper">
            <div className="doc-text">
              <span className="subtitle text-primary">PREPARATION</span>
              <h2 className="mb-4 text-3xl font-bold">Documents Required</h2>
              <p className="mb-6 text-gray-600">
                Please keep scanned copies of the following documents ready before starting your application. Accepted formats are PDF, JPG, and PNG.
              </p>
              <div className="alert-box">
                <strong>Note:</strong> Document requirements may vary slightly based on the selected program and university guidelines.
              </div>
              <Link to="/apply-now" className="btn btn-primary mt-6">Start Application</Link>
            </div>
            
            <div className="doc-list-container">
              <ul className="doc-checklist">
                <li><FileText size={20} className="text-primary" /> Aadhaar Card or accepted Govt ID</li>
                <li><FileText size={20} className="text-primary" /> Recent Passport Size Photo</li>
                <li><FileText size={20} className="text-primary" /> Scanned Signature</li>
                <li><FileText size={20} className="text-primary" /> 10th Standard Marksheet</li>
                <li><FileText size={20} className="text-primary" /> 12th Standard Marksheet</li>
                <li><FileText size={20} className="text-primary" /> Transfer Certificate (TC)</li>
                <li><FileText size={20} className="text-primary" /> Degree Certificate / Provisional (for PG)</li>
                <li><FileText size={20} className="text-primary" /> Community Certificate (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
