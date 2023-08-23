import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Recommendation movies system"
              description="Movie Website built on python Django framework. Uses ***Content Based Predictive Model*** approach to predict similar movies based on the contents/genres similarities."
              ghLink="https://github.com/souhailnahed/Django-Movie-Recommendor"
              demoLink="https://Movie-Recommendor.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="jobcall"
              description="Realization of a recruitment platform for call centers multi-user, dedicated to candidates and recruiters."
              ghLink="https://github.com/souhailnahed/jobcall"
              demoLink="jobcall.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="refuel.me"
              description="Development of an aircraft simulation game (Air to air refueling process)"
              ghLink="https://github.com/souhailnahed/"
              demoLink="https://refuel-me.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ensaonline"
              description="Realization of an E-Learning website for National School of Applied Sciences."
              ghLink="https://github.com/souhailnahed/ensaonline"
              demoLink="https://ensaonline-1199.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Club Manager"
              description="Development of a student club management solution"
              ghLink="https://github.com/souhailnahed/clubmanager"
              demoLink="https://clubmanager-1199.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="book Store"
              description="Realization of an E-commerce web application selling books"
              ghLink="https://github.com/souhailnahed/book_store"
              demoLink="https://book-store1199..herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
