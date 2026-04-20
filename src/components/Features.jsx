export const Features = () => (
  <section id="about" className="about-section" style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }}>
    <h2 className="section-title serif-italic" style={{ fontSize: 'clamp(60px, 6vw, 100px)', marginBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
      About Me
    </h2>

    <div className="about-content">
      <h2 style={{ fontSize: '32px', fontWeight: '500', marginBottom: '32px', letterSpacing: '-0.02em', fontFamily: 'var(--font-sans)', color: '#fff' }}>
        Making AI Happen.
      </h2>
      
      <p style={{ fontSize: '20px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '32px', fontFamily: 'var(--font-sans)' }}>
        As a Kathmandu University undergraduate, I am focused on the endless possibilities of <span style={{color: '#c7ff9f', fontWeight: 'bold'}}>Artificial Intelligence</span>. I specialize in building automated systems and AI-powered services, transforming complex challenges into streamlined, intelligent solutions.
      </p>

      <p style={{ fontSize: '20px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '32px', fontFamily: 'var(--font-sans)' }}>
        I value precision, craftsmanship, and the power of <span style={{color: '#c7ff9f', fontWeight: 'bold'}}>automation</span> to redefine the digital landscape.
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', backgroundColor: '#111', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div>
          <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>AI Essentials Certified</h4>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: 0 }}>Committed to implementing rapidly evolving tech.</p>
        </div>
        <a href="https://freeacademy.ai/verify/CA-2026-AE-YVY5GH" target="_blank" rel="noreferrer" style={{ color: '#c7ff9f', fontSize: '12px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.1em', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Verify <iconify-icon icon="ph:arrow-right-bold"></iconify-icon>
        </a>
      </div>
    </div>
  </section>
);
