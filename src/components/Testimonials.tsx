
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

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

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

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

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why travelers from around the world choose Elhajjaji Tours for their Moroccan adventures
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mx-4 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <Quote className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h4>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-orange-50 text-orange-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-orange-50 text-orange-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trustpilot Widget */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-lg">
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
                className="text-orange-600 hover:text-orange-700 font-medium"
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

export default Testimonials;
