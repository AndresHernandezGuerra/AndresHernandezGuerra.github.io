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
          <h2>Andres Hernandez Guerra</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Info</a></li>
          </ul>
        </nav>
      </header>

      <Container fluid className="intro">
        <Row>
          <Col>
            <h1 data-aos="fade-down">Welcome to My Portfolio</h1>
            <p data-aos="fade-up">
              I am a software developer with experience in Swift, SwiftUI, React, Node.js, and
              Typescript.
            </p>
          </Col>
        </Row>
      </Container>

      <Skills />
    </div>
  );
}

export default Homepage;

