import React, { useState } from 'react';
import './ApplicationStatus.css';
import { Search, CheckCircle2, Clock, FileText, Building2, GraduationCap, XCircle } from 'lucide-react';

const ApplicationStatus = () => {
  const [appId, setAppId] = useState('');
  const [mobile, setMobile] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isFound, setIsFound] = useState(false);
  
  // Mock tracking data based on the requirements
  const timelineStages = [
    { title: "Application Received", icon: FileText, status: "completed", date: "Aug 15, 2026" },
    { title: "Documents Verification", icon: Search, status: "completed", date: "Aug 17, 2026" },
    { title: "Documents Verified", icon: CheckCircle2, status: "completed", date: "Aug 18, 2026" },
    { title: "University Processing", icon: Building2, status: "current", date: "In Progress" },
    { title: "Admission Decision", icon: GraduationCap, status: "pending", date: "Expected Sep 1, 2026" },
    { title: "Completed", icon: CheckCircle2, status: "pending", date: "" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
    
    // Simple mock logic: if they type something, we show the mock result. 
    // In a real app, this would be an API call.
    if (appId.length > 5 || mobile.length >= 10) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
  };

  return (
    <div className="status-page">
      <div className="container">
        <div className="status-header">
          <h1 className="section-title">Track Your Application</h1>
          <p className="section-subtitle">Enter your application details below to check your current admission status.</p>
        </div>

        {/* Search Card */}
        <div className="status-search-card shadow-md rounded-2xl">
          <form onSubmit={handleSearch} className="search-form">
            <div className="input-group">
              <label>Application ID</label>
              <input 
                type="text" 
                placeholder="e.g., GEN-2026-000124" 
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
              />
            </div>
            
            <div className="form-divider">OR</div>
            
            <div className="input-group mb-6">
              <label>Registered Mobile / Email</label>
              <input 
                type="text" 
                placeholder="Enter mobile or email used during application" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            
            <button type="submit" className="btn btn-primary w-full btn-search">
              <Search size={18} /> Check Status
            </button>
          </form>
        </div>

        {/* Results Section */}
        {hasSearched && (
          <div className="status-results">
            {isFound ? (
              <div className="tracking-card shadow-md rounded-2xl fade-in">
                <div className="tracking-header">
                  <h2>Application #{(appId || 'GEN-2026-000124').toUpperCase()}</h2>
                  <p>Applicant: <strong>Student Name</strong> | Course: <strong>B.Sc Computer Science</strong></p>
                </div>
                
                <div className="timeline-container">
                  {timelineStages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <div key={index} className={`timeline-item ${stage.status}`}>
                        <div className="timeline-icon">
                          <Icon size={20} />
                        </div>
                        <div className="timeline-content">
                          <h4>{stage.title}</h4>
                          {stage.date && <p>{stage.date}</p>}
                        </div>
                        {index < timelineStages.length - 1 && (
                          <div className="timeline-connector"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <div className="tracking-footer">
                  <div>
                    <h4>Current Status</h4>
                    <p>Your application is currently under review by the university board.</p>
                  </div>
                  <Clock size={32} className="footer-icon opacity-20" />
                </div>
              </div>
            ) : (
              <div className="not-found-card shadow-md rounded-2xl text-center fade-in">
                <XCircle size={64} className="error-icon" />
                <h3>Application Not Found</h3>
                <p>We couldn't find any application matching the details provided. Please check the ID or mobile number and try again.</p>
                <button onClick={() => setHasSearched(false)} className="btn btn-outline">Try Again</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationStatus;
