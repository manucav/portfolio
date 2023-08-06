import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Tecnologias = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill"  id="skills">
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Tecnologias e linguagens que possuo conhecimento sólido e utilizo para meus projetos. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Imagem" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagem" />
                                <h5>Vue.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagem" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagem" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagem" />
                                <h5>Node.JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagem" />
                                <h5>API</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagem" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagem" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagem" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagem" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagem" />
                                <h5>Quasar Framework</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Imagem" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}