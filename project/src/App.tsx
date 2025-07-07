import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;