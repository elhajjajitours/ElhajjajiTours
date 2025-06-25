
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LuxuryHeroProps {
  language: 'en' | 'ar';
}

const LuxuryHero = ({ language }: LuxuryHeroProps) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    en: {
      title: 'Elhajjaji Tours',
      titleArabic: 'رحلات الحجاجي',
      tagline: 'Discover Morocco through authentic journeys',
      description: 'Luxury travel experiences crafted with Moroccan hospitality'
    },
    ar: {
      title: 'رحلات الحجاجي',
      titleArabic: 'Elhajjaji Tours',
      tagline: 'اكتشف المغرب من خلال الرحلات الأصيلة',
      description: 'تجارب سفر فاخرة مصممة بالضيافة المغربية'
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12 animate-fade-in">
            <img 
              src="/lovable-uploads/7e7020c6-3c38-444b-954e-c386bca0c489.png" 
              alt="Elhajjaji Tours Logo" 
              className="h-24 w-24 mx-auto mb-8 drop-shadow-lg animate-float"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {content[language].title}
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-playfair animate-slide-up" style={{animationDelay: '0.4s'}} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {content[language].titleArabic}
          </p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-inter font-light animate-slide-up" style={{animationDelay: '0.6s'}} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {content[language].tagline}
          </p>

          <p className="text-lg text-gray-600 mb-16 font-inter animate-slide-up" style={{animationDelay: '0.8s'}} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {content[language].description}
          </p>

          {/* Scroll Button */}
          <button
            onClick={scrollToNext}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-slide-up"
            style={{animationDelay: '1s'}}
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6 text-gray-700 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;
