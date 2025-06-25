
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import LuxuryHero from '../components/LuxuryHero';
import AboutSection from '../components/AboutSection';
import LuxuryTestimonials from '../components/LuxuryTestimonials';
import LuxuryContact from '../components/LuxuryContact';
import SocialSection from '../components/SocialSection';
import LuxuryFooter from '../components/LuxuryFooter';
import PremiumWhatsApp from '../components/PremiumWhatsApp';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  return (
    <div className="min-h-screen font-inter">
      <Navigation language={language} setLanguage={setLanguage} />
      <main>
        <LuxuryHero language={language} />
        <AboutSection language={language} />
        <LuxuryTestimonials language={language} />
        <LuxuryContact language={language} />
        <SocialSection language={language} />
      </main>
      <LuxuryFooter language={language} />
      <PremiumWhatsApp />
    </div>
  );
};

export default Index;
