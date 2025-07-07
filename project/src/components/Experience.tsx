import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            3+ years of experience building scalable ML pipelines and predictive models, delivering measurable business impact across finance and e-commerce
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1 mb-4 lg:mb-0">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <span className="text-blue-400 font-medium">
                      {exp.company}
                    </span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm">{exp.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;