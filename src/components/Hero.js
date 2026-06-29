import profile from "../assets/Profile.png";
import { useState, useEffect } from "react";

function Hero() {
    const roles = [
        "Frontend Developer",
        "React Developer",
        "JavaScript Developer",
        "Freelancer"
      ];
      
      const [text, setText] = useState("Frontend Developer");
      const [index, setIndex] = useState(0);
      
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      
        return () => clearInterval(interval);
      }, []);
      
      useEffect(() => {
        setText(roles[index]);
      }, [index]);
                
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-image">
          <img src={profile} alt="Pritish Dubey" />
        </div>

        <div className="hero-text">
          <h1>Hi, I'm <span>Pritish Dubey</span></h1>
          <h2>{text}</h2>

          <p>
            Frontend Developer with hands-on experience building responsive and user-friendly web applications using React, JavaScript, HTML and CSS.
          </p>

          <div className="hero-buttons">
          <a href="#contact"                className="btn-primary">
            Contact Me
            </a>

            <a href="/Pritish_Resume.pdf" download>
              <button>Download Resume</button>
            </a>
          </div>
          <div className="hero-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>GitHub</span>
</div>
        </div>
        
      </div>
      
    </section>
  );
}

export default Hero;