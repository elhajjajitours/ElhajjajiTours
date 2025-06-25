
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Elhajjaji Tours
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-orange-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Your Gateway to Morocco
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Elhajjaji Tours is a local Moroccan travel agency based in Marrakech. We offer unforgettable trips, 
            desert tours, and authentic Moroccan experiences that will create memories to last a lifetime.
          </p>
          <div className="text-right mt-8 animate-fade-in" style={{animationDelay: '0.6s'}} dir="rtl">
            <p className="text-lg text-orange-200">
              رحلات الحجاجي - وكالة سفريات مغربية محلية مقرها مراكش
            </p>
            <p className="text-base text-orange-100 mt-2">
              نقدم رحلات لا تُنسى وجولات صحراوية وتجارب مغربية أصيلة
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
