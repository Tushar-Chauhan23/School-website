// import React from 'react';
import '../css/AdmissionsPage.css';

const AdmissionsPage = () => {
  return (
    <div className="admissions-page">
      <div className="admissions-header">
        <h1>Admissions Information</h1>
      </div>
      <div className="admissions-content">
        <div className="admissions-info">
          <h2>Process</h2>
          <p>
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
        </div>
        <div className="admissions-info">
          <h2>Criteria</h2>
          <p>
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>
        <div className="dates-card">
          <h2>Important Dates</h2>
          <ul className="dates-list">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdmissionsPage;
