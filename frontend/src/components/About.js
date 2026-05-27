import React from 'react';
import { GraduationCap, BookOpen, History, Cpu, Users } from 'lucide-react';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const iconMap = {
  'Pendidikan': GraduationCap,
  'Literasi': BookOpen,
  'Sejarah': History,
  'Teknologi': Cpu,
  'Pembinaan Siswa': Users
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Tentang Saya"
          subtitle="Membangun pembelajaran yang bermakna dan relevan"
        />
        
        <div className="mt-12 space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {profileData.about.description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {profileData.about.description2}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
            {profileData.about.highlights.map((highlight) => {
              const Icon = iconMap[highlight] || BookOpen;
              return (
                <div
                  key={highlight}
                  className="group p-6 bg-cream-50 rounded-xl text-center hover:bg-gold-50 transition-all hover:shadow-lg hover:scale-105"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-navy-700 group-hover:text-gold-600 transition-colors" />
                  <p className="text-sm font-medium text-gray-800">
                    {highlight}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
