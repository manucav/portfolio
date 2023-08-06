import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50 ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <p className="logo">Mkav</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="nav-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projetos" className={activeLink === 'projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/manu-cavalcante/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Ícone Linkedin" /></a>
              <a href="https://github.com/manucav" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Ícone Github" /></a>
            </div>
            <button><a href="https://www.linkedin.com/in/manu-cavalcante/" target="_blank" rel="noreferrer">Vamo se conectar!</a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
