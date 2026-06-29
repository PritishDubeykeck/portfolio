import { VscVscode } from "react-icons/vsc";
import { SiCanva } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      {/* Skills Left Section */}

      <div className="skills-left">

        <h3>Technologies I Work With</h3>

        <p>
          I build modern, responsive and user-friendly web applications using
          React, JavaScript, HTML and CSS. I focus on clean code, performance
          and intuitive user experiences.
        </p>

        <div className="skill-icons">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaGitAlt />
          <FaGithub />
          <VscVscode />
          <SiCanva />
        </div>
      </div>

{/* Skills Right Section */}

      <div className="skills-right">
        <div className="progress-item">
          <span>HTML</span>
          <div className="progress">
            <div className="progress-fill html"></div>
          </div>
        </div>

        <div className="progress-item">
          <span>CSS</span>
          <div className="progress">
            <div className="progress-fill css"></div>
          </div>
        </div>

        <div className="progress-item">
          <span>JavaScript</span>
          <div className="progress">
            <div className="progress-fill js"></div>
          </div>
        </div>

        <div className="progress-item">
          <span>React</span>
          <div className="progress">
            <div className="progress-fill react"></div>
          </div>
        </div>

        <div className="progress-item">
          <span>Git & GitHub</span>
          <div className="progress">
            <div className="progress-fill git"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
