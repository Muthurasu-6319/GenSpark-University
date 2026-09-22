import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import PlaceholderPage from './pages/PlaceholderPage';

import Universities from './pages/Universities';
import AlagappaUniversity from './pages/AlagappaUniversity';
import BharathidasanUniversity from './pages/BharathidasanUniversity';
import Admissions from './pages/Admissions';
import ApplyNow from './pages/ApplyNow';
import ApplicationStatus from './pages/ApplicationStatus';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import RefundPolicy from './pages/legal/RefundPolicy';
import Disclaimer from './pages/legal/Disclaimer';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app">
      {!isAdminRoute && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/universities/alagappa-university" element={<AlagappaUniversity />} />
          <Route path="/universities/bharathidasan-university" element={<BharathidasanUniversity />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
          
          {/* Legal Routes */}
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<TermsConditions />} />
          <Route path="/legal/refund" element={<RefundPolicy />} />
          <Route path="/legal/disclaimer" element={<Disclaimer />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/applications" element={<PlaceholderPage title="Admin Applications" />} />
            <Route path="/admin/reports" element={<PlaceholderPage title="Admin Reports" />} />
            <Route path="/admin/users" element={<PlaceholderPage title="Admin Users" />} />
            <Route path="/admin/settings" element={<PlaceholderPage title="Admin Settings" />} />
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
