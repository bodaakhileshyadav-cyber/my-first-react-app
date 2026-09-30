 import "./App.css";

function App() {
  return (
    <div className="website">
      <header className="navbar">
        <div className="logo">Akhilesh</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="small-title">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Akhilesh</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p>
              I am learning React and building modern, responsive and
              user-friendly web applications.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="primary-button">
                Contact Me
              </a>

              <a href="#projects" className="secondary-button">
                View Projects
              </a>
            </div>
          </div>

          <div className="hero-icon">👨‍💻</div>
        </section>

        <section className="about" id="about">
          <h2>About Me</h2>

          <p>
            I am a beginner frontend developer focused on learning React,
            JavaScript, HTML and CSS. I enjoy creating clean and responsive
            websites.
          </p>
        </section>

        <section className="skills" id="skills">
          <h2>My Skills</h2>

          <div className="skill-list">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
          </div>
        </section>

        <section className="projects" id="projects">
          <h2>My Projects</h2>

          <div className="project-list">
            <div className="project-card">
              <div className="project-icon">🌐</div>

              <h3>Portfolio Website</h3>

              <p>
                A responsive personal portfolio website built using React
                and CSS.
              </p>

              <button>View Project</button>
            </div>

            <div className="project-card">
              <div className="project-icon">✅</div>

              <h3>Todo Application</h3>

              <p>
                A simple task management application for adding and
                managing daily tasks.
              </p>

              <button>View Project</button>
            </div>

            <div className="project-card">
              <div className="project-icon">💻</div>

              <h3>React Application</h3>

              <p>
                A modern React application created to practice components,
                state and user interactions.
              </p>

              <button>View Project</button>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Let's Work Together</h2>

          <p>
            I'm currently learning and building projects with React.
          </p>

          <a
            href="mailto:bodaakhileshyadav@gmail.com"
            className="contact-button"
          >
            Contact Me
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Akhilesh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;