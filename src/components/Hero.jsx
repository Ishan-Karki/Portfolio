import { GlobePulse } from './ui/GlobePulse';

export const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <span className="location-tag">Kathmandu University • Computer Science Student</span>
      <h1 className="hero-title serif-italic">
        DESIGN • DEVELOP • AUTOMATE
      </h1>
      <p className="hero-description sans-body">
        Focused on Python, AI, and Scalable Logic
      </p>
    </div>
    <div className="hero-globe-wrapper">
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <GlobePulse />
      </div>
    </div>
  </section>
);
