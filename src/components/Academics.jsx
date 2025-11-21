// import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Academics.css'; 

const Academics = () => {
  return (
    <div className="academics">
      <Container>
        <header className="text-center py-5">
          <h1>Academics at Bright Home Public School</h1>
        </header>
        
        <section className="curriculum-section my-5">
          <Card>
            <Card.Body>
              <Card.Title>Curriculum</Card.Title>
              <Row>
                <Col md={4}>
                  <h5>Primary (Grades 1-5)</h5>
                  <ul>
                    <li>English</li>
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>Social Studies</li>
                    <li>Art</li>
                    <li>Physical Education</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h5>Secondary (Grades 6-10)</h5>
                  <ul>
                    <li>English</li>
                    <li>Mathematics</li>
                    <li>Science (Physics, Chemistry, Biology)</li>
                    <li>Social Studies</li>
                    <li>Computer Science</li>
                    <li>Physical Education</li>
                    <li>Art</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h5>Senior Secondary (Grades 11-12)</h5>
                  <h6>Science Stream</h6>
                  <ul>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                    <li>Mathematics</li>
                    <li>Computer Science</li>
                    <li>English</li>
                  </ul>
                  <h6>Commerce Stream</h6>
                  <ul>
                    <li>Accountancy</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>Mathematics</li>
                    <li>English</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
        
        <section className="methodologies-section my-5">
          <Card>
            <Card.Body>
              <Card.Title>Teaching Methodologies</Card.Title>
              <Card.Text>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</Card.Text>
            </Card.Body>
          </Card>
        </section>
        
        <section className="resources-section my-5">
          <Card>
            <Card.Body>
              <Card.Title>Educational Resources</Card.Title>
              <Card.Text>Digital classrooms, interactive learning modules, and access to online educational platforms.</Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
};

export default Academics;
