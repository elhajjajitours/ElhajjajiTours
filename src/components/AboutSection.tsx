
import React from 'react';
import { MapPin, Award, Users } from 'lucide-react';

interface AboutSectionProps {
  language: 'en' | 'ar';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    en: {
      title: 'About Elhajjaji Tours',
      description: 'Elhajjaji Tours is a trusted Moroccan travel agency based in Marrakech. We specialize in authentic, luxurious desert trips and guided cultural experiences across Morocco.',
      features: [
        { icon: MapPin, title: 'Local Expertise', description: 'Born and raised in Marrakech' },
        { icon: Award, title: 'Premium Service', description: 'Luxury travel experiences' },
        { icon: Users, title: 'Personal Touch', description: 'Tailored to your preferences' }
      ]
    },
    ar: {
      title: 'حول رحلات الحجاجي',
      description: 'رحلات الحجاجي هي وكالة سفريات مغربية موثوقة مقرها في مراكش. نحن متخصصون في الرحلات الصحراوية الأصيلة والفاخرة والتجارب الثقافية المصحوبة بمرشدين في جميع أنحاء المغرب.',
      features: [
        { icon: MapPin, title: 'خبرة محلية', description: 'وُلدنا وترعرعنا في مراكش' },
        { icon: Award, title: 'خدمة متميزة', description: 'تجارب سفر فاخرة' },
        { icon: Users, title: 'لمسة شخصية', description: 'مصممة حسب تفضيلاتك' }
      ]
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {content[language].title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed font-inter" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {content[language].description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {content[language].features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-inter" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
