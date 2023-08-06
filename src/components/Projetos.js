import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjetoCard } from "./ProjetoCard";
import projImg1 from "../assets/img/projeto-1.png";
import projImg2 from "../assets/img/projeto-2.png";
import projImg3 from "../assets/img/projeto-3.png";
import projImg4 from "../assets/img/projeto-4.png";
import projImg5 from "../assets/img/projeto-6.png";
import projImg6 from "../assets/img/projeto-5.png";
import projImg7 from "../assets/img/projeto-7.png";
import projImg8 from "../assets/img/projeto-8.png";
import projImg9 from "../assets/img/projeto-9.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projetos = () => {

  const projetos = [
    {
      title: "Clone BizOne",
      description: "Desenvolvido utilizando HTML e CSS",
      imgUrl: projImg1,
    },
    {
      title: "Clone Nubank",
      description: "Desenvolvido utilizando HTML, CSS e JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Clone Twitter",
      description: "Desenvolvido utilizando Vue.js e Quasar Framework",
      imgUrl: projImg3,
    },
    {
      title: "Pokédex",
      description: "Desenvolvido utilizando Vue.js, Quasar Framework e API RESTful",
      imgUrl: projImg4,
    },
  ];

  const projetos2 = [
    {
      title: "Aluroni",
      description: "Projeto feito durante o Programa Desenvolve 2023",
      imgUrl: projImg5,
    },
    {
      title: "Apeperia",
      description: "Projeto feito durante o Programa Desenvolve 2023",
      imgUrl: projImg6,
    },
    {
      title: "Robotron 2000",
      description: "Projeto feito durante o Programa Desenvolve 2023",
      imgUrl: projImg7,
    },
    {
      title: "Sorteador de amigo secreto",
      description: "Projeto feito durante o Programa Desenvolve 2023",
      imgUrl: projImg8,
    },
  ];

  const projetos3 = [
    {
      title: "Projeto #1",
      description: "Projeto ainda em desenvolvimento",
      imgUrl: projImg9,
    },
    {
      title: "Projeto #2",
      description: "Projeto ainda em desenvolvimento",
      imgUrl: projImg9,
    },
    {
      title: "Projeto #3",
      description: "Projeto ainda em desenvolvimento",
      imgUrl: projImg9,
    },
    {
      title: "Projeto #4",
      description: "Projeto ainda em desenvolvimento",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="projeto" id="projetos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Em meus projetos como desenvolvedora, tenho explorado as possibilidades do desenvolvimento web utilizando tecnologias modernas e poderosas, como React.js, Vue.js, entre outras. Cada projeto é uma oportunidade para demonstrar minha paixão por criar interfaces interativas e responsivas, garantindo a melhor experiência para os usuários.</p>
                <Tab.Container id="projetos-tabs" defaultActiveKey="primeiro">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="primeiro">#1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="segundo">#2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="terceiro">#3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="primeiro">
                      <Row>
                        {
                          projetos.map((projeto, index) => {
                            return (
                              <ProjetoCard
                                key={index}
                                {...projeto}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="segundo">
                    <Row>
                        {
                          projetos2.map((projeto, index) => {
                            return (
                              <ProjetoCard
                                key={index}
                                {...projeto}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="terceiro">
                    <Row>
                    {
                          projetos3.map((projeto, index) => {
                            return (
                              <ProjetoCard
                                key={index}
                                {...projeto}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}