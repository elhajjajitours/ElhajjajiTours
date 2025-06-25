
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/7e7020c6-3c38-444b-954e-c386bca0c489.png" 
              alt="Elhajjaji Tours Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold">Elhajjaji Tours Agency</h3>
              <p className="text-gray-400 text-sm" dir="rtl">رحلات الحجاجي</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.instagram.com/elhajjajitours/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@elhajjajitours"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/travel.with.elhajjaji.tours.marrakech/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© 2024 Elhajjaji Tours Agency. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Based in Marrakech, Morocco | مراكش، المغرب
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
