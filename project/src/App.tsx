import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements'; // <-- Import Achievements here
import PositionsOfResponsibility from './components/PositionsOfResponsibility';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberpunkLoader from './components/CyberpunkLoader';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <CyberpunkLoader />

      {/* Cyberpunk Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20"></div>
      <div className="fixed inset-0 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="cyber-grid"></div>
      </div>
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse cyber-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      <div className="fixed inset-0 pointer-events-none">
        <div className="scan-lines"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <WorkExperience />
        <Certifications />
        <Achievements /> {/* <-- Add Achievements component here */}
        <PositionsOfResponsibility />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
