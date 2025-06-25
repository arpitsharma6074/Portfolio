import React from "react";
import Card from "react-bootstrap/Card";
import { FaCalendarAlt } from "react-icons/fa";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontSize: "1.6rem", fontWeight: "600" }}>
          {props.role}
        </Card.Title>
        <Card.Subtitle
          className="mb-2 purple"
          style={{ fontSize: "1.2rem", fontWeight: "500" }}
        >
          {props.company}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", fontSize: "1.05rem" }}>
          {props.description}
        </Card.Text>
        <div style={{ fontStyle: "italic", color: "#aaa", fontSize: "0.95rem" }}>
          <FaCalendarAlt /> &nbsp;{props.duration}
        </div>
      </Card.Body>
    </Card>
  );
}
// FaCalendarAlt
export default ExperienceCard;
