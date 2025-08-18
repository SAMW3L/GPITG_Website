import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall, ChevronRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-blue-100 mb-8">
                  Contact us today to discuss how our IT solutions can help your business grow and succeed in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
                  >
                    Get Started <ChevronRight size={18} className="ml-1" />
                  </Link>
                  <a
                    href="tel:+255733384334"
                    className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
                  >
                    <PhoneCall size={18} className="mr-2" /> Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Business meeting"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;