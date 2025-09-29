import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import NewsMarquee from '../NewsMarquee';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const slides = [
    {
      id: 1,
      image: '/ehms.png', 
      mobileImage: '/ehms1.png', 
      title: 'Electronic Health Management System',
      subtitle: 'eHMS - Transforming Healthcare',
      description: 'Comprehensive healthcare management system serving 100+ facilities across Tanzania with NHIF integration and real-time medical device connectivity.',
      cta: 'Explore eHMS',
      link: '/products'
    },
    {
      id: 2,
      image: '/gpos.png',
      mobileImage: '/gpos1.png',
      title: 'Point of Sale System',
      subtitle: 'G-PoS - Retail Excellence',
      description: 'Advanced POS system for retail and wholesale businesses with inventory management, TRA integration, and multi-payment support.',
      cta: 'Explore G-PoS',
      link: '/products'
    },
    {
      id: 3,
      image: '/gpesa.png',
      mobileImage: '/gpesa1.png',
      title: 'Digital Payment Solution',
      subtitle: 'G-Pesa - Business Automation',
      description: 'Integrated payment system connecting banks and mobile networks with ERP design for complete business automation.',
      cta: 'Explore More',
      link: '/products'
    },
    {
      id: 4,
      image: '/gappointment.png',
      mobileImage: '/gappointment1.png',
      title: 'Appointment Management',
      subtitle: 'G-Appointment - Smart Scheduling',
      description: 'State-of-the-art appointment management system with multi-platform access and real-time scheduling capabilities.',
      cta: 'Explore More',
      link: '/products'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
 
  <div className="absolute inset-0">
    <AnimatePresence initial={false}>
      <motion.div
        key={currentSlide}
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-sky-800/70 to-transparent z-10"></div>
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet={currentSlideData.mobileImage} 
          />
          <source 
            media="(min-width: 769px)" 
            srcSet={currentSlideData.image} 
          />
          <img
            src={currentSlideData.image}
            alt={currentSlideData.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `/Web.png`;
            }}
          />
        </picture>
      </motion.div>
     </AnimatePresence>
    </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
                >
                  {currentSlideData.subtitle}
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-sky-200 font-semibold mb-6"
                >
                  {currentSlideData.title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed"
                >
                  {currentSlideData.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-row sm:flex-row gap-4"
                >
                  <Link
                    to={currentSlideData.link ?? '/products'}
                    className="group bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center btn-bounce"
                  >
                    {currentSlideData.cta}
                    <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center btn-bounce"
                  >
                    <ChevronRight size={18} className="mr-2" />
                    Request Demo
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-sky-400 w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2   hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-30 btn-bounce"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2   hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-30 btn-bounce"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-5 inset-x-0 z-50">
        <NewsMarquee />
      </div>
    </section>
  );
};

export default Hero;
