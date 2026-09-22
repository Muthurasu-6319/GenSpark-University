import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Bell, Search, BarChart3, ShieldCheck } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const navItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/applications', icon: <Users size={20} />, label: 'Applications' },
    { path: '/admin/reports', icon: <BarChart3 size={20} />, label: 'Reports' },
    { path: '/admin/users', icon: <ShieldCheck size={20} />, label: 'Admin Users' },
    { path: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src="/images/GenSpark-landscape-logo.png" alt="Gen Spark" className="admin-brand-logo" />
        </div>
        
        <nav className="admin-nav">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`admin-nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-info">
            <div className="admin-avatar">SA</div>
            <div className="admin-details">
              <span className="admin-name">Super Admin</span>
              <span className="admin-role">Full Access</span>
            </div>
          </div>
          <button onClick={handleLogout} className="admin-logout-btn">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="admin-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search applications, ID, or phone..." />
          </div>
          
          <div className="admin-topbar-actions">
            <button className="icon-btn notification-btn">
              <Bell size={20} />
              <span className="badge">3</span>
            </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="admin-content-scroll">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
