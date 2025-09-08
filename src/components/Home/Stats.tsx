import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Clock, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    id: 1,
    title: 'Satisfied Clients',
    value: '200+',
    icon: <Users className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 2,
    title: 'Projects Completed',
    value: '30+',
    icon: <Briefcase className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 3,
    title: 'Years of Experience',
    value: '10+',
    icon: <Clock className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 4,
    title: 'Awards Won',
    value: '25+',
    icon: <Award className="w-10 h-10 text-blue-500" />,
  },
];

const StatCard: React.FC<{
  stat: typeof stats[0];
  index: number;
}> = ({ stat, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', damping: 15 }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
      className="relative bg-white rounded-xl shadow-lg p-8 text-center overflow-hidden transform transition-transform duration-300 ease-in-out"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={inView ? { rotate: 360 } : {}}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }}
          className="mb-4"
        >
          {stat.icon}
        </motion.div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 font-poppins">{stat.value}</h3>
        <p className="text-gray-700 text-lg md:text-xl font-medium font-sans">{stat.title}</p>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;