import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Arpit Sharma </span>
            {/* from <span className="purple"> Kanpur, India.</span> */}
            {/* <br /> */}
            — a passionate Full Stack Developer and Software Engineer who enjoys turning ideas 
            into real, user-friendly web experiences. I'm currently pursuing a B.Tech in Computer Science(2026) and have gained practical development experience through internships and open-source contributions. I’m always curious, 
            eager to learn, and open to exciting opportunities and meaningful collaborations.
            <br />
           
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arpit Sharma</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
