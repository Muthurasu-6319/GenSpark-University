import React from 'react';
import './Legal.css';

const TermsConditions = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Terms & Conditions</h1>
          <p>Last updated: September 22, 2026</p>
        </div>
        
        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Gen Spark University. By accessing our website or utilizing our admission services, 
            you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>

          <h2>2. Services Provided</h2>
          <p>
            Gen Spark University acts as an authorized admission and technology partner for various UGC-approved universities. 
            We provide a platform for students to explore courses, submit applications, and track their admission status.
          </p>

          <div className="legal-important">
            <strong>Important Role Distinction:</strong>
            Gen Spark University is an education platform/partner. The applicable university remains entirely responsible for 
            the academic program, eligibility verification, examinations, and the final award of qualification, subject to the 
            specific partnership and program terms.
          </div>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You must provide accurate, current, and complete information during the application process.</li>
            <li>You are responsible for maintaining the confidentiality of your application ID and status tracking credentials.</li>
            <li>Submission of forged or modified documents will result in immediate cancellation of your application without refund.</li>
          </ul>

          <h2>4. Admissions and Eligibility</h2>
          <p>
            Meeting the basic eligibility criteria mentioned on our website does not guarantee admission. 
            Final admission decisions are made exclusively by the respective university's admission board after 
            a thorough review of your submitted documents.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws 
            and are owned by Gen Spark University or its licensors.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Gen Spark University shall not be liable for any indirect, incidental, special, consequential or punitive damages, 
            or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of our services 
            or any university decisions regarding your application.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For any queries regarding these Terms & Conditions, please contact us at legal@gensparkuni.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
