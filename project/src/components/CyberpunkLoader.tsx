import React, { useState, useEffect } from 'react';

const CyberpunkLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-mono text-cyan-400 mb-8 glitch-text">
          BOOTING PORTFOLIO.EXE
        </div>

        <div className="w-[28rem] h-2 bg-gray-800 rounded-full overflow-hidden mb-4 mx-auto">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 neon-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-cyan-400 font-mono text-sm">
          {Math.floor(progress)}% COMPLETE
        </div>

        <div className="mt-8 text-xs text-gray-500 font-mono">
          INITIALIZING NEURAL NETWORKS...
        </div>
      </div>
    </div>
  );
};

export default CyberpunkLoader;
