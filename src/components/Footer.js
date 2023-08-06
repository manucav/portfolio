import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p className="logo logo-footer">Mkav</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-icon">
              <a href="https://www.linkedin.com/in/manu-cavalcante/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Ícone Linkedin" /></a>
              <a href="https://github.com/manucav" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Ícone Github" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}