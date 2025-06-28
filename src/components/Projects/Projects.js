import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import geo from "../../Assets/Projects/geo1.jpeg";
import swiggy from "../../Assets/Projects/swiggy2.png";
import expense from "../../Assets/Projects/expanse2.jpeg";
import tic_tac_toe from "../../Assets/Projects/tic-tac-toe.jpeg";

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
              // demoLink="https://arpitsharma-geo-tracker-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense-Mangement-System"
              description="A web-based application designed to help users efficiently track and manage their daily expenses. It allows users to add, update, and categorize expenses, view spending history, and generate summary reports for better financial planning. The system ensures a user-friendly interface, secure data handling, and insightful analytics to promote smart budgeting and expense control."
              ghLink="https://github.com/arpitsharma6074/Expense-Mangement-System"
              // demoLink=""  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="SWIGGY_LIKE_WEBAPP"
              description="Developed a food delivery web application inspired by Swiggy using React for the frontend and integrated it with the Swiggy public API to fetch real-time restaurant and menu data. This project was built as a hands-on exercise to deepen my understanding of React components, state management, routing, and API integration."
              ghLink="https://github.com/arpitsharma6074/SWIGGY_LIKE_WEBAPP"
              // demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic_tac_toe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Developed a simple yet interactive Tic Tac Toe game using plain HTML, CSS, and JavaScript. The game features a 3x3 grid where two players take turns to mark X and O. It includes basic win/tie detection logic, turn-based UI updates, and a reset button to replay the game. The project focuses on DOM manipulation, event handling, and implementing game logic without any external libraries or frameworks."
              ghLink="https://github.com/arpitsharma6074/Tic-Tac-Toe"
              demoLink="https://arpitsharma-tic-tac-toe.vercel.app/"              
            />
          </Col>
       

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
