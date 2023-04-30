import React from 'react';
import { Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaDatabase, FaSwift } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="card-container">
        <Card>
          <Card.Body>
            <Card.Title>
              <FaReact /> React
            </Card.Title>
            <Card.Text>A JavaScript library for building user interfaces.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <FaSwift /> Swift
            </Card.Title>
            <Card.Text>An object-oriented programming language developed by Apple to build iOS Applications.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <FaNodeJs /> Node.js
            </Card.Title>
            <Card.Text>A JavaScript runtime built on Chrome's V8 JavaScript engine.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <SiTypescript /> Typescript
            </Card.Title>
            <Card.Text>A strongly-typed superset of JavaScript that adds optional static typing and other advanced features.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
