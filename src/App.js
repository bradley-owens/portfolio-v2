import Navigation from "./components/UI/Navigation/Navigation";
import Hero from "./components/Contact/Hero/Hero";
import styles from "./App.module.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Hero className={styles.section} />
      <About className={styles.section} />
      <Skills className={styles.section} />
      <Projects className={styles.section} />
      <Contact className={styles.section} />
      <Footer />
    </div>
  );
}

export default App;
