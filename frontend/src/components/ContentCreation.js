import React, { useState, useEffect, useRef } from 'react';
import { ImageIcon, Video, FileQuestion, User, Map, MessageSquare, ExternalLink, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const showcase = profileData.contentCreation.contentShowcase;
  const intervalRef = useRef(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcase.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, showcase.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcase.length) % showcase.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcase.length);
  };

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
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {profileData.contentCreation.description}
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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

            {/* Content Showcase Carousel */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
                Konten Pilihan
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Lihat konten terbaru dari Sekat Sejarah Singkat
              </p>

              <div 
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {showcase.map((content) => {
                      const isInstagram = content.platform === 'instagram';
                      const PlatformIcon = isInstagram ? Instagram : FaTiktok;
                      const platformName = isInstagram ? 'Instagram' : 'TikTok';
                      const gradientClass = isInstagram 
                        ? 'from-purple-600 via-pink-500 to-orange-400'
                        : 'from-gray-900 via-gray-800 to-black';
                      
                      return (
                        <div key={content.id} className="w-full flex-shrink-0">
                          <a
                            href={content.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className={`relative aspect-[4/3] md:aspect-[16/9] bg-gradient-to-br ${gradientClass} rounded-2xl overflow-hidden group cursor-pointer`}>
                              {/* Decorative pattern overlay */}
                              <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                              }}></div>
                              
                              {/* Content */}
                              <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6 group-hover:scale-110 transition-transform">
                                  <PlatformIcon className="w-16 h-16 text-white" />
                                </div>
                                
                                <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                                  {platformName}
                                </span>
                                
                                <h4 className="text-2xl md:text-3xl font-bold mb-3 text-center">
                                  {content.title}
                                </h4>
                                <p className="text-white/80 text-center mb-6 max-w-md">
                                  {content.description}
                                </p>
                                
                                <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium group-hover:bg-white group-hover:text-navy-900 transition-all">
                                  <ExternalLink className="w-5 h-5 mr-2" />
                                  Lihat di {platformName}
                                </div>
                              </div>

                              {/* Sekat Logo Watermark */}
                              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                                <img src="/images/logo-sekat.jpg" alt="Sekat" className="h-10 w-10 rounded-md" />
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {showcase.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all rounded-full ${
                        index === currentSlide 
                          ? 'w-8 h-3 bg-gold-500' 
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="text-center mt-4 text-sm text-gray-500">
                  Konten #{currentSlide + 1} dari {showcase.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
