export default function About() {
  return (
    <section className="about">
      <h2 className="section-title">ABOUT ME</h2>
      <p className="about-text">
        A simple personal portfolio to highlight my skills, projects, and
        services. Clean black & white theme with a minimal approach.
      </p>
      <p className="about-text">
        Im very interested on AI and making my Own designs.
      </p>

      {/* Services */}
      <div className="services">
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>DESIGN</h3>
          <p>UI/UX & Web Layouts</p>
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>DEVELOPMENT</h3>
          <p>React, Node.js</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🛠</div>
          <h3>MAINTENANCE</h3>
          <p>Long-term support</p>
        </div>
      </div>

      {/* Skills */}
    <h2 className="section-title">SKILLS</h2>
    <div className="skills">
    <div className="skill-box">
        <span className="skill-icon">⚡</span>
        <span>HTML</span>
    </div>
    <div className="skill-box">
        <span className="skill-icon">🎨</span>
        <span>CSS</span>
    </div>
    <div className="skill-box">
        <span className="skill-icon">✨</span>
        <span>JS</span>
    </div>
    <div className="skill-box">
        <span className="skill-icon">⚛</span>
        <span>React</span>
    </div>
    <div className="skill-box">
        <span className="skill-icon">🌐</span>
        <span>Node</span>
    </div>
    <div className="skill-box">
        <span className="skill-icon">📐</span>
        <span>Figma</span>
    </div>
    </div>

    </section>
  );
}