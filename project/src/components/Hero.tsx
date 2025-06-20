import React, { useState, useEffect } from 'react';
import { ChevronDown, Eye, Terminal } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const fullText = 'Abdul Nafisa Sulthana';

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-cyan-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="hexagon-grid"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Avatar with Pulse Ring */}
            <div className="mb-8 relative">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 animate-pulse"></div>
                    <img
                      src="https://ik.imagekit.io/wul2d7omz/MBR_3841%20copy(1).jpg?updatedAt=1750150607771"
                      alt="Profile"
                      className="relative z-10 w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Ping Particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
                    style={{
                      top: `${20 + Math.sin((i * Math.PI) / 4) * 40}%`,
                      left: `${50 + Math.cos((i * Math.PI) / 4) * 40}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mb-6">
              <p className="text-cyan-400 uppercase tracking-wider text-sm mb-4 font-mono animate-fade-in-up">
                <Terminal className="inline w-4 h-4 mr-2" />
                Full Stack Developer • ML Explorer • Tech Enthusiast
              </p>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                <span className="text-white font-mono">
                  {text}
                  <span
                    className={`text-cyan-400 ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    |
                  </span>
                </span>
              </h1>

              <div className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 font-mono">
                <span className="text-cyan-400">&gt;</span> Passionate 4th-year
                B.Tech IT student crafting innovative digital solutions through{' '}
                <span className="text-purple-400 neon-glow">MERN stack</span>{' '}
                development and{' '}
                <span className="text-cyan-400 neon-glow">
                  Artificial Intelligence-Machine Learning
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
              {/* VIEW PROJECTS.EXE Button */}
              <button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="relative overflow-hidden px-6 py-2 font-mono text-cyan-300 border border-cyan-500 rounded group hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.6)] transition-shadow"
              >
                <span className="relative z-10">VIEW PROJECTS.EXE</span>
                <div className="absolute inset-0 bg-cyan-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              </button>

              {/* VIEW RESUME.EXE Button */}
              <button
                onClick={() => setShowResume(true)}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-none font-mono uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 cyber-button relative overflow-hidden group"
              >
                <Eye size={18} className="inline mr-2" />
                <span className="relative z-10">VIEW RESUME.EXE</span>
                <div className="absolute inset-0 bg-cyan-400 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-800">
              {[
                {
                  value: '8.88',
                  label: 'CGPA_SCORE',
                  color: 'text-purple-400',
                },
                {
                  value: '4+',
                  label: 'PROJECTS_BUILT',
                  color: 'text-cyan-400',
                },
                { value: '2', label: 'FIELD_TESTS', color: 'text-green-400' },
                {
                  value: '6+',
                  label: 'BADGES_EARNED',
                  color: 'text-yellow-400',
                },
              ].map((stat, index) => (
                <div key={index} className="text-center cyber-stat-card">
                  <div
                    className={`text-2xl font-bold font-mono ${stat.color} neon-glow`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} className="neon-glow" />
        </button>
      </section>

      {/* Resume Modal */}
      {showResume && (
        <div
          tabIndex={-1}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowResume(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowResume(false)}
              className="float-right m-2 px-3 py-1 bg-red-600 text-white rounded"
              aria-label="Close Resume"
            >
              Close
            </button>
            <iframe
              src="https://drive.google.com/file/d/1q12VOHXz9jaBt20Wv_tv0v6FFbwEG-Rv/preview"
              title="Resume"
              className="w-full h-[80vh]"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
