import Navigation from "./components/UI/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
