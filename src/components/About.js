import aboutImg from "../assets/About.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <span className="about-tag">ABOUT ME</span>

        <h2>
          Hi, I'm <span>Pritish Dubey</span>
        </h2>

        <h3>Frontend Developer | React Enthusiast</h3>

        <p>
          I'm a passionate Frontend Developer with hands-on experience building
          responsive and user-friendly web applications using React, JavaScript,
          HTML and CSS.
        </p>

        <p>
          I enjoy turning ideas into real-world products with clean UI, smooth
          user experience and modern frontend technologies. I'm continuously
          learning and improving my skills every day.
        </p>

        <div className="tech-stack">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Git</span>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h4>2+</h4>
            <span>Projects</span>
          </div>

          <div className="info-card">
            <h4>6+</h4>
            <span>Technologies</span>
          </div>

          <div className="info-card">
            <h4>100%</h4>
            <span>Dedication</span>
          </div>
        </div>
      </div>

      <div className="about-right">
        <img src={aboutImg} alt="Pritish Dubey" />
      </div>
    </section>
  );
}

export default About;
