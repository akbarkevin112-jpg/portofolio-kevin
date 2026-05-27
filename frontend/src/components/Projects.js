import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Proyek & Program"
          subtitle="Inisiatif dan kontribusi dalam pendidikan"
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {profileData.projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all border border-gray-200 hover:border-gold-400"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {project.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gold-600 transition-colors" />
              </div>
              
              <p className="text-gray-700 mb-6">
                {project.description}
              </p>
              
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
