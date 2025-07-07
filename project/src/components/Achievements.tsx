import React from 'react';
import { Trophy, Calendar, ExternalLink, Award, Users } from 'lucide-react';
import { achievements } from '../data/portfolio';

const Achievements: React.FC = () => {
  const getAwardIcon = (award: string) => {
    if (award.toLowerCase().includes('1st') || award.toLowerCase().includes('winner')) {
      return <Trophy className="w-6 h-6 text-yellow-400" />;
    }
    return <Award className="w-6 h-6 text-blue-400" />;
  };

  const getAwardColor = (award: string) => {
    if (award.toLowerCase().includes('1st') || award.toLowerCase().includes('winner')) {
      return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
    }
    return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
  };

  return (
    <section id="achievements" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and awards in data science competitions and hackathons
          </p>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center mb-3">
                    {getAwardIcon(achievement.award || '')}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {achievement.title}
                    </h3>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-blue-400 font-medium">
                      {achievement.organization}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-400 text-sm">
                      {achievement.date}
                    </span>
                  </div>

                  {achievement.award && (
                    <div className="mb-4">
                      <span className={`
                        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border
                        ${getAwardColor(achievement.award)}
                      `}>
                        {getAwardIcon(achievement.award)}
                        <span className="ml-2">{achievement.award}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {achievement.technologies && (
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Actively participating in data science competitions and hackathons to solve real-world challenges and stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;