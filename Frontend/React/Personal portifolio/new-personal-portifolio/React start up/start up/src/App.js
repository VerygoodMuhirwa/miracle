import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Portifolio from './components/portifolio/Portifolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contacts/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
