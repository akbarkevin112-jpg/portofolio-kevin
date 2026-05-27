import React from 'react';
import { ImageIcon, Video, FileQuestion, User, Map, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const contentTypeIcons = {
  'Carousel sejarah': ImageIcon,
  'Reels pendek': Video,
  'Mitos vs fakta': FileQuestion,
  'Tokoh sejarah': User,
  'Sejarah lokal dan budaya': Map,
  'Caption edukatif': MessageSquare
};

const ContentCreation = () => {
  return (
    <section id="content" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title={profileData.contentCreation.title}
          subtitle="Membuat sejarah lebih relevan dan mudah dipahami"
        />
        
        <div className="mt-12">
          <div className="bg-gradient-to-br from-white to-cream-50 rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <img src="/images/logo-sekat.jpg" alt="Sekat Sejarah Singkat" className="h-24 w-24 rounded-xl shadow-md" />
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {profileData.contentCreation.description}
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {profileData.contentCreation.contentTypes.map((contentType, index) => {
                const Icon = contentTypeIcons[contentType] || ImageIcon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gold-400 hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Icon className="w-8 h-8 text-navy-700 mb-3 group-hover:text-gold-600 transition-colors" />
                    <h4 className="text-base font-semibold text-gray-800">
                      {contentType}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Content Showcase Mockup */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gradient-to-br from-navy-100 to-cream-100 rounded-xl flex items-center justify-center border border-gray-300 hover:shadow-xl transition-all"
                >
                  <span className="text-gray-400 text-sm font-medium">Konten #{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
