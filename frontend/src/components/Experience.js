import React from 'react';
import { Briefcase } from 'lucide-react';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Pengalaman"
          subtitle="Perjalanan profesional dalam pendidikan dan pembelajaran"
        />
        
        <div className="mt-12 space-y-8">
          {profileData.experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-gold-500 rounded-full border-4 border-white hidden md:block"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="w-6 h-6 text-navy-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-navy-700 font-medium mt-1">
                        {exp.institution}
                      </p>
                      {exp.authority && (
                        <p className="text-sm text-gray-600 mt-1">
                          {exp.authority}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">
                {exp.description}
              </p>
              
              {exp.responsibilities && (
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
