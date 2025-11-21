// import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-us">
      <Container id='about'>
        <header className="text-center py-5">
          <h1>About Bright Home Public School</h1>
        </header>
        
        <div className="content-section my-5">
          <div className="section-content">
            <h2>History</h2>
            <p>Founded in 1985, Bright Home Public School has been dedicated to providing quality education and holistic development to students.</p>
          </div>
          
          <div className="section-content">
            <h2>Vision</h2>
            <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          </div>
          
          <div className="section-content">
            <h2>Mission</h2>
            <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
          </div>
          
          <div className="section-content">
            <h2>Principals Message</h2>
            <p>At Bright Home, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
          </div>
          
          <div className="section-content">
            <h2>Infrastructure and Facilities</h2>
            <ul>
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>Library with a vast collection of books and digital resources</li>
              <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
