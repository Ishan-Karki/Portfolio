import React from 'react';
import './index.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';

function App() {
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
