import React from 'react';
import { 
  Code, Database, Cloud, Wrench, BarChart3, Brain, Zap,
  Server, GitBranch, Container, LineChart, Bot, Workflow,
  Activity, Layers, FileText, Cpu, Network, HardDrive,
  Settings, Monitor, Package, Shuffle
} from 'lucide-react';
import { techStack } from '../data/portfolio';

const TechStack: React.FC = () => {
  const getIcon = (name: string, category: string) => {
    const iconProps = { size: 24, className: "text-blue-400" };
    
    switch (name.toLowerCase()) {
      case 'python':
        return <Zap {...iconProps} className="text-yellow-400" />;
      case 'sql':
        return <Database {...iconProps} className="text-blue-400" />;
      case 'c++':
        return <Code {...iconProps} className="text-blue-500" />;
      case 'aws':
        return <Cloud {...iconProps} className="text-orange-400" />;
      case 'snowflake':
        return <HardDrive {...iconProps} className="text-blue-300" />;
      case 'vector db':
        return <Network {...iconProps} className="text-purple-400" />;
      case 'pyspark':
        return <Activity {...iconProps} className="text-orange-500" />;
      case 'hadoop':
        return <Layers {...iconProps} className="text-yellow-500" />;
      case 'scikit-learn':
        return <Brain {...iconProps} className="text-green-400" />;
      case 'tensorflow':
        return <Cpu {...iconProps} className="text-orange-600" />;
      case 'pytorch':
        return <Cpu {...iconProps} className="text-red-400" />;
      case 'langchain':
        return <Bot {...iconProps} className="text-green-400" />;
      case 'mlflow':
        return <Monitor {...iconProps} className="text-blue-400" />;
      case 'docker':
        return <Container {...iconProps} className="text-blue-500" />;
      case 'airflow':
        return <Workflow {...iconProps} className="text-red-500" />;
      case 'dvc':
        return <GitBranch {...iconProps} className="text-purple-500" />;
      case 'tableau':
        return <LineChart {...iconProps} className="text-blue-500" />;
      case 'kafka':
        return <Shuffle {...iconProps} className="text-gray-400" />;
      default:
        return <Package {...iconProps} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'framework':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'database':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'cloud':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'tool':
        return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'ml':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable data solutions and machine learning systems
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`
                p-4 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg
                bg-gray-800 border-gray-700 hover:border-gray-600
                flex flex-col items-center text-center group
              `}
            >
              <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                {getIcon(tech.name, tech.category)}
              </div>
              <span className="text-white font-medium text-sm mb-2">
                {tech.name}
              </span>
              <span className={`
                px-2 py-1 text-xs rounded-full border
                ${getCategoryColor(tech.category)}
              `}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;