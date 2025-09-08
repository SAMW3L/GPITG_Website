import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, Zap, Shield } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Recognition',
      description: 'Recognized for excellence in healthcare IT solutions across Tanzania and East Africa.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Skilled professionals with deep domain expertise in healthcare and business systems.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Successful implementations across 100+ healthcare facilities and businesses.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions designed specifically for African market needs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance & Security',
      description: 'All systems are NHIF compliant and meet international security standards.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Continuous Support',
      description: 'Dedicated local support team providing training, maintenance, and updates.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    'Locally developed solutions',
    'NHIF and MOH compliant',
    'Real-time system integration',
    'Comprehensive training programs',
    '24/7 technical support',
    'Regular system updates',
    'Data security & backup',
    'Multi-language support'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            🏆 Why Choose GPITG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Technology Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just an IT service provider – we're your technology partner committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sky-200 group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${reason.color} mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-3xl p-8 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What You Get With GPITG
            </h3>
            <p className="text-gray-600 mb-8">
              When you choose GPITG, you're not just getting software – you're getting a complete solution with ongoing support and partnership.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-sky-700 transition-colors">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-sky-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">10+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Years of Excellence</h4>
                  <p className="text-gray-600 text-sm">Serving Tanzania's healthcare and business sectors</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;