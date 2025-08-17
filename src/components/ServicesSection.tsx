import React from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiCode, FiLink, FiTool, FiTrendingUp, FiHeart, FiBriefcase } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'projectManagement',
      icon: FiSettings,
      color: 'from-blue-500 to-cyan-500',
      description: 'We have assisted organizational projects in terms of risk management, scheduling management, communications management, leadership, quality management, cost management and much more.'
    },
    {
      key: 'systemDesign',
      icon: FiCode,
      color: 'from-teal-500 to-green-500',
      description: 'We design and develop e-Systems that cater for African actual needs and requirements. This concept is pretty vibrant and it is already happening whereby all our clients are plentifully succeeding.'
    },
    {
      key: 'systemsIntegration',
      icon: FiLink,
      color: 'from-purple-500 to-pink-500',
      description: 'GPITG is equipped with innovative engineers\' team that has lengthy experience and strong knowledge with amazing skills to make various organizational IT systems to "talk to each other" through the integration technologies.'
    },
    {
      key: 'implementation',
      icon: FiTool,
      color: 'from-orange-500 to-red-500',
      description: 'We deeply understand the importance of quality implementation and support thereafter. Once deployed. We provide clients with the escalation matrix to assist them in reaching us to the specific solution provider.'
    }
  ];

  const highlights = [
    {
      key: 'performance',
      icon: FiTrendingUp,
      color: 'from-green-500 to-teal-500',
      title: 'Performance',
      content: 'We believe in the success of our clients by deploying e-solutions that bring useful real-time results powered by by automatic back-up tools etc. Our products are developed with ERP design, meaning that carter for the entire business circle – the core business automation, accounting & finance, human resources management, powerful reporting tools and much more.'
    },
    {
      key: 'innovation',
      icon: FiHeart,
      color: 'from-yellow-500 to-orange-500',
      title: 'Innovation',
      content: 'Innovation is our critical success factor for the increased market competitiveness. We creatively focus in implementing new ideas, create dynamic products such that we ensure proactive improvement in our existing and future Information and Communication Technology (ICT) Consulting services.'
    },
    {
      key: 'businessSolutions',
      icon: FiBriefcase,
      color: 'from-indigo-500 to-purple-500',
      title: 'Business Solutions',
      content: 'We create e-solutions that are easy to use, very secure and accessible from various environment (Web, Mobile etc). Our solutions deployment approach involve intensive training of actual system, computer literacy, change management and adoption. We therefore understand that once deployed, our e-Solutions become the back-bones of our client\'s businesses operations. Thats why we offer unmatched and timely continuous support & maintenance services!'
    }
  ];

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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-24 h-24 bg-blue-200/20 dark:bg-blue-800/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-20 w-16 h-16 bg-teal-200/20 dark:bg-teal-800/20 rounded-lg rotate-45"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 left-20 w-20 h-20 bg-purple-200/20 dark:bg-purple-800/20 rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlighted Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={highlight.key}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5`}></div>
                
                <div className="relative z-10 p-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {highlight.content}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${highlight.color}`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
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
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Let us help you implement the perfect ICT solution for your organization's needs.
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

export default ServicesSection;