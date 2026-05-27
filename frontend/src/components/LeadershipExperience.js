import React from 'react';
import { Crown, Users, MessageCircle, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const categoryIcons = {
  'Kepemimpinan Sekolah': Crown,
  'Organisasi Kampus': Users,
  'Forum Organisasi': MessageCircle
};

const badgeColors = {
  'Leadership': 'bg-gold-100 text-gold-800 border-gold-300',
  'Organization': 'bg-navy-100 text-navy-800 border-navy-200',
  'Campus Activity': 'bg-green-100 text-green-800 border-green-300',
  'Public Forum': 'bg-purple-100 text-purple-800 border-purple-300'
};

const LeadershipExperience = () => {
  const experiences = profileData.leadershipExperiences;

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Pengalaman Kepemimpinan dan Organisasi"
          subtitle="Fondasi kepemimpinan, komunikasi, dan pelayanan yang membentuk profil saya"
        />

        <div className="mt-8 mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Sebelum berkarier sebagai guru, saya telah membangun fondasi kepemimpinan, komunikasi, pelayanan, dan kerja tim melalui pengalaman organisasi sekolah, organisasi kampus, serta forum kemahasiswaan. Pengalaman-pengalaman ini membantu membentuk cara saya memimpin, membimbing, bekerja sama, dan memahami dinamika orang lain dalam konteks pendidikan maupun kehidupan sosial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => {
            const Icon = categoryIcons[exp.category] || Crown;
            const badgeClass = badgeColors[exp.badge] || 'bg-gray-100 text-gray-800 border-gray-300';
            
            return (
              <div
                key={exp.id}
                className="group bg-cream-50 rounded-xl p-6 border border-gray-200 hover:border-gold-400 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white rounded-lg border border-gray-200 group-hover:border-gold-400 transition-colors">
                    <Icon className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${badgeClass}`}>
                    {exp.badge}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium text-navy-700 mb-1">
                  {exp.organization}
                </p>
                {exp.subOrganization && (
                  <p className="text-xs text-gray-500 mb-2">
                    {exp.subOrganization}
                  </p>
                )}
                <p className="text-xs text-gray-500 mb-4">
                  {exp.period}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="pt-4 border-t border-gray-200">
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipExperience;
