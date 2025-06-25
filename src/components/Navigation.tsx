
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const content = {
    en: {
      home: 'Home',
      about: 'About',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    ar: {
      home: 'الرئيسية',
      about: 'حولنا',
      testimonials: 'آراء العملاء',
      contact: 'اتصل بنا'
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7e7020c6-3c38-444b-954e-c386bca0c489.png" 
              alt="Elhajjaji Tours Logo" 
              className="h-12 w-12 object-contain drop-shadow-sm"
            />
            <div>
              <h1 className="text-xl font-playfair font-semibold text-gray-900">
                Elhajjaji Tours
              </h1>
              <p className="text-sm text-gray-600" dir="rtl">رحلات الحجاجي</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {Object.entries(content[language]).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-inter font-medium"
                >
                  {value}
                </button>
              ))}
            </nav>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-6">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
            <nav className="flex flex-col space-y-4 mt-6 px-4">
              {Object.entries(content[language]).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                  className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-300 font-inter font-medium py-2"
                >
                  {value}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center justify-center space-x-2 mt-6 pt-4 border-t border-gray-100">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
