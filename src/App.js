import Header from "./components/Header";
import Hero from "./components/Hero./Hero";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
