import React, { useEffect } from 'react';
import Lenis from 'lenis';
import './index.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CaseStudies />
      <Contact />
    </>
  )
}

export default App;
