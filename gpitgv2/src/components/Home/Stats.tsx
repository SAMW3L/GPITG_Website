import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Clock, Award, TrendingUp, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Satisfied Clients',
    value: '200+',
    icon: <Users className="w-10 h-10 text-sky-500" />,
    description: 'Happy clients across Tanzania',
    color: 'from-sky-400 to-sky-600'
  },
  {
    id: 2,
    title: 'Projects Completed',
    value: '30+',
    icon: <Briefcase className="w-10 h-10 text-emerald-500" />,
    description: 'Successful implementations',
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 3,
    title: 'Years of Experience',
    value: '10+',
    icon: <Clock className="w-10 h-10 text-purple-500" />,
    description: 'Years serving the market',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 4,
    title: 'Healthcare Facilities',
    value: '100+',
    icon: <Award className="w-10 h-10 text-orange-500" />,
    description: 'Using our eHMS system',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 5,
    title: 'Growth Rate',
    value: '250%',
    icon: <TrendingUp className="w-10 h-10 text-pink-500" />,
    description: 'Annual business growth',
    color: 'from-pink-400 to-pink-600'
  },
  {
    id: 6,
    title: 'Regional Reach',
    value: '5+',
    icon: <Globe className="w-10 h-10 text-indigo-500" />,
    description: 'Regions across Tanzania',
    color: 'from-indigo-400 to-indigo-600'
  },
];

const StatCard: React.FC<{
  stat: typeof stats[0];
  index: number;
}> = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center overflow-hidden border border-gray-100"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Icon with animated background */}
      <div className="relative">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
          <div className="text-white">
            {stat.icon}
          </div>
        </div>
      </div>
      
      {/* Counter Animation */}
      <motion.h3 
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
      >
        {stat.value}
      </motion.h3>
      
      <h4 className="text-lg font-semibold text-gray-800 mb-1">{stat.title}</h4>
      <p className="text-gray-600 text-sm">{stat.description}</p>
      
      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-sky-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-sky-600 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-500 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            📊 Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Numbers That Tell Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over the years, we've built a strong track record of delivering exceptional results for our clients across Tanzania and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help transform your organization with our proven solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;