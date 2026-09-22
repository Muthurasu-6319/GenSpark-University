import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import { Lock, Mail, AlertCircle } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials based on user request
    if (email === 'university.genspark@gmail.com' && password === 'Muthu@6319') {
      // Set a mock auth token in localStorage
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <img src="/images/GenSpark-landscape-logo.png" alt="Gen Spark University" className="admin-login-logo" />
            <h2>Admin Portal</h2>
            <p>Sign in to access the control center</p>
          </div>

          {error && (
            <div className="admin-login-error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="input-group mb-4">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="admin@gensparkuni.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="input-group mb-6">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full login-btn">
              Secure Login
            </button>
          </form>
          
          <div className="admin-login-footer">
            <p>Protected by Gen Z Neural-X Security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
