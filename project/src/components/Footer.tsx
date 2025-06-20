import React from 'react';
import { Heart, ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back to Top Button */}
          <div className="text-center mb-8">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Footer Content */}
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4 font-mono">
              ABDUL NAFISA SULTHANA
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto font-mono">
              Full Stack Developer passionate about creating innovative digital
              solutions and building the future through technology.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://github.com/AbdulNafisa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-nafisa-sulthana-67b881278/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-mono">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>using React & Tailwind CSS</span>
            </div>

            <div className="mt-4 text-gray-500 text-sm font-mono">
              © 2025 Abdul Nafisa Sulthana. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
