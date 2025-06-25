
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface LuxuryTestimonialsProps {
  language: 'en' | 'ar';
}

const testimonials = [
  { name: "Yahia B", text: "Great experience with Elhajjaji Tours!" },
  { name: "Amine A", text: "Excellent service, highly recommend." },
  { name: "Sofia M", text: "Our desert trip was unforgettable. Professional and kind team." },
  { name: "Karim D", text: "The driver was on time and very helpful. Loved every moment." },
  { name: "Emily T", text: "Morocco became even more magical thanks to Elhajjaji Tours!" },
  { name: "Mehdi F", text: "Very well organized. I will book again for sure." },
  { name: "Laura G", text: "Amazing experience from start to finish. Safe and smooth ride." },
  { name: "Rachid E", text: "They made everything easy, from booking to the final drop-off." },
  { name: "Nadia Z", text: "Best tour I've had in Morocco. Warm people and beautiful places." },
  { name: "Alex R", text: "I recommend Elhajjaji Tours to anyone visiting Marrakech." }
];

const LuxuryTestimonials = ({ language }: LuxuryTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const content = {
    en: {
      title: 'What Our Clients Say',
      subtitle: 'Discover why travelers from around the world choose Elhajjaji Tours for their Moroccan adventures'
    },
    ar: {
      title: 'ما يقوله عملاؤنا',
      subtitle: 'اكتشف لماذا يختار المسافرون من جميع أنحاء العالم رحلات الحجاجي لمغامراتهم المغربية'
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {content[language].subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial card */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 mx-4 min-h-[400px] flex items-center justify-center backdrop-blur-sm border border-gray-100">
            <div className="text-center max-w-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full mb-8">
                <Quote className="w-8 h-8 text-amber-600" />
              </div>
              
              <p className="text-2xl md:text-3xl text-gray-800 mb-8 leading-relaxed font-playfair font-medium">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <h4 className="text-xl font-inter font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 w-12' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trustpilot Widget */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div 
              className="trustpilot-widget" 
              data-locale="en-US" 
              data-template-id="56278e9abfbbba0bdcd568bc" 
              data-businessunit-id="6793acee1bb2105f11fa0c61" 
              data-style-height="52px" 
              data-style-width="100%"
            >
              <a 
                href="https://www.trustpilot.com/review/elhajjajitours.com" 
                target="_blank" 
                rel="noopener"
                className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
              >
                View our Trustpilot reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryTestimonials;
