import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's a summary of my past internships and work experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ExperienceCard
              role="Java Developer Intern"
              company="Infosys Springboard"
              duration="Oct 2024 – Dec 2024"
              description="Developed a full-stack web application to manage and track user expenses using React and Spring Boot. Contributed to both frontend and backend development, implementing core features, authentication, and data management."
              // description="Worked on an internal expense management system using Spring Boot and React. Developed REST APIs and integrated real-time analytics dashboards. Focused on improving performance and reducing backend response time by 40%."
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
