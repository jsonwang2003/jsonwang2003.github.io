import './About.css'

function About() {
  return (
    <div className="page-content">
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Hi, I'm a Computer Science Student</h3>
              <p>
                I'm currently pursuing my degree in Computer Science with a strong passion for 
                robotics and emerging technologies. I love exploring how software and hardware 
                come together to create innovative solutions that can make a real impact.
              </p>
              <p>
                My academic journey has given me a solid foundation in programming, algorithms, 
                and system design. Beyond coursework, I'm particularly fascinated by robotics, 
                AI, and automation - areas where I see endless possibilities for innovation 
                and problem-solving.
              </p>
              <div className="skills">
                <span className="skill">Python</span>
                <span className="skill">Java</span>
                <span className="skill">C++</span>
                <span className="skill">JavaScript</span>
                <span className="skill">React</span>
                <span className="skill">Robotics</span>
                <span className="skill">Machine Learning</span>
                <span className="skill">Algorithms</span>
                <span className="skill">Data Structures</span>
                <span className="skill">Git</span>
                <span className="skill">Arduino</span>
                <span className="skill">ROS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
