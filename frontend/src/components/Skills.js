import React from 'react';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Keahlian"
          subtitle="Kompetensi yang dikembangkan untuk pembelajaran efektif"
        />
        
        <div className="mt-12 space-y-8">
          {profileData.skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-cream-50 rounded-xl p-6 md:p-8 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-300 hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700 transition-all hover:scale-105"
                  >
                    {skill}
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

export default Skills;
