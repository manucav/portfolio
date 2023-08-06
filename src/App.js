import './App.css'
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Tecnologias } from './components/Skills';
import { Projetos } from './components/Projetos';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Tecnologias />
      <Projetos />
      <Footer />
    </>
  )
}

export default App
