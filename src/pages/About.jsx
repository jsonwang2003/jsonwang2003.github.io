import './About.css'

function About() {
  return (
    <div className="page-content">
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Hi, I'm a passionate developer</h3>
              <p>
                I specialize in creating modern, responsive websites and applications 
                using the latest technologies. With a focus on user experience and 
                clean code, I bring ideas to life through innovative web solutions.
              </p>
              <p>
                My journey in web development started several years ago, and I've been 
                continuously learning and adapting to new technologies. I believe in 
                writing clean, maintainable code and creating user experiences that 
                are both beautiful and functional.
              </p>
              <div className="skills">
                <span className="skill">React</span>
                <span className="skill">JavaScript</span>
                <span className="skill">TypeScript</span>
                <span className="skill">CSS3</span>
                <span className="skill">Node.js</span>
                <span className="skill">Vite</span>
                <span className="skill">Git</span>
                <span className="skill">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
