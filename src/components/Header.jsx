export const Header = () => (
  <header>
    <div className="logo-container">
      <div className="logo-text">ISHAN KARKI</div>
      <div className="logo-bar"></div>
    </div>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>View Resume</a>
  </header>
);
