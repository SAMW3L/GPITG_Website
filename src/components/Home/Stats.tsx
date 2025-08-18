import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Clock, Award } from 'lucide-react';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-6 text-center"
    >
      <div className="flex justify-center mb-4">{stat.icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
      <p className="text-gray-600">{stat.title}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;