export const CaseStudies = () => (
  <section id="work" className="case-studies" style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '80px' }}>
    <h2 className="section-title serif-italic" style={{ fontSize: 'clamp(60px, 6vw, 100px)', marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
      Featured Project
    </h2>

    <a href="https://task-verse.netlify.app/" target="_blank" rel="noreferrer" className="showcase-card">
      <div className="showcase-header">
        <div className="showcase-title-row">
          <h3 className="showcase-title">TaskVerse</h3>
          <iconify-icon icon="ph:arrow-right" className="showcase-arrow"></iconify-icon>
        </div>
        <div className="showcase-description">
          <span className="showcase-highlight">Freelance Recruitment Platform —</span> Engineered to solve the technical hiring gap, efficiently connecting top-tier freelance developers with rapidly growing startups.
        </div>
      </div>
      <div className="showcase-image-wrapper">
        <img 
          src="/taskverse_mockup.png" 
          alt="TaskVerse Interface" 
          className="showcase-image"
        />
      </div>
    </a>
  </section>
);
