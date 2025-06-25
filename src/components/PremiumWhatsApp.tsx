
import React from 'react';
import { MessageCircle } from 'lucide-react';

const PremiumWhatsApp = () => {
  return (
    <a
      href="https://wa.me/+212661120251"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default PremiumWhatsApp;
