import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiHeart, FiShoppingBag, FiCreditCard, FiCalendar, FiUsers, FiVideo, FiArrowRight, FiCheck } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState('ehms');

  const products = [
    {
      key: 'ehms',
      icon: FiActivity,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Patient Management', 'NHIF Integration', 'Telemedicine Ready', 'Real-time Analytics'],
      clients: '20+ Healthcare Facilities'
    },
    {
      key: 'adecare',
      icon: FiHeart,
      color: 'from-teal-500 to-green-600',
      bgColor: 'from-teal-50 to-green-100 dark:from-teal-900/20 dark:to-green-800/20',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Home-based Care', 'Licensed Professionals', 'Digital Ecosystem', 'Care Plans'],
      clients: 'New Innovation'
    },
    {
      key: 'gpos',
      icon: FiShoppingBag,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-800/20',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Multi-payment Options', 'Inventory Management', 'TRA Integration', 'Branch Connectivity'],
      clients: '50+ Retail Businesses'
    },
    {
      key: 'gpesa',
      icon: FiCreditCard,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-800/20',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Bank Integration', 'Mobile Money', 'ERP Design', 'Business Automation'],
      clients: 'Enterprise Ready'
    },
    {
      key: 'gappointment',
      icon: FiCalendar,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-800/20',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Multi-platform Access', 'Self Check-in', 'NHIF Integration', 'Real-time Scheduling'],
      clients: '15+ Medical Centers'
    },
    {
      key: 'gqueue',
      icon: FiUsers,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-800/20',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Real-time Analytics', 'Multi-language Support', 'Digital Displays', 'Wait Time Optimization'],
      clients: '10+ Healthcare Facilities'
    },
    {
      key: 'gtele',
      icon: FiVideo,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-50 to-pink-100 dark:from-rose-900/20 dark:to-pink-800/20',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Secure File Sharing', 'Live Video Streaming', 'Remote Diagnosis', 'Multi-facility Support'],
      clients: 'Integrated with eHMS'
    }
  ];

  const selectedProductData = products.find(p => p.key === selectedProduct) || products[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-full mb-6"
          >
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Our Product Suite
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t('products.title')}
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            {t('products.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-3"
          >
            {products.map((product) => {
              const IconComponent = product.icon;
              const isSelected = selectedProduct === product.key;
              
              return (
                <motion.button
                  key={product.key}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProduct(product.key)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    isSelected
                      ? `bg-gradient-to-r ${product.color} text-white shadow-lg`
                      : 'bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/20' : `bg-gradient-to-r ${product.color}`
                    }`}>
                      <IconComponent className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-white'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">
                        {t(`products.${product.key}.title`)}
                      </h3>
                      <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                        {product.clients}
                      </p>
                    </div>
                    <FiArrowRight className={`w-5 h-5 transition-transform ${
                      isSelected ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Product Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-br ${selectedProductData.bgColor} rounded-2xl p-8 shadow-lg`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedProductData.color} flex items-center justify-center shadow-lg`}>
                        <selectedProductData.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {t(`products.${selectedProduct}.title`)}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedProductData.clients}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t(`products.${selectedProduct}.description`).substring(0, 200)}...
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProductData.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <FiCheck className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 bg-gradient-to-r ${selectedProductData.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all`}
                      >
                        Request Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <img
                        src={selectedProductData.image}
                        alt={t(`products.${selectedProduct}.title`)}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Join 100+ organizations across Tanzania that have revolutionized their operations with our solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;