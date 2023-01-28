import Navigation from "./components/UI/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
