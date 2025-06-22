import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiMacos,
  SiIntellijidea,
  SiVisualstudioCode, 
} from "react-icons/si";
import {
  DiGit
} from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
        <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudioCode />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
