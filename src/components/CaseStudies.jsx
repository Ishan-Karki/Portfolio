export const CaseStudies = () => (
  <section id="work" className="case-studies" style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '80px' }}>
    <h2 className="section-title serif-italic" style={{ fontSize: 'clamp(60px, 6vw, 100px)', marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
      Featured Project
    </h2>

    <article 
      className="project-card" 
      style={{
        backgroundColor: '#111', 
        borderRadius: '32px', 
        padding: '32px',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        display: 'block'
      }}
    >
      <div style={{ width: '100%', height: '500px', overflow: 'hidden', borderRadius: '24px', marginBottom: '40px', position: 'relative' }}>
        <img 
          src="/taskverse_mockup.png" 
          alt="TaskVerse Interface" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 16px' }}>
        <div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
             <h3 className="sans-body" style={{ margin: 0, fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em' }}>TaskVerse</h3>
             <span style={{ backgroundColor: 'rgba(199, 255, 159, 0.1)', color: '#c7ff9f', padding: '6px 16px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', borderRadius: '999px' }}>Recruitment Platform</span>
           </div>
           
           <p className="sans-body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', fontSize: '18px', lineHeight: '1.6', marginBottom: '0' }}>
             A specialized recruitment marketplace engineered to solve the technical hiring gap, efficiently connecting top-tier freelance developers with rapidly growing startups.
           </p>
        </div>
        
        <a href="https://task-verse.netlify.app/" target="_blank" rel="noreferrer" style={{ 
          display: 'inline-flex', padding: '16px 24px', backgroundColor: '#fff', color: '#000', 
          borderRadius: '999px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', 
          letterSpacing: '0.1em', textDecoration: 'none', alignItems: 'center', gap: '8px',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#c7ff9f';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          Open Application <iconify-icon icon="ph:arrow-up-right-bold" style={{ fontSize: '18px' }}></iconify-icon>
        </a>
      </div>
    </article>
  </section>
);
