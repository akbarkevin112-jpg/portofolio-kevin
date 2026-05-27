import React from 'react';
import { ArrowRight, Download, BookOpen, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-white to-cream-100">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold-100 text-gold-800 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Educator & Content Creator
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
                {profileData.name}
              </h1>
              <p className="text-xl sm:text-2xl text-navy-700 font-medium">
                {profileData.title}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {profileData.tagline}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {profileData.badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-navy-100 text-navy-800 rounded-lg text-sm font-medium border border-navy-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-all hover:shadow-lg hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Lihat Portofolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy-900 rounded-lg font-medium border-2 border-navy-900 hover:bg-navy-50 transition-all hover:shadow-lg"
              >
                Hubungi Saya
              </button>
            </div>

            {/* Download CV */}
            <div>
              <a
                href="/cv/CV_Kevin_Akbar_Maulana.docx"
                download
                className="inline-flex items-center text-navy-700 hover:text-gold-600 font-medium transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-400 rounded-full opacity-20 blur-2xl"></div>
              
              <div className="relative space-y-6">
                {/* Profile Photo */}
                <div className="w-48 h-48 mx-auto overflow-hidden rounded-full shadow-xl border-4 border-white">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Kevin Akbar Maulana"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-navy-900">
                    {profileData.name}
                  </h3>
                  <p className="text-navy-600">
                    SRMA 14 Bandung Barat
                  </p>
                  <p className="text-sm text-gray-500">
                    Kementerian Sosial RI
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-cream-50 rounded-lg">
                    <div className="text-2xl font-bold text-navy-900">5+</div>
                    <div className="text-sm text-gray-600">Tahun Mengajar</div>
                  </div>
                  <div className="text-center p-3 bg-cream-50 rounded-lg">
                    <div className="text-2xl font-bold text-navy-900">100+</div>
                    <div className="text-sm text-gray-600">Siswa Dibimbing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
