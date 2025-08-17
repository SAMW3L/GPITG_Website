import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiTrendingUp, FiHeart, FiCalendar, FiUsers } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

interface CounterProps {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(from + (to - from) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    const timeout = setTimeout(updateCount, 200);
    return () => clearTimeout(timeout);
  }, [from, to, duration, isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
};

const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      key: 'revenue',
      icon: FiTrendingUp,
      value: 300,
      suffix: '%+',
      color: 'from-green-500 to-teal-500',
      bg: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      key: 'hospitals',
      icon: FiHeart,
      value: 20,
      suffix: '+',
      color: 'from-red-500 to-pink-500',
      bg: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
    },
    {
      key: 'years',
      icon: FiCalendar,
      value: 5,
      suffix: '+',
      color: 'from-blue-500 to-indigo-500',
      bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
    },
    {
      key: 'clients',
      icon: FiUsers,
      value: 100,
      suffix: '+',
      color: 'from-purple-500 to-violet-500',
      bg: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20'
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.key}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className={`relative bg-gradient-to-br ${stat.bg} rounded-2xl p-8 text-center group transition-all duration-300`}
              >
                {/* Icon Background */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Counter */}
                  <div className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                    <Counter 
                      from={0} 
                      to={stat.value} 
                      duration={2000} 
                      suffix={stat.suffix}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    {t(`stats.${stat.key}`).replace(`${stat.value}${stat.suffix} `, '')}
                  </p>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Floating Animation */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute top-2 right-2 w-3 h-3 bg-white/30 rounded-full"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
            <span className="text-sm font-medium">Trusted by organizations across Tanzania</span>
            <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;