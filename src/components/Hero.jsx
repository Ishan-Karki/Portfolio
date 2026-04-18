export const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <span className="location-tag">Kathmandu University • Computer Science Student</span>
      <h1 className="hero-title serif-italic" style={{ fontSize: 'clamp(60px, 7vw, 100px)' }}>
        Driven by technical excellence. Mastering the paradigms of <span className="accent">Artificial Intelligence.</span>
      </h1>
      <p className="sans-body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', marginBottom: '48px', fontSize: '18px', letterSpacing: '0.05em', lineHeight: '1.6' }}>
        CS Undergrad @ KU<br />
        Focused on Python, AI, and Scalable Logic
      </p>
      <div className="hero-buttons">
        <a href="#work" className="btn btn-primary">View Work</a>
        <a href="#contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  </section>
);
