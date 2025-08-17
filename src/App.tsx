import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import PartnersSection from './components/PartnersSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <SEOHead />
          <Header />
          <main>
            <HeroSection />
            <ProductsSection />
            <AboutSection />
            <ServicesSection />
            <StatsSection />
            <TestimonialsSection />
            <TeamSection />
            <PartnersSection />
            <CareersSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;