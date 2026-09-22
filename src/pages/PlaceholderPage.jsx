import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="section-padding" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">This page is under construction.</p>
    </div>
  );
};

export default PlaceholderPage;
