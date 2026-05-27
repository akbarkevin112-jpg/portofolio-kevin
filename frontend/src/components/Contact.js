import React, { useState } from 'react';
import { Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import { FaTiktok, FaLinkedin } from 'react-icons/fa';
import { profileData } from '../data/profileData';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda akan segera direspon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Mari Berkolaborasi"
          subtitle="Terbuka untuk kolaborasi di bidang pendidikan, literasi, konten sejarah, dan proyek edukatif lainnya"
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy-100 rounded-lg">
                  <Mail className="w-6 h-6 text-navy-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                  <a href={`mailto:${profileData.email}`} className="text-gray-600 hover:text-gold-600 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-navy-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-navy-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Lokasi</h3>
                  <p className="text-gray-600">
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-navy-900 mb-4">Ikuti Konten Sejarah</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={profileData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cream-50 rounded-lg hover:bg-gold-50 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-navy-700" />
                </a>
                <a
                  href={profileData.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cream-50 rounded-lg hover:bg-gold-50 transition-all hover:scale-110"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-6 h-6 text-navy-700" />
                </a>
                <a
                  href={profileData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cream-50 rounded-lg hover:bg-gold-50 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-navy-700" />
                </a>
                <a
                  href={profileData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cream-50 rounded-lg hover:bg-gold-50 transition-all hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-navy-700" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cream-50 rounded-lg hover:bg-gold-50 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 text-navy-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream-50 rounded-2xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-gray-900"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-gray-900"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none text-gray-900"
                  placeholder="Ceritakan tentang kolaborasi atau pertanyaan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-all hover:shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
