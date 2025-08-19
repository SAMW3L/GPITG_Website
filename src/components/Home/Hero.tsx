import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-400  to-sky-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-indigo-600 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Innovative ICT Solutions for Modern Africa</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-blue-400">
                Business Growth
              </span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions that Transforming healthcare, retail, and business operations across Tanzania and out side with locally developed, comprehensive e-solutions that deliver real results..
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Get Involved <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-blue-50 text-blue-600 font-medium py-3 px-6 rounded-md transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Services
            </Link>
          </motion.div>
          
  
        </div>
      </div>
    </div>
  );
};

export default Hero;