import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-4">{profileData.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {profileData.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream-100 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream-100 mb-4">Kontak</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center text-gray-400 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {profileData.email}
              </a>
              <p className="text-gray-400">{profileData.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
