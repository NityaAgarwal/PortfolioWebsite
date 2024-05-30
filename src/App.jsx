import styles from "./App.module.css";

import { Navbar } from "./components/navbar/navbar.jsx";
import { Hero } from "./components/hero/hero.jsx";
import { Experience } from "./components/experience/experience.jsx";
import { About } from "./components/about/about.jsx";
import { Contact } from "./components/contact/contact.jsx";
function App() {
  return (
    <div className={styles.App}> 
    
      <Navbar />
      <Hero/>
      <About />
      <Experience />
      <Contact />
      
    </div>
  );
}

export default App;
