import React from 'react';
import { GraduationCap, Code, Brain, Zap, Database, Cpu } from 'lucide-react';

const About = () => {
  const educationData = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'PVPSIT, Vijayawada',
      period: '2022 - Present',
      grade: 'CGPA: 8.88',
      status: 'Current',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      period: '2020 - 2022',
      grade: '95%',
      status: 'Completed',
      color: 'from-purple-400 to-pink-500',
    },
    {
      degree: 'Secondary Education (SSC)',
      institution: 'Ravindra Bharathi Public School',
      period: '2019 - 2020',
      grade: '10/10 GPA',
      status: 'Completed',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const focusAreas = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description:
        'Building scalable web applications with modern technologies like MERN stack, creating seamless user experiences from frontend to backend.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description:
        'Exploring AI and ML algorithms to solve real-world problems, with hands-on experience in data analysis and predictive modeling.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Continuous Learning',
      description:
        'Always staying updated with latest technologies and best practices through certifications, internships, and personal projects.',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Cyberpunk Section Header */}
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-mono text-sm mb-4 animate-fade-in-up">
              <Database className="inline w-4 h-4 mr-2" />
              PROFILE_DATA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono glitch-text">
              ABOUT_ME.EXE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 neon-glow"></div>
          </div>

          {/* Bio Section with Cyberpunk Styling */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <div className="cyber-terminal p-8 bg-black/50 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
              <div className="text-cyan-400 font-mono text-sm mb-4">
                <Cpu className="inline w-4 h-4 mr-2" />
                NEURAL_PROFILE_LOADING...
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-mono">
                <span className="text-cyan-400">&gt;</span> I'm a passionate
                4th-year B.Tech IT student from PVPSIT, Vijayawada, with
                hands-on experience in full-stack development using the{' '}
                <span className="text-purple-400 neon-glow">MERN stack</span>.
                My journey in technology is driven by curiosity and a desire to
                create meaningful digital solutions that make a difference.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-mono">
                <span className="text-cyan-400">&gt;</span> With a strong
                foundation in programming languages like{' '}
                <span className="text-green-400">C</span>,{' '}
                <span className="text-orange-400">Java</span>, and{' '}
                <span className="text-blue-400">Python</span>, I've successfully
                completed internships at{' '}
                <span className="text-purple-400 neon-glow">
                  Infosys Springboard
                </span>{' '}
                and{' '}
                <span className="text-cyan-400 neon-glow">
                  Google Cloud + Eduskills
                </span>
                , working on diverse projects from grievance handling systems to
                generative AI applications.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-mono">
                <span className="text-cyan-400">&gt;</span> I'm actively seeking
                opportunities to collaborate on challenging projects that push
                the boundaries of web development, AI integration, and user
                experience design. My goal is to become a skilled
                <span className="text-yellow-400 neon-glow">
                  {' '}
                  Software Developer
                </span>{' '}
                in a reputed organization where I can contribute to innovative
                solutions.
              </p>
            </div>
          </div>

          {/* Focus Areas with Cyberpunk Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8 font-mono">
              <span className="text-cyan-400">//</span> CORE_SYSTEMS
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="cyber-card bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${area.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {area.icon}
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-3 font-mono">
                    {area.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-mono text-sm">
                    {area.description}
                  </p>

                  {/* Cyberpunk Corner Accents */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline with Cyberpunk Design */}
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8 font-mono">
              <span className="text-cyan-400">//</span> EDUCATION_LOG
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="cyber-card bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                        <h4 className="text-xl font-semibold text-white font-mono">
                          {edu.degree}
                        </h4>
                        {edu.status === 'Current' && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30 font-mono animate-pulse">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-1 font-mono">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-sm font-mono">
                        {edu.period}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div
                        className={`text-2xl font-bold font-mono bg-gradient-to-r ${edu.color} bg-clip-text text-transparent neon-glow`}
                      >
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  {/* Cyberpunk Corner Accents */}
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
