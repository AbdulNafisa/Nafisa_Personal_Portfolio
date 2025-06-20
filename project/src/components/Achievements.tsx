import React from 'react';
import { Trophy, Star, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Silver Certificate in DSA',
      organization: 'Smart Interviews',
      description:
        'Secured a position within the top 5,000 out of 42,466 global participants.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      stats: 'Top 12%',
    },
    {
      title: '5-star badge in Problem Solving',
      organization: 'HackerRank',
      description:
        'Earned a 5-star badge in Problem Solving – strong algorithmic thinking.',
      icon: <Star className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      stats: '5 Stars',
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
              Recognition of technical excellence and performance
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color}`}
                  >
                    <div className="text-white">{achievement.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors font-mono">
                      {achievement.title}
                    </h4>
                    <p className="text-purple-400 text-sm font-medium font-mono">
                      {achievement.organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full font-mono">
                      {achievement.stats}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-mono">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2 font-mono">
                Top 12%
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-mono">
                DSA Ranking
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <Star className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2 font-mono">
                5 Stars
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-mono">
                HackerRank
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-2 font-mono">
                2
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-mono">
                Achievements
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
