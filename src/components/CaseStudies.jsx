export const CaseStudies = () => (
  <section id="work" className="case-studies" style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '80px' }}>
    <h2 className="section-title serif-italic" style={{ fontSize: 'clamp(60px, 6vw, 100px)', marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
      Featured Project
    </h2>

    <article className="case-study">
      <div className="text-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <h2 className="case-title serif-italic" style={{ margin: 0 }}>TaskVerse</h2>
          <span style={{ backgroundColor: 'rgba(199, 255, 159, 0.1)', color: '#c7ff9f', padding: '4px 12px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Live</span>
        </div>
        <p className="feature-text" style={{ marginBottom: '48px', maxWidth: '800px', fontSize: '20px' }}>
          A specialized recruitment marketplace engineered to solve the technical hiring gap. 
          TaskVerse acts as the vital bridge that seamlessly connects freelance developers with rapidly growing startups, optimizing the distribution of technical talent.
        </p>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value serif-italic">Platform</div>
            <div className="metric-label">Recruitment Marketplace</div>
          </div>
          <div className="metric-card">
            <div className="metric-value serif-italic">Tech</div>
            <div className="metric-label">React ecosystem</div>
          </div>
        </div>
        <a href="https://task-verse.netlify.app/" target="_blank" rel="noreferrer" className="view-link">
          Open Application
          <span className="arrow">→</span>
        </a>
      </div>
    </article>

  </section>
);
