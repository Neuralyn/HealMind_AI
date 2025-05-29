import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import InteractiveDemo from './InteractiveDemo';
import StepByStep from './StepByStep';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FounderSection from './FounderSection';
import EmailCapture from './EmailCapture';
import BlogSection from './BlogSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-healing-50 to-primary-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <InteractiveDemo />
      <StepByStep />
      <TestimonialsSection />
      <PricingSection />
      <FounderSection />
      <EmailCapture />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default LandingPage;