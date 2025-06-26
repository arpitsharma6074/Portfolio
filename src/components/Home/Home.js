import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/IMG-20240614-WA0000.jpg";
import Particle from "../Particle";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import Experience from "../Experience/Experience";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ARPIT SHARMA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <p className="purple">
              I'm a 
              <i> <b className="purple"> Full Stack Developer </b></i> 
              and
              <i><b className="purple">  Software Engineer </b> </i> 
              passionate about building clean, user-focused 
              <i><b className="purple"> web applications. </b> </i>
              I’ve gained practical experience through 
              <i><b className="purple">  projects </b> </i>and
              <i><b className="purple">   internships,</b> </i> and 
              <i><b className="purple"> I’m always open to new challenges and collaborations. </b> </i> 
              <br />
              
            </p>
              </div>
               
            </Col>
            

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
             <Row>
              <Col md={12} className="home-about-social">
              <h3> Feel free to reach out!</h3>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/arpitsharma6074"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/_ArpitSharma__"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/arpitsharma6074/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/its_me_arpitsharma"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
      <About />
      <Experience />
      <Projects />
      <ResumeNew />
    </section>
  );
}

export default Home;


{/* <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  CyberSecurity.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Springboot</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Redux.js</b>
              </i> */}