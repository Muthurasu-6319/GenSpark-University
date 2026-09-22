import React, { useState } from 'react';
import './ApplyNow.css';
import { CheckCircle2, ChevronRight, UploadCloud, File, Trash2, Edit2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplyNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: '', email: '', mobile: '', whatsapp: '', dob: '', gender: '', fatherName: '', motherName: '', guardianName: '', guardianMobile: '',
    // Step 2: Address
    permHouseNo: '', permStreet: '', permVillage: '', permPost: '', permTaluk: '', permDistrict: '', permState: '', permPincode: '',
    sameAsPermanent: false,
    commHouseNo: '', commStreet: '', commVillage: '', commPost: '', commTaluk: '', commDistrict: '', commState: '', commPincode: '',
    // Step 3: Other
    annualIncome: '', community: '', govIdDetails: '',
    // Step 4: Course
    university: '', program: '', course: '', specialization: '', medium: '',
    // Step 5: Education
    sslcBoard: '', sslcSchool: '', sslcMonthYear: '', sslcPercentage: '', sslcFile: null,
    hscBoard: '', hscSchool: '', hscMonthYear: '', hscPercentage: '', hscFile: null,
    ugDegree: '', ugMajor: '', ugUniversity: '', ugYear: '', ugPercentage: '', ugFile: null,
    // Step 6: Documents
    docs: { aadhaar: null, sslc: null, hsc: null, tc: null, degree: null, community: null, photo: null, signature: null, other: null },
    // Step 7: Bank
    accHolder: '', accNumber: '', ifsc: '', bankName: '', branch: '',
    // Step 9: Declaration
    decAccurate: false, decTerms: false, decConsent: false, decVerification: false
  });

  const totalSteps = 10;
  const isComplete = currentStep === 10;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (docType, e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        docs: { ...prev.docs, [docType]: file.name }
      }));
    }
  };

  const removeFile = (docType) => {
    setFormData(prev => ({
      ...prev,
      docs: { ...prev.docs, [docType]: null }
    }));
  };

  // --- Step Renders ---
  
  const renderStep1 = () => (
    <div className="form-step fade-in">
      <h3>Personal Details</h3>
      <div className="form-grid">
        <div className="input-group">
          <label>Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Mobile *</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>WhatsApp</label>
          <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>Date of Birth *</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-group">
          <label>Father's Name *</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Mother's Name *</label>
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step fade-in">
      <h3>Permanent Address</h3>
      <div className="form-grid mb-6">
        <div className="input-group"><label>House No</label><input type="text" name="permHouseNo" value={formData.permHouseNo} onChange={handleChange} /></div>
        <div className="input-group"><label>Street</label><input type="text" name="permStreet" value={formData.permStreet} onChange={handleChange} /></div>
        <div className="input-group"><label>Village/Town</label><input type="text" name="permVillage" value={formData.permVillage} onChange={handleChange} /></div>
        <div className="input-group"><label>District</label><input type="text" name="permDistrict" value={formData.permDistrict} onChange={handleChange} /></div>
        <div className="input-group"><label>State</label><input type="text" name="permState" value={formData.permState} onChange={handleChange} /></div>
        <div className="input-group"><label>Pincode</label><input type="text" name="permPincode" value={formData.permPincode} onChange={handleChange} /></div>
      </div>

      <h3>Communication Address</h3>
      <div className="checkbox-group mb-4">
        <input type="checkbox" id="sameAsPermanent" name="sameAsPermanent" checked={formData.sameAsPermanent} onChange={handleChange} />
        <label htmlFor="sameAsPermanent">Same as Permanent Address</label>
      </div>
      
      {!formData.sameAsPermanent && (
        <div className="form-grid">
          <div className="input-group"><label>House No</label><input type="text" name="commHouseNo" value={formData.commHouseNo} onChange={handleChange} /></div>
          <div className="input-group"><label>Street</label><input type="text" name="commStreet" value={formData.commStreet} onChange={handleChange} /></div>
          <div className="input-group"><label>District</label><input type="text" name="commDistrict" value={formData.commDistrict} onChange={handleChange} /></div>
          <div className="input-group"><label>Pincode</label><input type="text" name="commPincode" value={formData.commPincode} onChange={handleChange} /></div>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step fade-in">
      <h3>Other Details</h3>
      <p className="step-desc text-gray-500 mb-4">Provide additional information to complete your profile.</p>
      <div className="form-grid">
        <div className="input-group">
          <label>Annual Family Income</label>
          <select name="annualIncome" value={formData.annualIncome} onChange={handleChange}>
            <option value="">Select Range</option>
            <option value="Below 1 Lakh">Below 1 Lakh</option>
            <option value="1-3 Lakhs">1-3 Lakhs</option>
            <option value="Above 3 Lakhs">Above 3 Lakhs</option>
          </select>
        </div>
        <div className="input-group">
          <label>Community</label>
          <select name="community" value={formData.community} onChange={handleChange}>
            <option value="">Select</option>
            <option value="BC">BC</option>
            <option value="MBC">MBC</option>
            <option value="SC/ST">SC/ST</option>
            <option value="General">General</option>
          </select>
        </div>
        <div className="input-group">
          <label>Government ID Details (optional)</label>
          <input type="text" name="govIdDetails" placeholder="E.g. Aadhaar Number" value={formData.govIdDetails} onChange={handleChange} />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="form-step fade-in">
      <h3>University & Course Selection</h3>
      <div className="form-grid">
        <div className="input-group">
          <label>University</label>
          <select name="university" value={formData.university} onChange={handleChange}>
            <option value="">Select University</option>
            <option value="Alagappa University">Alagappa University</option>
            <option value="Bharathidasan University">Bharathidasan University</option>
          </select>
        </div>
        <div className="input-group">
          <label>Program Level</label>
          <select name="program" value={formData.program} onChange={handleChange}>
            <option value="">Select</option>
            <option value="UG">Undergraduate (UG)</option>
            <option value="PG">Postgraduate (PG)</option>
            <option value="Diploma">Diploma / Certificate</option>
          </select>
        </div>
        <div className="input-group">
          <label>Course</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="B.Sc Computer Science">B.Sc Computer Science</option>
            <option value="B.Com">B.Com</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
          </select>
        </div>
        <div className="input-group">
          <label>Medium of Instruction</label>
          <select name="medium" value={formData.medium} onChange={handleChange}>
            <option value="">Select Medium</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="form-step fade-in">
      <h3>Educational Qualification</h3>
      <div className="edu-section mb-6">
        <h4>10th Standard (SSLC)</h4>
        <div className="form-grid">
          <div className="input-group"><label>Board</label><input type="text" name="sslcBoard" value={formData.sslcBoard} onChange={handleChange} /></div>
          <div className="input-group"><label>School</label><input type="text" name="sslcSchool" value={formData.sslcSchool} onChange={handleChange} /></div>
          <div className="input-group"><label>Month & Year</label><input type="month" name="sslcMonthYear" value={formData.sslcMonthYear} onChange={handleChange} /></div>
          <div className="input-group"><label>Percentage / CGPA</label><input type="text" name="sslcPercentage" value={formData.sslcPercentage} onChange={handleChange} /></div>
        </div>
      </div>
      <div className="edu-section mb-6">
        <h4>12th Standard (HSC)</h4>
        <div className="form-grid">
          <div className="input-group"><label>Board</label><input type="text" name="hscBoard" value={formData.hscBoard} onChange={handleChange} /></div>
          <div className="input-group"><label>School</label><input type="text" name="hscSchool" value={formData.hscSchool} onChange={handleChange} /></div>
          <div className="input-group"><label>Month & Year</label><input type="month" name="hscMonthYear" value={formData.hscMonthYear} onChange={handleChange} /></div>
          <div className="input-group"><label>Percentage / CGPA</label><input type="text" name="hscPercentage" value={formData.hscPercentage} onChange={handleChange} /></div>
        </div>
      </div>
      {formData.program === 'PG' && (
        <div className="edu-section bg-gray-50 p-4 rounded-lg">
          <h4>Undergraduate Degree (For PG Applicants)</h4>
          <div className="form-grid">
            <div className="input-group"><label>Degree</label><input type="text" name="ugDegree" value={formData.ugDegree} onChange={handleChange} /></div>
            <div className="input-group"><label>University</label><input type="text" name="ugUniversity" value={formData.ugUniversity} onChange={handleChange} /></div>
            <div className="input-group"><label>Percentage / Class</label><input type="text" name="ugPercentage" value={formData.ugPercentage} onChange={handleChange} /></div>
          </div>
        </div>
      )}
    </div>
  );

  const renderFileCard = (title, key, required = false) => (
    <div className="file-upload-card" key={key}>
      <div className="card-header">
        <h4>{title} {required && <span className="text-red-500">*</span>}</h4>
      </div>
      <div className="card-body">
        {formData.docs[key] ? (
          <div className="uploaded-file">
            <File size={24} className="text-primary" />
            <span className="file-name">{formData.docs[key]}</span>
            <button className="remove-btn" onClick={() => removeFile(key)}><Trash2 size={16} /></button>
          </div>
        ) : (
          <div className="upload-placeholder">
            <input type="file" id={`file-${key}`} accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileUpload(key, e)} className="hidden-input" />
            <label htmlFor={`file-${key}`} className="upload-label">
              <UploadCloud size={28} className="text-gray-400 mb-2" />
              <span>Click to upload</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="form-step fade-in">
      <h3>Document Uploads</h3>
      <p className="step-desc text-gray-500 mb-6">Please upload clear, legible copies. Accepted formats: PDF, JPG, PNG.</p>
      <div className="docs-grid">
        {renderFileCard("Aadhaar / ID", "aadhaar", true)}
        {renderFileCard("10th Marksheet", "sslc", true)}
        {renderFileCard("12th Marksheet", "hsc", true)}
        {renderFileCard("Transfer Certificate", "tc", true)}
        {renderFileCard("Passport Photo", "photo", true)}
        {renderFileCard("Signature", "signature", true)}
        {formData.program === 'PG' && renderFileCard("Degree Certificate", "degree", true)}
        {renderFileCard("Community Certificate", "community")}
      </div>
    </div>
  );

  const renderStep7 = () => (
    <div className="form-step fade-in">
      <h3>Bank Details</h3>
      <div className="alert-info mb-6">
        <AlertCircle size={20} />
        <p>This information is securely collected solely for processing potential refunds or scholarships. It is optional at this stage.</p>
      </div>
      <div className="form-grid">
        <div className="input-group"><label>Account Holder Name</label><input type="text" name="accHolder" value={formData.accHolder} onChange={handleChange} /></div>
        <div className="input-group"><label>Account Number</label><input type="text" name="accNumber" value={formData.accNumber} onChange={handleChange} /></div>
        <div className="input-group"><label>IFSC Code</label><input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} /></div>
        <div className="input-group"><label>Bank Name</label><input type="text" name="bankName" value={formData.bankName} onChange={handleChange} /></div>
      </div>
    </div>
  );

  const renderStep8 = () => (
    <div className="form-step fade-in">
      <div className="review-header">
        <h3>Review Application</h3>
        <button onClick={() => setCurrentStep(1)} className="edit-btn"><Edit2 size={16} className="mr-1"/> Edit All</button>
      </div>
      
      <div className="review-section">
        <div className="review-block">
          <h4>Personal & Contact</h4>
          <p><strong>Name:</strong> {formData.fullName || 'Not provided'}</p>
          <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
          <p><strong>Mobile:</strong> {formData.mobile || 'Not provided'}</p>
          <p><strong>Gender:</strong> {formData.gender || 'Not provided'}</p>
        </div>
        <div className="review-block">
          <h4>Academic Preferences</h4>
          <p><strong>University:</strong> {formData.university || 'Not selected'}</p>
          <p><strong>Program:</strong> {formData.program || 'Not selected'}</p>
          <p><strong>Course:</strong> {formData.course || 'Not selected'}</p>
        </div>
        <div className="review-block">
          <h4>Uploaded Documents</h4>
          <ul className="review-docs">
            {Object.entries(formData.docs).map(([key, value]) => 
              value && <li key={key}><CheckCircle2 size={16} className="text-green-500 mr-2"/> {value}</li>
            )}
            {!Object.values(formData.docs).some(val => val) && <li>No documents uploaded yet.</li>}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderStep9 = () => (
    <div className="form-step fade-in">
      <h3>Declaration</h3>
      <p className="step-desc text-gray-500 mb-6">Please read and accept the following declarations to proceed.</p>
      
      <div className="declaration-list">
        <label className="checkbox-container">
          <input type="checkbox" name="decAccurate" checked={formData.decAccurate} onChange={handleChange} />
          <span className="checkmark"></span>
          I hereby declare that all the information provided in this application is true, complete, and accurate to the best of my knowledge.
        </label>
        <label className="checkbox-container">
          <input type="checkbox" name="decTerms" checked={formData.decTerms} onChange={handleChange} />
          <span className="checkmark"></span>
          I agree to abide by the Terms & Conditions and rules of the University and Gen Spark Academy.
        </label>
        <label className="checkbox-container">
          <input type="checkbox" name="decConsent" checked={formData.decConsent} onChange={handleChange} />
          <span className="checkmark"></span>
          I consent to the processing of my application information for admission purposes.
        </label>
        <label className="checkbox-container">
          <input type="checkbox" name="decVerification" checked={formData.decVerification} onChange={handleChange} />
          <span className="checkmark"></span>
          I understand that my admission is subject to university eligibility rules and final document verification.
        </label>
      </div>
    </div>
  );

  const renderStep10 = () => (
    <div className="form-step text-center fade-in success-step">
      <div className="success-icon mb-6">🎉</div>
      <h2>Application Submitted Successfully!</h2>
      <div className="app-details-card mx-auto max-w-md mt-6 text-left">
        <div className="detail-row">
          <span>Application ID:</span>
          <strong>GEN-2026-000124</strong>
        </div>
        <div className="detail-row">
          <span>Applicant Name:</span>
          <strong>{formData.fullName || 'Student'}</strong>
        </div>
        <div className="detail-row">
          <span>University:</span>
          <strong>{formData.university || 'Alagappa University'}</strong>
        </div>
        <div className="detail-row">
          <span>Status:</span>
          <span className="status-badge received">🟡 Application Received</span>
        </div>
      </div>
      <div className="success-actions mt-8">
        <Link to="/application-status" className="btn btn-primary">Track Application</Link>
        <Link to="/" className="btn btn-outline">Back to Home</Link>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      case 6: return renderStep6();
      case 7: return renderStep7();
      case 8: return renderStep8();
      case 9: return renderStep9();
      case 10: return renderStep10();
      default: return renderStep1();
    }
  };

  const getStepTitle = () => {
    const titles = ["Personal", "Address", "Other Details", "University", "Education", "Documents", "Bank Details", "Review", "Declaration", "Complete"];
    return titles[currentStep - 1];
  };

  return (
    <div className="apply-page bg-gray-50 min-h-screen py-12">
      <div className="container apply-container mx-auto">
        <div className="apply-header text-center mb-10">
          <h1>Admission Application</h1>
          <p>Fill out the form below to secure your seat.</p>
        </div>

        <div className="apply-card shadow-lg bg-white rounded-2xl overflow-hidden">
          {/* Progress Tracker */}
          {!isComplete && (
            <div className="progress-container">
              <div className="progress-header">
                <span className="step-count text-primary">Step {currentStep} of {totalSteps - 1}</span>
                <span className="step-title">{getStepTitle()}</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}></div>
              </div>
            </div>
          )}

          {/* Form Content */}
          <div className="apply-content p-8">
            {renderCurrentStep()}
          </div>

          {/* Form Navigation */}
          {!isComplete && (
            <div className="apply-footer">
              <button 
                className={`btn btn-outline ${currentStep === 1 ? 'invisible' : ''}`} 
                onClick={handlePrev}
              >
                Previous
              </button>
              
              <button 
                className="btn btn-primary" 
                onClick={handleNext}
                disabled={currentStep === 9 && (!formData.decAccurate || !formData.decTerms)}
              >
                {currentStep === 9 ? 'Submit Application' : 'Next Step'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
