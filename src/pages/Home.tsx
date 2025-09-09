import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import ServicesSection from '../components/Home/Services';
import AboutSection from '../components/Home/About';
import News from '../components/Home/News';
import StatsSection from '../components/Home/Stats';
// import CtaSection from '../components/Home/Cta';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'GPITG Limmited - IT Solutions for Business Growth';
  }, []);

  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <News />
      {/* <CtaSection /> */}
    </>
  );
};

export default Home;