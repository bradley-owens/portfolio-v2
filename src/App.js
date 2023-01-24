import Navigation from "./components/UI/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
