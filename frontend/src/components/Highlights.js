import React from 'react';
import { TrendingUp } from 'lucide-react';
import { profileData } from '../data/profileData';

const Highlights = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gold-500/20 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-gold-400 mr-2" />
            <span className="text-gold-300 font-medium">Impact & Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kontribusi dalam Pendidikan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dedikasi dalam mengembangkan pembelajaran, literasi, dan konten edukatif
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {profileData.achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gold-500 transition-all hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                {achievement.value}
              </div>
              <div className="text-gray-300 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Mengajar dan membimbing siswa di lingkungan SRMA</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Mengembangkan konten edukasi sejarah lintas platform</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Mendampingi kegiatan literasi dan komunitas siswa</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Membantu pembinaan lomba debat dan ekstrakurikuler</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Membuat materi ajar dan media pembelajaran</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Mengintegrasikan teknologi dan AI untuk produktivitas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
