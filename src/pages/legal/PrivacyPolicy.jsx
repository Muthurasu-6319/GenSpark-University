import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: September 22, 2026</p>
        </div>
        
        <div className="legal-content">
          <p>
            At Gen Spark University, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            or apply for a program through us.
          </p>

          <h2>1. What data is collected</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Academic Data:</strong> includes educational records, certificates, and prior institution details.</li>
            <li><strong>Financial Data:</strong> includes bank account and payment card details (used securely for refunds/processing).</li>
          </ul>

          <h2>2. Why it is collected and how it is used</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To process your admission application and register you as a new student with our partner universities.</li>
            <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
            <li>To administer and protect our business and this website.</li>
          </ul>

          <h2>3. Who can access it</h2>
          <p>
            Your data is accessible by authorized Gen Spark admission counselors and administrative staff. 
            When you apply for a program, your relevant academic and identity data is securely transmitted 
            to the respective partner university (e.g., Alagappa University or Bharathidasan University) for admission processing.
          </p>

          <h2>4. How long it is retained</h2>
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, 
            including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. 
            Typically, student records are maintained for the duration of the enrolled program plus 5 years.
          </p>

          <h2>5. User Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
          </ul>

          <h2>6. Aadhaar and Sensitive Data</h2>
          <p>
            For Aadhaar specifically, we collect and store it only when the applicable admission process actually requires it, 
            and we strictly follow the relevant Indian data-protection and Aadhaar handling requirements.
          </p>

          <div className="legal-important">
            <strong>Disclaimer:</strong>
            Gen Spark University acts as an educational consultancy and technology partner. We facilitate the admission process, 
            but the final decision on admission, eligibility verification, and the awarding of any degree/diploma rests solely 
            with the respective partner university.
          </div>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at:
            <br />Email: privacy@gensparkuni.com
            <br />Phone: +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
