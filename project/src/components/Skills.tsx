import React, { useState } from 'react';
import { Code, Database, Wrench, Award, Users } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: <Award className="w-4 h-4" /> },
    { id: 'languages', label: 'Languages', icon: <Code className="w-4 h-4" /> },
    { id: 'web', label: 'Web Development', icon: <Code className="w-4 h-4" /> },
    {
      id: 'database',
      label: 'Database',
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: 'tools',
      label: 'Tools & Others',
      icon: <Wrench className="w-4 h-4" />,
    },
    { id: 'soft', label: 'Soft Skills', icon: <Users className="w-4 h-4" /> },
  ];

  const skills = [
    { name: 'C', category: 'languages' },
    { name: 'C++', category: 'languages' },
    { name: 'Java', category: 'languages' },
    { name: 'Python', category: 'languages' },
    { name: 'HTML', category: 'web' },
    { name: 'CSS', category: 'web' },
    { name: 'JavaScript', category: 'web' },
    { name: 'React', category: 'web' },
    { name: 'Node.js', category: 'web' },
    { name: 'Express.js', category: 'web' },
    { name: 'MongoDB', category: 'web' },
    { name: 'SQL', category: 'database' },
    { name: 'Tableau', category: 'tools' },
    { name: 'Git', category: 'tools' },
    { name: 'REST APIs', category: 'tools' },
    { name: 'Communication Skills', category: 'soft' },
    { name: 'Problem Solving', category: 'soft' },
    { name: 'Leadership', category: 'soft' },
    { name: 'Teamwork', category: 'soft' },
    { name: 'Time Management', category: 'soft' },
  ];

  const categoryColors = {
    languages: 'text-green-400 border-green-400 hover:bg-green-500/10',
    web: 'text-blue-400 border-blue-400 hover:bg-blue-500/10',
    database: 'text-yellow-400 border-yellow-400 hover:bg-yellow-500/10',
    tools: 'text-purple-400 border-purple-400 hover:bg-purple-500/10',
    soft: 'text-pink-400 border-pink-400 hover:bg-pink-500/10',
  };

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const codingProfiles = [
    { name: 'HackerRank', url: 'https://www.hackerrank.com/abdulnafisa' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/nafisa1201/' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/nafisa1201' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/nafisaab' },
    {
      name: 'SmartInterviews',
      url: 'https://smartinterviews.in/profile/22501a1201',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
              Technologies and tools I'm proficient in and use to build amazing
              experiences
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold font-mono transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => {
              const categoryColor =
                categoryColors[skill.category] ||
                'text-white border-white hover:bg-white/10';
              return (
                <div
                  key={skill.name}
                  className={`border rounded-xl p-6 backdrop-blur-sm bg-white/5 font-mono group transition-all duration-300 ${categoryColor}`}
                >
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-lg font-semibold group-hover:scale-105 transition-transform">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-green-400 mb-2 font-mono">
                6+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-mono">
                Programming Languages
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-blue-400 mb-2 font-mono">
                8+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-mono">
                Web Technologies
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-yellow-400 mb-2 font-mono">
                4+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-mono">
                Databases & Tools
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-purple-400 mb-2 font-mono">
                4+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-mono">
                Soft Skills
              </div>
            </div>
          </div>

          {/* Coding Profiles Section */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white font-mono mb-6">
              Coding Profiles
            </h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {codingProfiles.map((profile) => (
                <li
                  key={profile.name}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl px-5 py-3 shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  <Code className="w-5 h-5" />
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold hover:underline"
                  >
                    {profile.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
