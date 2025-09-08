import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Globe, Award, HeartHandshake } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'NHIF Compliant',
      description: 'All our healthcare systems are fully compliant with NHIF standards and guidelines.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Integration',
      description: 'Seamless integration with medical devices, banks, and government systems.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Local Support',
      description: 'Dedicated local support team providing training and maintenance services.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud-Based',
      description: 'Secure cloud infrastructure ensuring 99.9% uptime and data protection.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Award Winning',
      description: 'Recognized solutions trusted by 100+ healthcare facilities across Tanzania.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Patient Focused',
      description: 'Designed to improve patient care and operational efficiency.',
      color: 'from-sky-500 to-sky-600'
    }
  ];

  return (
    <section id="features-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            ✨ Why Choose GPITG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for African Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our solutions are specifically designed to meet the unique needs of African healthcare systems and business environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sky-200"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;