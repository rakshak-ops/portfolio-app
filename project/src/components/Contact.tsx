import React from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'text-blue-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Phone',
      value: contactInfo.phone || '',
      href: `tel:${contactInfo.phone}`,
      color: 'text-green-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: contactInfo.location,
      color: 'text-green-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: contactInfo.linkedin,
      color: 'text-blue-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'View my code',
      href: contactInfo.github,
      color: 'text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always interested in discussing data science opportunities, machine learning projects, or collaborations in financial analytics and fraud detection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start">
                <div className={`${method.color} mr-4 mt-1`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {method.label}
                  </h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${method.color} hover:underline flex items-center group`}
                    >
                      {method.value}
                      <ExternalLink 
                        size={16} 
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                    </a>
                  ) : (
                    <span className="text-gray-300">{method.value}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Looking for my resume? You can download it from the home section or view my latest projects on GitHub. Open to full-time opportunities starting April 2025.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;