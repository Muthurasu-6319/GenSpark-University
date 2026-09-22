import React from 'react';
import './AdminDashboard.css';
import { Users, UserPlus, Clock, FileCheck, Building2, CheckCircle2, XCircle } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Applications', count: '2,845', icon: <Users size={24} />, color: 'blue' },
    { title: 'New Applications', count: '142', icon: <UserPlus size={24} />, color: 'indigo' },
    { title: 'Pending Verification', count: '89', icon: <Clock size={24} />, color: 'yellow' },
    { title: 'Documents Verified', count: '312', icon: <FileCheck size={24} />, color: 'teal' },
    { title: 'University Processing', count: '1,024', icon: <Building2 size={24} />, color: 'purple' },
    { title: 'Approved', count: '1,250', icon: <CheckCircle2 size={24} />, color: 'green' },
    { title: 'Rejected', count: '28', icon: <XCircle size={24} />, color: 'red' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Super Admin. Here's what's happening today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <p className="stat-count">{stat.count}</p>
            </div>
            <div className={`stat-icon-wrapper bg-${stat.color}-50 text-${stat.color}-600`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for future charts/tables */}
      <div className="dashboard-content">
        <div className="recent-activity-card">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot bg-indigo-500"></div>
              <div className="activity-details">
                <p><strong>New Application received</strong> from Rahul Sharma for B.Sc Computer Science.</p>
                <span className="activity-time">2 mins ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot bg-teal-500"></div>
              <div className="activity-details">
                <p><strong>Documents verified</strong> for Priya Patel (GEN-2026-00421).</p>
                <span className="activity-time">15 mins ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot bg-yellow-500"></div>
              <div className="activity-details">
                <p><strong>Document correction requested</strong> for Amit Kumar (TC is blurred).</p>
                <span className="activity-time">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
