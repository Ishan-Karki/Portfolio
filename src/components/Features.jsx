export const Features = () => (
  <section id="about" className="features-section">
    <div className="features-grid">
      <div className="feature-card">
        <iconify-icon icon="ph:code-bold" class="feature-icon"></iconify-icon>
        <h3 className="feature-title sans-body">Technical Stack</h3>
        <p className="feature-text">
          Proficient in <span style={{color: '#c7ff9f'}}>Python</span> and <span style={{color: '#c7ff9f'}}>JavaScript</span> for logic and architecture, paired with <span style={{color: '#c7ff9f'}}>HTML/CSS</span> for constructing rigorous, precise digital interfaces.
        </p>
      </div>
      <div className="feature-card">
        <iconify-icon icon="ph:student-bold" class="feature-icon"></iconify-icon>
        <h3 className="feature-title sans-body">Academic Pursuit</h3>
        <p className="feature-text">
          Currently pursuing my Undergraduate degree in Computer Science at Kathmandu University with a strict focus on algorithm design and modern software engineering paradigms.
        </p>
      </div>
      <div className="feature-card">
        <iconify-icon icon="ph:certificate-bold" class="feature-icon"></iconify-icon>
        <h3 className="feature-title sans-body">AI Certification</h3>
        <p className="feature-text" style={{ marginBottom: '16px' }}>
          Certified in AI Essentials. Committed to deeply understanding and implementing the rapidly evolving technologies powering Artificial Intelligence.
        </p>
        <a href="https://freeacademy.ai/verify/CA-2026-AE-YVY5GH" target="_blank" rel="noreferrer" style={{ color: '#c7ff9f', fontSize: '14px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.1em', fontWeight: 'bold' }}>
          Verify Credential →
        </a>
      </div>
    </div>
  </section>
);
