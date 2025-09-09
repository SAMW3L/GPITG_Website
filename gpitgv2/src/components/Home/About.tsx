import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Users, Award, Target, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '200+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '100+', label: 'Healthcare Facilities', icon: <Award className="w-6 h-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Target className="w-6 h-6" /> },
    { number: '30+', label: 'Projects Completed', icon: <Zap className="w-6 h-6" /> }
  ];

  const features = [
    'Locally developed solutions',
    'NHIF and MOH compliant systems',
    'Real-time system integration',
    'Comprehensive training programs',
    '24/7 technical support',
    'Regular system updates'
  ];

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium mb-2 block">About GPITG Limmited</span>
             
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Africa Through Technology
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              GPITG Limited is a locally based Information Technology Consulting Firm in Dar es Salaam, Tanzania, 
              offering technology consulting and custom-made business automation solutions that align business 
              processes with technology for organizations across various industries.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to transform public and private operations through the use of locally made and 
              supported e-solutions. We believe in bridging the technology gap in Africa by developing 
              comprehensive systems that deliver real, measurable results.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="text-sky-500 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="group bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 inline-flex items-center btn-bounce"
            >
              Learn More About Us
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Video & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Video Container */}
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl mb-8">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/gx7HSq35OJQ?autoplay=0&controls=1"
                title="eHMS NHIF E-billing at Kinondoni Hospital"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full rounded-xl"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-sky-500 text-white rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-sky-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;