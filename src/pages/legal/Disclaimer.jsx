import React from 'react';
import './Legal.css';

const Disclaimer = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Admission Disclaimer</h1>
          <p>Last updated: September 22, 2026</p>
        </div>
        
        <div className="legal-content">
          <h2>Educational Partner Status</h2>
          <p>
            Gen Spark University operates as an independent educational consultancy, technology platform, and authorized 
            admission partner for various universities. We are <strong>not</strong> a university ourselves under the UGC Act, 1956.
          </p>

          <div className="legal-important">
            <strong>Critical Notice:</strong>
            Gen Spark University does not award degrees, diplomas, or certificates. The applicable partner university 
            (e.g., Alagappa University, Bharathidasan University) remains solely responsible for the academic program, 
            examinations, eligibility verification, and the award of the final qualification.
          </div>

          <h2>Accuracy of Information</h2>
          <p>
            While we strive to keep the information on this website up to date and correct, we make no representations or warranties 
            of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect 
            to the website or the information, courses, and services contained on the website for any purpose.
          </p>
          <p>
            Course structures, fee details, and eligibility criteria are subject to change by the respective partner universities 
            without prior notice.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Through this website, you may be able to link to other websites which are not under the control of Gen Spark University. 
            We have no control over the nature, content, and availability of those sites. The inclusion of any links does not 
            necessarily imply a recommendation or endorse the views expressed within them.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event will Gen Spark University be liable for any loss or damage including without limitation, indirect or consequential 
            loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, 
            the use of this website or our admission services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
