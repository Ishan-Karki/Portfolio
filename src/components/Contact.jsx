export const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      
      <div className="contact-info">
        <h2 className="contact-title serif-italic" style={{ marginBottom: '16px', fontSize: 'clamp(80px, 8vw, 120px)', lineHeight: 1 }}>
          Initiate<br/>Sequence.
        </h2>
        <p className="sans-body" style={{ color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.15em', marginBottom: '48px' }}>
          Open for collaborations
        </p>
        
        <div className="social-links" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <a href="mailto:karkiishan6295@gmail.com" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <iconify-icon icon="ph:envelope-simple-bold" style={{ fontSize: '24px' }}></iconify-icon>
            karkiishan6295@gmail.com
          </a>
          <a href="https://github.com/Ishan-Karki" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <iconify-icon icon="ph:github-logo-bold" style={{ fontSize: '24px' }}></iconify-icon>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ishan-karki-a95549333/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <iconify-icon icon="ph:linkedin-logo-bold" style={{ fontSize: '24px' }}></iconify-icon>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/_lshan._/?hl=en" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <iconify-icon icon="ph:instagram-logo-bold" style={{ fontSize: '24px' }}></iconify-icon>
            Instagram
          </a>
        </div>
      </div>
      
      <div className="contact-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" id="name" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">Full Name</label>
          </div>
          
          <div className="form-group">
            <input type="email" id="email" className="form-input" placeholder=" " />
            <label htmlFor="email" className="form-label">Email Address</label>
          </div>
          
          <div className="form-group">
            <input type="text" id="subject" className="form-input" placeholder=" " />
            <label htmlFor="subject" className="form-label">How can I help?</label>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);
