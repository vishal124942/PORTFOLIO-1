import Header from "./components/Header";
import Hero from "./components/Hero./Hero";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
