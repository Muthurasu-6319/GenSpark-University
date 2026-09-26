import React from 'react';
import './CourseList.css';

const courseData = {
  ug: [
    {
      title: 'UG Arts',
      className: 'arts',
      courses: [
        'B.A Tamil', 'B.Lit Tamil', 'B.A. Economics', 'B.A English',
        'B.A History', 'B.A Public Administration', 'B.A Political Science'
      ]
    },
    {
      title: 'UG Science',
      className: 'science',
      cardClass: 'science-card',
      courses: [
        'B.Sc. Mathematics', 'B.Sc. Physics', 'B.Sc. Chemistry',
        'B.Sc. Botany', 'B.Sc. Zoology', 'B.Sc. Geography',
        'B.Sc. Computer Science', 'B.Sc. Information Technology'
      ]
    },
    {
      title: 'UG Management & Commerce',
      className: 'management',
      courses: [
        'B.Com', 'B.Com (Bank Mgmt)', 'B.B.A',
        'B.B.A (Retail Mgmt)', 'BLIS (One Year)'
      ]
    }
  ],
  pg: [
    {
      title: 'PG Arts',
      className: 'arts',
      courses: [
        'M.A Tamil', 'M.A English', 'M.A. History', 'M.A Economics',
        'M.A (Pub Admin)', 'M.A (Political Sci)', 'M.A. Human Resources',
        'M.COM', 'M.com (Bank Mgmt)', 'M.com (Fin Mgmt)'
      ]
    },
    {
      title: 'PG Science',
      className: 'science',
      cardClass: 'science-card',
      courses: [
        'M.sc Mathematics', 'M.sc. Physics', 'M.sc. Chemistry',
        'M.sc. Zoology', 'M.sc. Botany', 'M.sc. Geography',
        'M.sc. Computer Science', 'BLIS', 'MLIS'
      ]
    },
    {
      title: 'CS & IT',
      className: 'csit',
      courses: [
        'B.Sc (CS)', 'B.Sc (IT)', 'BCA',
        'M.Sc (CS)', 'M.Sc (IT)', 'MCA'
      ]
    }
  ],
  mba: [
    {
      title: 'MBA PROGRAMS',
      className: 'mba',
      cardClass: 'mba-card',
      courses: [
        'M.B.A. (Human Resource Management)',
        'MBA (Marketing Management)',
        'MBA (Financial Management)',
        'MBA (Operations Management)',
        'MBA (System Management)'
      ]
    }
  ]
};

const CourseList = () => {
  return (
    <div className="course-list-container">
      <div className="course-list-header">
        <h1 className="course-list-title">Bharathidasan University</h1>
        <p className="course-list-subtitle">Distance Education Course Offerings</p>
      </div>

      <div className="program-section">
        <div className="section-title">UG PROGRAMS</div>
        <div className="category-grid">
          {courseData.ug.map((category, idx) => (
            <div className={`category-card ${category.cardClass || ''}`} key={idx}>
              <div className={`category-header ${category.className}`}>
                {category.title}
              </div>
              <ul className="course-items">
                {category.courses.map((course, i) => (
                  <li className="course-item" key={i}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="program-section">
        <div className="section-title">PG PROGRAMS</div>
        <div className="category-grid">
          {courseData.pg.map((category, idx) => (
            <div className={`category-card ${category.cardClass || ''}`} key={idx}>
              <div className={`category-header ${category.className}`}>
                {category.title}
              </div>
              <ul className="course-items">
                {category.courses.map((course, i) => (
                  <li className="course-item" key={i}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="program-section">
        <div className="section-title">MBA PROGRAMS</div>
        <div className="category-grid">
          {courseData.mba.map((category, idx) => (
            <div className={`category-card ${category.cardClass || ''}`} key={idx} style={{ backgroundColor: '#fdd835' }}>
              <ul className="course-items" style={{ padding: '2rem' }}>
                {category.courses.map((course, i) => (
                  <li className="course-item" key={i}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
