import { useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
    useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname);
    
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
