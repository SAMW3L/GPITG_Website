import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';

type Product = {
  id: number;
  title: string;
  category: 'system' | 'mobile';
  image: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  additionalFeatures?: string[]; // New: Optional additional features
  videoUrl?: string; // Optional video URL
};

type Category = 'all' | 'system' | 'other';

const productsData: Product[] = [
  {
    id: 1,
    title: 'eHMS',
    category: 'system',
    image: '/ehms.png',
    status: '100+ Healthcare Facilities',
    shortDescription: 'A comprehensive, integrated healthcare management system.',
    fullDescription: 'eHMS is a locally developed, comprehensive and integrated healthcare management system designed for healthcare facilities looking to enhance the quality of their healthcare services by moving from a manual to an automated, paperless environment. It features powerful modules for outpatient (OPD), inpatient (IPD) and emergency settings, significantly improving patient care and operational efficiency.',
    features: [
      'Comprehensive Patient Records (One Patient, One File)',
      'Integrated Medical Machines (LIS & RIS)',
      'Ministry of Health & eGA Compliant',
      'e-Payments & Integrated e-Claims (NHIF, Jubilee, etc.)',
      'Comprehensive Stock Management (Bar & QR Coding)',
      'Integrated DHIS2 Reporting',
      'Patient Biometric Verification',
      'Bulk & Specified SMS Provision',
      'Integrated Mother & Child Care (Digital Partograph)',
      'Integrated Financials & Accounting (IFRS)',
    ],
    additionalFeatures: [ 
      'G-Chart Text & Help Desk (Audio, Video & PDF)',
      'Patient Appointment & Self Check-in (Web & Mobile)',
      'Smart Diagnosis (Decision Support Provision)',
      'Facility Visualization Dashboard (Manage Anywhere)',
      'Plethora of Specialized Medical Templates',
      'Integrated Human Resource Management',
      'NHIF Standards & Guidelines Compliant (New API)',
      'Comprehensive Procurement',
      'Provision for Afya eHMS apps',
      'Comprehensive Care Giver Performance Management',
      'Nurse Calling System',
      'Artificial Intelligence (AI) Features',
      'Comprehensive Surgical Procedure Management',
      'Comprehensive TAT Reports',
      'Notesboard/Announcements with Dispatch Book Platform',
      'Smart Medical Device Misusage Controls',
    ],
    videoUrl: 'https://www.youtube.com/embed/qLGMljP1MLI?si=_oltVuT4XHy1sl1H',
  },
  {
    id: 2,
    title: 'G-PoS',
    category: 'system',
    image: '/gpos.png',
    status: '50+ Retail Businesses',
    shortDescription: 'A vital point of sale system for any retail or wholesale business.',
    fullDescription: 'The right point of sale system is vital for any retail or wholesale business. With G-PoS, management can accomplish controls of business sales, inventory, expenses, and more with greater proficiency.',
    features: [
      'Multi-payment Options',
      'Inventory Management',
      'TRA Integration',
      'Branch Connectivity',
    ],
    videoUrl: 'https://www.youtube.com/embed/3-1Yqm9q5W0?si=NfJhTwEZdXcqw3pk',
  },
  {
    id: 3,
    title: 'G-Pesa',
    category: 'system',
    image: '/gpesa.png',
    status: 'Enterprise Ready',
    shortDescription: 'Integrated payment system connecting banks and mobile networks.',
    fullDescription: 'Integrated payment system connecting banks and mobile networks with an intuitive business interface built with ERP design for complete business automation.',
    features: [
      'Bank Integration',
      'Mobile Money',
      'ERP Design',
      'Business Automation',
    ],
  },
  {
    id: 4,
    title: 'G-Appointment',
    category: 'system',
    image: '/gappointment.png',
    status: '15+ Medical Centers',
    shortDescription: 'State-of-the-art electronic appointment management system.',
    fullDescription: 'G-Appointment is a state-of-the-art electronic appointment management system allowing patients to request doctor or clinic appointments from their location convenience.',
    features: [
      'Multi-platform Access',
      'Self Check-in',
      'NHIF Integration',
      'Real-time Scheduling',
    ],
  },
  {
    id: 5,
    title: 'G-Queue',
    category: 'system',
    image: '/gqueue.png',
    status: '10+ Healthcare Facilities',
    shortDescription: 'Electronic queue management solution designed for healthcare.',
    fullDescription: 'G-Queue is an electronic queue management solution designed specifically for healthcare environments with real-time analytics and multilingual support.',
    features: [
      'Real-time Analytics',
      'Multi-language Support',
      'Digital Displays',
      'Wait Time Optimization',
    ],
  },
  {
    id: 6,
    title: 'G-TELE',
    category: 'system',
    image: '/gtele.png',
    status: 'Integrated with eHMS',
    shortDescription: 'A platform for remote diagnosing and treatment.',
    fullDescription: 'G-Tele is a remote diagnosing and treatment platform enabling healthcare professionals to evaluate, diagnose and treat patients at a distance with secure file sharing.',
    features: [
      'Secure File Sharing',
      'Live Video Streaming',
      'Remote Diagnosis',
      'Multi-facility Support',
    ],
  },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'system', name: 'System Development' },
  { id: 'other', name: 'Other Products' },
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Our Products - GPITG Limited';
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  useEffect(() => {
    if (filteredProducts.length > 0 && !selectedProductId) {
      setSelectedProductId(filteredProducts[0].id);
    } else if (filteredProducts.length === 0) {
      setSelectedProductId(null);
    }
    if (selectedProductId && !filteredProducts.some(p => p.id === selectedProductId)) {
      setSelectedProductId(filteredProducts.length > 0 ? filteredProducts[0].id : null);
    }
  }, [selectedCategory, filteredProducts, selectedProductId]);

  const handleProductSelect = (id: number) => {
    setSelectedProductId(id);
    detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const selectedProduct = productsData.find(p => p.id === selectedProductId);

  const detailPanelVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
            Innovative Products
          </h1>
          <p className="text-lg md:text-xl text-sky-200 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Discover our powerful solutions designed to transform your business operations.
            <br /> We are located in Dar es Salaam, Tanzania.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Sticky Filter Buttons */}
          <div className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm -mt-10 mb-8 pt-4 pb-4 rounded-b-lg shadow-sm z-20 transition-all duration-300">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id as Category);
                    setSelectedProductId(null);
                  }}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Dedicated Product Details Section */}
          <div ref={detailsRef} className="mb-12 min-h-[400px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              {selectedProduct ? (
                <motion.div
                  key={selectedProduct.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={detailPanelVariants}
                  className="bg-white rounded-xl shadow-2xl p-8 lg:p-12 flex flex-col gap-8"
                >
                  {/* Top Section: Image/Video & Primary Features */}
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Column: Image/Video */}
                    <div className="lg:w-1/2 flex justify-center items-start">
                      {selectedProduct.videoUrl ? (
                        <div className="relative w-full max-w-[640px] aspect-video rounded-lg overflow-hidden shadow-xl">
                          <iframe
                            width="100%"
                            height="100%"
                            src={selectedProduct.videoUrl}
                            title={`${selectedProduct.title} Preview`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      ) : (
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.title}
                          className="w-full max-w-sm lg:max-w-full h-auto object-contain rounded-lg shadow-xl"
                        />
                      )}
                    </div>

                    {/* Right Column: Details and Primary Features */}
                    <div className="lg:w-1/2 flex flex-col justify-between">
                      <div>
                        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                          {selectedProduct.status}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                          {selectedProduct.title}
                        </h2>
                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                          {selectedProduct.fullDescription}
                        </p>

                        <h4 className="text-xl font-bold text-gray-700 mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-gray-600 mb-8">
                          {selectedProduct.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle size={18} className="text-blue-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <Link
                          to="/contact"
                          className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                        >
                          Request Demo <ChevronRight size={20} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Additional Features Section (below video/image) */}
                  {selectedProduct.additionalFeatures && selectedProduct.additionalFeatures.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="text-xl font-bold text-gray-700 mb-3">Other Integrated Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-gray-600">
                        {selectedProduct.additionalFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle size={18} className="text-blue-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="no-product-selected"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={detailPanelVariants}
                  className="bg-white rounded-xl shadow-lg p-12 text-center text-gray-500 text-xl flex items-center justify-center min-h-[400px]"
                >
                  <p>...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                    selectedProductId === product.id
                      ? 'border-blue-600 ring-2 ring-blue-200'
                      : 'border-transparent hover:border-blue-400'
                  }`}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-contain mb-3"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm text-center line-clamp-2">
                        {product.shortDescription}
                      </p>
                    </div>
                    <div className="flex justify-center mt-4">
                      <span className="text-blue-600 font-medium flex items-center group">
                        Learn More
                        <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our solutions can empower your business.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center shadow-lg"
          >
            Get Started <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;