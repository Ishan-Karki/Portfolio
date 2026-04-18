import { GlobePulse } from './ui/GlobePulse';

export const Hero = () => (
  <section className="hero" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
    <div className="hero-content" style={{ flex: '1', zIndex: 2 }}>
      <span className="location-tag">Kathmandu University • Computer Science Student</span>
      <h1 className="hero-title serif-italic" style={{ fontSize: 'clamp(60px, 7vw, 100px)' }}>
        DESIGN • DEVELOP • AUTOMATE
      </h1>
      <p className="sans-body" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', marginBottom: '48px', fontSize: '18px', letterSpacing: '0.05em', lineHeight: '1.6' }}>
        CS Undergrad @ KU<br />
        Focused on Python, AI, and Scalable Logic
      </p>
    </div>
    <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, paddingLeft: '40px' }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <GlobePulse />
      </div>
    </div>
  </section>
);
