
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

interface SocialSectionProps {
  language: 'en' | 'ar';
}

const SocialSection = ({ language }: SocialSectionProps) => {
  const content = {
    en: {
      title: 'Follow Our Journey',
      subtitle: 'Stay connected with us on social media for travel inspiration and updates'
    },
    ar: {
      title: 'تابع رحلتنا',
      subtitle: 'ابق على تواصل معنا على وسائل التواصل الاجتماعي للحصول على إلهام السفر والتحديثات'
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {content[language].subtitle}
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://www.instagram.com/elhajjajitours/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@elhajjajitours"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <div className="bg-black p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
          </a>

          <a
            href="https://www.facebook.com/travel.with.elhajjaji.tours.marrakech/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <div className="bg-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Facebook className="w-8 h-8 text-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
