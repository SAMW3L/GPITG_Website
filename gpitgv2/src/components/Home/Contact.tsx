import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+255 717 531 539', '+255 753 290 357'],
      description: 'Available Monday-Friday, 9am-6pm',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@gpitg.co.tz'],
      description: 'We\'ll respond within 24 hours',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Dar es Salaam, Tanzania'],
      description: 'Our office location',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-600/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-sky-600/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-sky-200 rounded-full text-sm font-medium mb-4">
              📞 Get In Touch
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Let's discuss how our innovative solutions can help your organization achieve its digital transformation goals. 
              Our team of experts is ready to provide you with personalized consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="group bg-white text-sky-900 hover:bg-sky-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center btn-bounce"
              >
                <MessageCircle size={20} className="mr-2" />
                Contact Us Now
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+255717531539"
                className="group bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center btn-bounce"
              >
                <Phone size={20} className="mr-2" />
                Call Direct
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sky-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Local Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Quick Response</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl text-white shadow-lg`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sky-200 text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;