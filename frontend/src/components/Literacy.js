import React from 'react';
import { BookOpen, Users, BookMarked, Pen, Library, Handshake } from 'lucide-react';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const activityIcons = {
  'Pembiasaan membaca': BookOpen,
  'Baca lantang': BookMarked,
  'Komunitas literasi': Users,
  'Pendampingan menulis': Pen,
  'Pelayanan perpustakaan': Library,
  'Kolaborasi program literasi': Handshake
};

const Literacy = () => {
  return (
    <section id="literacy" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title={profileData.literacy.title}
          subtitle="Literasi sebagai jembatan menuju pemahaman dan kepercayaan diri"
        />
        
        <div className="mt-12">
          <div className="bg-gradient-to-br from-cream-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {profileData.literacy.description}
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {profileData.literacy.activities.map((activity, index) => {
                const Icon = activityIcons[activity] || BookOpen;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gold-400 hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Icon className="w-8 h-8 text-navy-700 mb-3 group-hover:text-gold-600 transition-colors" />
                    <h4 className="text-base font-semibold text-gray-800">
                      {activity}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Literacy;
