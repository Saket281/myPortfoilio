import styles from "./App.module.css";
import About from "./componets/About/About";
import Navbar from "./componets/Navbar/Navbar";
import Project from "./componets/Project/Project";

import Skills from "./componets/Skills/Skills";
import Contact from "./componets/contact/Contact";
import Hero from "./componets/hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
