import React from 'react';
import { Download, TrendingUp, Settings, Bot, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // You can replace this with actual resume download logic
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const areasOfInterest = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Machine Learning",
      description: "Fraud Detection, Predictive Modeling, Statistical Learning"
    },
    {
      icon: <Settings className="w-8 h-8 text-teal-400" />,
      title: "MLOps",
      description: "CI/CD Pipelines, Model Monitoring, AWS Deployment"
    },
    {
      icon: <Bot className="w-8 h-8 text-orange-400" />,
      title: "Financial Analytics",
      description: "Pricing Analytics, Sales Forecasting, Risk Assessment"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Generative AI & LLMs",
      description: "RAG Systems, Fine-tuning, Model Quantization"
    }
  ];

  return (
    <section id="home" className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-400 mb-2">
            {personalInfo.education}
          </p>
        </div>

        {/* Bio */}
        <div className="mb-8 max-w-3xl mx-auto">
          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-300 leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="mb-16">
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </button>
        </div>

        {/* Areas of Interest */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">Areas of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areasOfInterest.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;