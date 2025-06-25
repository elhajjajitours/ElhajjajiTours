
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface LuxuryContactProps {
  language: 'en' | 'ar';
}

const LuxuryContact = ({ language }: LuxuryContactProps) => {
  const content = {
    en: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your Moroccan adventure? Contact us today to plan your perfect trip',
      contact: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        locationText: 'Marrakech, Morocco'
      },
      whyChoose: {
        title: 'Why Choose Us?',
        reasons: [
          'Local expertise and authentic experiences',
          'Professional and reliable service',
          'Customized tours for every budget',
          '24/7 customer support'
        ]
      }
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'هل أنت مستعد لبدء مغامرتك المغربية؟ اتصل بنا اليوم لتخطيط رحلتك المثالية',
      contact: {
        title: 'معلومات الاتصال',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        location: 'الموقع',
        locationText: 'مراكش، المغرب'
      },
      whyChoose: {
        title: 'لماذا تختارنا؟',
        reasons: [
          'خبرة محلية وتجارب أصيلة',
          'خدمة مهنية وموثوقة',
          'جولات مخصصة لكل ميزانية',
          'دعم العملاء على مدار الساعة'
        ]
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
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

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {content[language].contact.title}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-inter">{content[language].contact.phone}</h4>
                    <a 
                      href="tel:+212661120251" 
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300 font-inter"
                    >
                      +212 661 120 251
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-inter">{content[language].contact.email}</h4>
                    <a 
                      href="mailto:transtripmaroc@gmail.com" 
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300 font-inter"
                    >
                      transtripmaroc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-inter">{content[language].contact.location}</h4>
                    <p className="text-gray-600 font-inter">{content[language].contact.locationText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-lg">
              <h4 className="text-2xl font-playfair font-bold mb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {content[language].whyChoose.title}
              </h4>
              <ul className="space-y-4">
                {content[language].whyChoose.reasons.map((reason, index) => (
                  <li key={index} className="flex items-center space-x-3" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="font-inter">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryContact;
