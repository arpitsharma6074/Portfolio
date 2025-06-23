import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import geo from "../../Assets/Projects/geo1.jpeg";
import swiggy from "../../Assets/Projects/swiggy2.png";
import expense from "../../Assets/Projects/expanse2.jpeg";

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
              imgPath={geo}
              isBlog={false}
              title="GeoTracker"
              description="GeoTracker is a real-time location tracking web application built using React and Spring Boot. It allows users to visualize and monitor GPS coordinates on an interactive map, with data stored securely in a MySQL database."
              ghLink="https://github.com/arpitsharma6074/Geo-Tracker-Project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense-Mangement-System"
              description="A web-based application designed to help users efficiently track and manage their daily expenses. It allows users to add, update, and categorize expenses, view spending history, and generate summary reports for better financial planning. The system ensures a user-friendly interface, secure data handling, and insightful analytics to promote smart budgeting and expense control."
              ghLink="https://github.com/arpitsharma6074/Expense-Mangement-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="SWIGGY_LIKE_WEBAPP"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/arpitsharma6074/SWIGGY_LIKE_WEBAPP"
              // demoLink=""              
            />
          </Col>

       

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
