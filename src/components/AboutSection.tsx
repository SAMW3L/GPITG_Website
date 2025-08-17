import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiAward, FiTrendingUp, FiShield, FiUsers } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: FiTrendingUp, value: '300%+', label: 'Revenue Increase', color: 'from-green-500 to-emerald-500' },
    { icon: FiHeart, value: '20+', label: 'Healthcare Facilities', color: 'from-red-500 to-pink-500' },
    { icon: FiShield, value: '5+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
    { icon: FiUsers, value: '100+', label: 'Happy Clients', color: 'from-purple-500 to-violet-500' }
  ];

  const values = [
    {
      key: 'vision',
      icon: FiTarget,
      color: 'from-blue-500 to-cyan-500',
      title: 'Our Vision',
      content: 'To become a company that provides locally made, affordable, easy-to-use, high quality and useful Information Technology solutions to organizations in Africa.'
    },
    {
      key: 'mission',
      icon: FiHeart,
      color: 'from-teal-500 to-green-500',
      title: 'Our Mission',
      content: 'To provide Information Technology advisory services & custom software development services from simple to complex and integrated business processes.'
    },
    {
      key: 'values',
      icon: FiAward,
      color: 'from-purple-500 to-pink-500',
      title: 'Our Values',
      content: 'Collectively as company, our clients come first! We carefully listen to their needs, creatively analyze their desires and swiftly act to deliver the required solutions.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              About GPITG
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Transforming Africa Through Technology
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            We are a Tanzanian ICT organization dedicated to bridging the technology gap in Africa through 
            innovative, locally developed solutions that deliver real results.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Bridging the Digital Divide
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We understand the deep gap between developed and developing nations, particularly in how 
                technology is leveraged for business operations. Our mission is to fill this gap by building 
                e-Systems locally that cater to African requirements and needs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Proven Success
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our clients enjoy remarkable success with revenue increases of 300%+, business growth, 
                and transformation into high-performing organizations. We create applications that are 
                easy to use, intuitive, secure, and accessible from various environments.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Comprehensive Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our solutions deployment approach involves intensive training, computer literacy, 
                change management, and adoption support. We understand that our e-Solutions become 
                the backbone of our clients' operations, which is why we offer timely support and maintenance.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-lg font-bold">100+</div>
                <div className="text-sm">Clients Served</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vision, Mission, Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.key}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.content}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CEO Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="quote-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#quote-pattern)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <FiUsers className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                "The main focus of our group lies in locally developing innovative e-Solutions that are 
                locally maintained and supported. We want our customers to always succeed."
              </blockquote>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-4"></div>
              <cite className="text-lg opacity-90">Adelard Nsaho Kiliba, CEO</cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;