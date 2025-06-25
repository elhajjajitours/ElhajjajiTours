
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Agency Name */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7e7020c6-3c38-444b-954e-c386bca0c489.png" 
              alt="Elhajjaji Tours Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Elhajjaji Tours Agency</h1>
              <p className="text-sm text-orange-600" dir="rtl">رحلات الحجاجي</p>
            </div>
          </div>

          {/* Desktop Navigation and Contact */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <a 
                href="tel:+212661120251" 
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+212 661 120 251</span>
              </a>
              <a 
                href="mailto:transtripmaroc@gmail.com" 
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">transtripmaroc@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-orange-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 mt-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors py-2"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-200">
              <a 
                href="tel:+212661120251" 
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+212 661 120 251</span>
              </a>
              <a 
                href="mailto:transtripmaroc@gmail.com" 
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">transtripmaroc@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
