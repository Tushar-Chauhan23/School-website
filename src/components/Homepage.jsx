// import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../css/homepagestyle.css"
import sports from  "../assets/sportsday.jpg"
import samantha from "../assets/samantha-gades.jpg"
import science from  "../assets/scienceexp.jpg"
const Home = () => {
  return (
    <div className='ho'>
      <header className="bg-primary text-white text-center py-5">
        <Container id='wel'>
          <h2>Welcome to Bright Home Public School</h2>
          <p>Where we nurture young minds for a brighter future.</p>
        </Container>
      </header>

      <Container className="my-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sports}
              alt="Annual Sports Day"
             style={{height:800,width:400}}
             />
            <Carousel.Caption>
              <h3>Annual Sports Day</h3>
              <p>Celebrating Excellence in Sports</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={science}
              alt="Science Exhibition"
              style={{height:800,width:400}}
            />
            <Carousel.Caption>
              <h3>Science Exhibition</h3>
              <p>Showcasing Student Innovations</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={samantha}
              alt="Cultural Fest"
              style={{height:800,width:400}}
            />
            <Carousel.Caption>
              <h3>Cultural Fest</h3>
              <p>Embracing Diversity and Creativity</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="my-5">
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Quick Links</Card.Title>
                <Button variant="primary" href="/about">About Us</Button>
                <Button variant="primary" href="#admissions" className="mx-2">Admissions</Button>
                <Button variant="primary" href="#contact">Contact Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Announcement</Card.Title>
                <Card.Text>
                  <strong>Annual Sports Day:</strong> Join us on August 20th for a day of sports and fun!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Announcement</Card.Title>
                <Card.Text>
                  <strong>Science Exhibition:</strong> Come see the amazing projects on September 10th.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Announcement</Card.Title>
                <Card.Text>
                  <strong>Cultural Fest:</strong> Experience diverse cultures on October 15th.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Testimonials</Card.Title>
                <Card.Text>
                  "Bright Home Public School has been a second home to me. The faculty and environment have
                  been nurturing and inspiring." - John Smith, Alumni
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Testimonials</Card.Title>
                <Card.Text>
                  "The education I received at Bright Home has been instrumental in shaping my career. The 
                  focus on holistic development is commendable." -  Alumni
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-light text-center py-4">
        <Container>
          <p>Bright Home Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <p>Phone: +1 (123) 456-7890 | Email: info@Bright Home.edu</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
