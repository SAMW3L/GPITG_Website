import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';

const ProductCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 1,
      title: 'eHMS',
      subtitle: 'Electronic Health Management System',
      description: 'A comprehensive, integrated healthcare management system designed for healthcare facilities looking to enhance the quality of their healthcare services.',
      image: '/ehms.png',
      features: ['NHIF Integration', 'Patient Records', 'Medical Devices', 'Telemedicine'],
      status: '100+ Healthcare Facilities',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'G-PoS',
      subtitle: 'Point of Sale System',
      description: 'A vital point of sale system for any retail or wholesale business with comprehensive inventory management and TRA integration.',
      image: '/gpos.png',
      features: ['Multi-payment', 'Inventory Control', 'TRA Integration', 'Branch Connectivity'],
      status: '50+ Retail Businesses',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 3,
      title: 'G-Pesa',
      subtitle: 'Digital Payment Solution',
      description: 'Integrated payment system connecting banks and mobile networks with ERP design for complete business automation.',
      image: '/gpesa.png',
      features: ['Bank Integration', 'Mobile Money', 'ERP Design', 'Business Automation'],
      status: 'Enterprise Ready',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      title: 'G-Appointment',
      subtitle: 'Appointment Management',
      description: 'State-of-the-art electronic appointment management system allowing patients to request appointments from anywhere.',
      image: '/gappointment.png',
      features: ['Multi-platform', 'Self Check-in', 'NHIF Integration', 'Real-time Scheduling'],
      status: '15+ Medical Centers',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'G-Queue',
      subtitle: 'Queue Management',
      description: 'Electronic queue management solution designed for healthcare environments with real-time analytics.',
      image: '/gqueue.png',
      features: ['Real-time Analytics', 'Multi-language', 'Digital Displays', 'Wait Time Optimization'],
      status: '10+ Healthcare Facilities',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 6,
      title: 'G-TELE',
      subtitle: 'Telemedicine Platform',
      description: 'Remote diagnosing and treatment platform enabling healthcare professionals to evaluate and treat patients at a distance.',
      image: '/gtele.png',
      features: ['Secure File Sharing', 'Live Video', 'Remote Diagnosis', 'Multi-facility Support'],
      status: 'Integrated with eHMS',
      color: 'from-sky-500 to-blue-600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-600/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-sky-600/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky-500/20 backdrop-blur-sm text-sky-300 rounded-full text-sm font-medium mb-4">
            💡 Our Product Suite
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Innovative Solutions for Modern Africa
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of locally developed products designed to transform healthcare, retail, and business operations.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`bg-gradient-to-r ${products[currentSlide].color} relative`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                        {products[currentSlide].status}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">
                        {products[currentSlide].title}
                      </h3>
                      <p className="text-xl text-white/90 mb-4">
                        {products[currentSlide].subtitle}
                      </p>
                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {products[currentSlide].description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {products[currentSlide].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/products"
                        className="bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <Play size={18} className="mr-2" />
                        Request Demo
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative p-8 lg:p-12 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
                      <img
                        src={products[currentSlide].image}
                        alt={products[currentSlide].title}
                        className="relative w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/400x300/0ea5e9/ffffff?text=${products[currentSlide].title}`;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-sky-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-sky-500/30 border-2 border-sky-400'
                  : 'bg-white/10 hover:bg-white/20 border-2 border-transparent'
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-12 object-contain mb-2"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/100x50/0ea5e9/ffffff?text=${product.title}`;
                }}
              />
              <p className="text-white text-xs font-medium">{product.title}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;