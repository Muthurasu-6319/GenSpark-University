import React from 'react';
import './Legal.css';

const RefundPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Refund & Cancellation Policy</h1>
          <p>Last updated: September 22, 2026</p>
        </div>
        
        <div className="legal-content">
          <h2>1. General Refund Policy</h2>
          <p>
            Gen Spark University aims to provide a transparent fee and refund structure. Refunds are generally processed 
            according to the guidelines laid down by our partner universities and the University Grants Commission (UGC).
          </p>

          <h2>2. Application Fee</h2>
          <p>
            The initial application processing fee is <strong>strictly non-refundable</strong> under any circumstances. 
            This fee covers the administrative costs of verifying documents and processing your application file.
          </p>

          <h2>3. Course Fee Refunds</h2>
          <p>If you choose to cancel your admission after paying the full course fee, refunds are calculated as follows:</p>
          <ul>
            <li><strong>Before Admission Confirmation:</strong> 100% refund of course fees (excluding processing fee).</li>
            <li><strong>Within 15 days of Admission Confirmation:</strong> 80% refund of course fees.</li>
            <li><strong>After 15 days of Admission Confirmation:</strong> No refund will be issued.</li>
          </ul>

          <div className="legal-important">
            <strong>Important Exception:</strong>
            If your application is rejected by the university due to eligibility criteria failure (and not due to forged documents), 
            100% of the paid course fee will be refunded to the original payment source within 14 working days.
          </div>

          <h2>4. Cancellation Process</h2>
          <p>
            To request a cancellation and refund, you must send a formal email to refunds@gensparkuni.com from your 
            registered email ID, quoting your Application ID and reason for cancellation.
          </p>

          <h2>5. Processing Time</h2>
          <p>
            Approved refunds will be processed and credited to the original bank account or payment method within 14 to 21 working days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
