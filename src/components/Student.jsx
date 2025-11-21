// import React from 'react';
import '../css/LifeAtSpringdalePage.css';

const LifeAtSpringdalePage = () => {
  return (
    <div className="life-at-brighthome">
      <header className="header">
        <h1>Life at Bright Home</h1>
      </header>
      <section className="extracurricular-clubs">
        <div className="extracurricular-activities">
          <div className="section-title">
            <h2>Extracurricular Activities</h2>
          </div>
          <div className="activities-list">
            <ul>
              <li>Music</li>
              <li>Dance</li>
              <li>Drama</li>
              <li>Art</li>
              <li>Sports</li>
              <li>Robotics</li>
              <li>Debate Club</li>
              <li>Science Club</li>
            </ul>
          </div>
        </div>
        <div className="clubs-societies">
          <div className="section-title">
            <h2>Clubs and Societies</h2>
          </div>
          <div className="clubs-list">
            <ul>
              <li>Literary Society</li>
              <li>Environmental Club</li>
              <li>Astronomy Club</li>
              <li>Coding Club</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="achievements">
        <div className="section-title">
          <h2>Achievements</h2>
        </div>
        <div className="achievements-list">
          <div className="achievement-item">
            <div className="pentagon">
              <span>John Smith</span>
            </div>
            <p>National Level Math Olympiad Winner</p>
          </div>
          <div className="achievement-item">
            <div className="pentagon">
              <span>Sarah Lee</span>
            </div>
            <p>Gold Medalist in State Swimming Championship</p>
          </div>
          <div className="achievement-item">
            <div className="pentagon">
              <span>Tech Innovators Club</span>
            </div>
            <p>Winners of Inter-School Robotics Competition</p>
          </div>
        </div>
      </section>
      <section className="student-council">
        <div className="section-title">
          <h2>Student Council</h2>
        </div>
        <div className="council-positions">
          <div className="council-member">
            <div className="pentagon">
              <span>Amy Parker</span>
            </div>
            <p>President: Grade 12</p>
          </div>
          <div className="council-member">
            <div className="pentagon">
              <span>Rajiv Mehta</span>
            </div>
            <p>Vice President: Grade 11</p>
          </div>
          <div className="council-member">
            <div className="pentagon">
              <span>Lisa Wong</span>
            </div>
            <p>Secretary: Grade 10</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtSpringdalePage;
