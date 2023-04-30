import React, { useEffect } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      mirror: true,
      once: false,
    });
  }, []);

  return (
    <div className="homepage">
      <header>
        <div class="branding">
          <h2>Your Name</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <Container fluid className="intro">
        <Row>
          <Col>
            <h1 data-aos="fade-down">Welcome to My Portfolio</h1>
            <p data-aos="fade-up">
              I am a software developer with experience in React, Node.js, and
              MongoDB.
            </p>
          </Col>
        </Row>
      </Container>

      <Skills />
    </div>
  );
}

export default Homepage;

