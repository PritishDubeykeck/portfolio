import samacharImg from "../assets/Samachar.png";
import textEditorImg from "../assets/TextEditor.png";
function Projects() {
    return (
      <section className="projects" id="projects">
        <h2>Projects</h2>
  
        <div className="projects-container">
  
          <div className="project-card">
          <img
            src={textEditorImg}
            alt="Text Editor"
            className="project-image"
            />
            <h3>Text Editor</h3>
  
            <p>
              A web-based text editor with text formatting,
              content editing, and file management features designed for a smooth user experience.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>CSS</span>
        </div>
  
            <div className="project-buttons">
              <button>Live Demo</button>
              <a href="https://github.com/PritishDubeykeck/my-app"
              target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
  
          <div className="project-card">
          <img
            src={samacharImg}
            alt="Samachar Website"
            className="project-image"
        />
            <h3>Samachar Website</h3>
  
            <p>
              A responsive news application that fetches
              real-time headlines using News API and presents them in a clean user-friendly interface.
            </p>
            <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>CSS</span>
        </div>

  
            <div className="project-buttons">
              <button>Live Demo</button>
              <a href="https://github.com/PritishDubeykeck/my-app"
              target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
  
          <div className="project-card">
            <h3>More Projects Coming Soon</h3>
  
            <p>
              Continuously building new projects and exploring modern web technologies to expand my development skills.
            </p>
  
            <div className="project-buttons">
              <button>In Progress</button>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Projects;