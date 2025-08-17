import React from 'react';
import { motion } from 'framer-motion';
import {  FiHeart } from 'react-icons/fi';

const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'NMB Bank', logo: 'NMB', color: 'from-green-500 to-emerald-500' },
    { name: 'CRDB Bank', logo: 'CRDB', color: 'from-blue-500 to-cyan-500' },
    { name: 'Azania Bank', logo: 'AZANIA', color: 'from-purple-500 to-violet-500' },
    { name: 'Tanzania Revenue Authority', logo: 'TRA', color: 'from-red-500 to-pink-500' },
    { name: 'NHIF', logo: 'NHIF', color: 'from-teal-500 to-green-500' },
    { name: 'Vodacom Tanzania', logo: 'VODACOM', color: 'from-red-600 to-red-500' },
    { name: 'Airtel Tanzania', logo: 'AIRTEL', color: 'from-red-500 to-orange-500' },
    { name: 'Tigo Tanzania', logo: 'TIGO', color: 'from-blue-500 to-blue-600' }
  ];

  const partnerDescription = 'We aspire for greatness! To guarantee that we always partner with leading and innovative organizations as part of our strategic business operations. We have number of businesses that we work together to ensure success to both of our clients. Among partner businesses we have include NMB Bank, CRDB Bank, Azania Bank etc.';

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
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mb-6"
          >
            <FiHeart className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our Partners
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            {partnerDescription}
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center transition-all duration-300 group"
            >
              {/* Logo Placeholder */}
              <div className={`w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-sm">
                  {partner.logo}
                </span>
              </div>
              
              {/* Partner Name */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <FiHeart className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Strategic Partnerships Drive Success
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Through our strategic partnerships with leading financial institutions, mobile networks, and government agencies, 
              we ensure seamless integration and comprehensive solutions for our clients across Tanzania and beyond.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-blue-100">Strategic Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Integration Success</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Partner Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Partnership?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join our network of strategic partners and help us deliver innovative solutions across Africa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg"
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;