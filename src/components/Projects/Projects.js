import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolionew from "../../Assets/Projects/PortfolioNew.png";
import digibar from "../../Assets/Projects/digibar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolionew}
              isBlog={false}
              title="Portfolio New"
              description="My new Portfolio made with Love"
              link="https://github.com/mefyou-byte/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digibar}
              isBlog={false}
              title="DigiBar"
              description="InWork"
              link="https://github.com/mefyou-byte/digiBar"
            />
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
