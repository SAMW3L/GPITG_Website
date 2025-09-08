import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink, Play, CheckCircle } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 1,
      title: 'eHMS',
      subtitle: 'Electronic Health Management System',
      description: 'A comprehensive, integrated healthcare management system designed for healthcare facilities looking to enhance the quality of their healthcare services by moving from manual to automated, paperless environment.',
      image: '/ehms.png',
      features: [
        'Comprehensive Patient Records (One Patient, One File)',
        'Integrated Medical Machines (LIS & RIS)',
        'Ministry of Health & eGA Compliant',
        'e-Payments & Integrated e-Claims (NHIF, Jubilee, etc.)',
        'Comprehensive Stock Management',
        'Integrated DHIS2 Reporting'
      ],
      status: '100+ Healthcare Facilities',
      color: 'from-sky-500 to-sky-600',
      videoUrl: 'https://www.youtube.com/embed/qLGMljP1MLI?si=_oltVuT4XHy1sl1H'
    },
    {
      id: 2,
      title: 'G-PoS',
      subtitle: 'Point of Sale System',
      description: 'The right point of sale system is vital for any retail or wholesale business. With G-PoS, management can accomplish controls of business sales, inventory, expenses, and more with greater proficiency.',
      image: '/gpos.png',
      features: [
        'Multi-payment Options',
        'Comprehensive Inventory Management',
        'TRA Integration & Compliance',
        'Multi-branch Connectivity',
        'Real-time Reporting',
        'Customer Management'
      ],
      status: '50+ Retail Businesses',
      color: 'from-emerald-500 to-emerald-600',
      videoUrl: 'https://www.youtube.com/embed/3-1Yqm9q5W0?si=NfJhTwEZdXcqw3pk'
    },
    {
      id: 3,
      title: 'G-Pesa',
      subtitle: 'Digital Payment Solution',
      description: 'Integrated payment system connecting banks and mobile networks with an intuitive business interface built with ERP design for complete business automation.',
      image: '/gpesa.png',
      features: [
        'Bank Integration',
        'Mobile Money Support',
        'ERP Design Architecture',
        'Complete Business Automation',
        'Financial Reporting',
        'Multi-currency Support'
      ],
      status: 'Enterprise Ready',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'G-Appointment',
      subtitle: 'Appointment Management System',
      description: 'G-Appointment is a state-of-the-art electronic appointment management system allowing patients to request doctor or clinic appointments from their location convenience.',
      image: '/gappointment.png',
      features: [
        'Multi-platform Access',
        'Patient Self Check-in',
        'NHIF Integration',
        'Real-time Scheduling',
        'SMS Notifications',
        'Doctor Availability Management'
      ],
      status: '15+ Medical Centers',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'G-Queue',
      subtitle: 'Queue Management Solution',
      description: 'G-Queue is an electronic queue management solution designed specifically for healthcare environments with real-time analytics and multilingual support.',
      image: '/gqueue.png',
      features: [
        'Real-time Analytics',
        'Multi-language Support',
        'Digital Display Integration',
        'Wait Time Optimization',
        'Patient Flow Management',
        'Performance Reporting'
      ],
      status: '10+ Healthcare Facilities',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 6,
      title: 'G-TELE',
      subtitle: 'Telemedicine Platform',
      description: 'G-Tele is a remote diagnosing and treatment platform enabling healthcare professionals to evaluate, diagnose and treat patients at a distance with secure file sharing.',
      image: '/gtele.png',
      features: [
        'Secure File Sharing',
        'Live Video Streaming',
        'Remote Diagnosis Tools',
        'Multi-facility Support',
        'Patient History Access',
        'Prescription Management'
      ],
      status: 'Integrated with eHMS',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 6000);

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            💡 Our Product Suite
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Innovative Solutions for Modern Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of locally developed products designed to transform healthcare, retail, and business operations.
          </p>
        </motion.div>

        {/* Main Product Showcase */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
                        {products[currentSlide].status}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {products[currentSlide].title}
                      </h3>
                      <p className="text-xl text-sky-600 font-semibold mb-4">
                        {products[currentSlide].subtitle}
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {products[currentSlide].description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {products[currentSlide].features.slice(0, 6).map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/products"
                        className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="group bg-white border-2 border-sky-200 hover:border-sky-300 text-sky-600 hover:bg-sky-50 font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center"
                      >
                        <Play size={18} className="mr-2" />
                        Request Demo
                      </Link>
                    </div>
                  </div>

                  {/* Image/Video Side */}
                  <div className="relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100">
                    {products[currentSlide].videoUrl ? (
                      <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                          width="100%"
                          height="100%"
                          src={products[currentSlide].videoUrl}
                          title={`${products[currentSlide].title} Demo`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute inset-0 bg-sky-200/30 rounded-3xl blur-xl"></div>
                        <img
                          src={products[currentSlide].image}
                          alt={products[currentSlide].title}
                          className="relative w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/400x300/0ea5e9/ffffff?text=${products[currentSlide].title}`;
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-sky-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-sky-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mb-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 transform hover:scale-125 active:scale-95 ${
                index === currentSlide
                  ? 'bg-sky-500 w-8 shadow-lg'
                  : 'bg-gray-300 w-3 hover:bg-sky-300'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                index === currentSlide
                  ? 'bg-sky-100 border-2 border-sky-400 shadow-lg'
                  : 'bg-white hover:bg-sky-50 border-2 border-gray-200 hover:border-sky-200 shadow-md hover:shadow-lg'
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
              <p className={`text-xs font-semibold ${
                index === currentSlide ? 'text-sky-700' : 'text-gray-700'
              }`}>
                {product.title}
              </p>
            </motion.button>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join over 200+ organizations that have already transformed their operations with our innovative solutions.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Explore All Products
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;