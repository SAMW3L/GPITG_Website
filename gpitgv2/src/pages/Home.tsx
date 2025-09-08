import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/Home/About';
import ServicesSection from '../components/Home/Services';
import ProductsSection from '../components/Home/Products';
import ContactSection from '../components/Home/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'GPITG Limited - IT Solutions for Business Growth';
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
    </>
  );
};

export default Home;