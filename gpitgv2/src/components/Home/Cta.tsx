import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall, ChevronRight, MessageCircle, Mail, MapPin } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-sky-500/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main CTA */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-6">
                  🚀 Ready to Transform?
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-sky-100 text-lg mb-8 leading-relaxed">
                  Join over 200+ satisfied clients who have transformed their operations with our innovative solutions. 
                  Let's discuss how we can help your organization achieve its digital transformation goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="group bg-white text-sky-700 hover:bg-sky-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    Get Started Today 
                    <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+255717531539"
                    className="group bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                  >
                    <PhoneCall size={20} className="mr-2 group-hover:animate-pulse" /> 
                    Call Us Now
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sky-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Available 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Local Support</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Call Us Directly</h3>
                    <p className="text-sky-200 text-sm">Speak with our experts</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="tel:+255717531539" className="block text-white hover:text-sky-200 transition-colors">
                    +255 717 531 539
                  </a>
                  <a href="tel:+255753290357" className="block text-white hover:text-sky-200 transition-colors">
                    +255 753 290 357
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <p className="text-sky-200 text-sm">Get detailed information</p>
                  </div>
                </div>
                <a href="mailto:info@gpitg.co.tz" className="text-white hover:text-sky-200 transition-colors">
                  info@gpitg.co.tz
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Visit Our Office</h3>
                    <p className="text-sky-200 text-sm">Located in Dar es Salaam</p>
                  </div>
                </div>
                <p className="text-white">
                  Dar es Salaam, Tanzania
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;