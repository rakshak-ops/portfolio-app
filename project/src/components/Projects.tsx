import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRole, setSelectedRole] = useState<string>('All');

  // Get unique categories and roles
  const allCategories = ['All', ...new Set(projects.flatMap(p => p.categories))];
  const allRoles = ['All']; // You can extend this based on your needs

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.categories.includes(selectedCategory);
    return categoryMatch;
  });

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'genai':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'nlp':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'deep learning':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
      case 'computer vision':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'machine learning':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'fraud detection':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'e-commerce':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'pricing':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'competition':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'agriculture':
        return 'bg-green-600/20 text-green-500 border-green-600/30';
      case 'healthcare':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'data science':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'finance':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'mlops':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'cloud':
        return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'retail':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'adtech':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'real-time':
        return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'analytics':
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
      case 'marketing':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of data science and machine learning projects showcasing expertise in fraud detection, financial analytics, and MLOps pipelines
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            >
              {allCategories.map(category => (
                <option key={category} value={category}>
                  Filter by Industry: {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            >
              {allRoles.map(role => (
                <option key={role} value={role}>
                  Filter by Role: {role}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs rounded border ${getCategoryColor(category)}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;