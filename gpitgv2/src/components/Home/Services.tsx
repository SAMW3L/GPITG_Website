import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Cog, 
  Search, 
  Headphones, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'System Design & Development',
      description: 'Custom software solutions designed specifically for African market needs and requirements.',
      icon: <Code2 className="w-8 h-8" />,
      features: ['Custom ERP Systems', 'Healthcare Management', 'Business Automation'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Project Management',
      description: 'Comprehensive project management services including risk, scheduling, and quality management.',
      icon: <Globe className="w-8 h-8" />,
      features: ['Risk Management', 'Quality Assurance', 'Team Leadership'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 3,
      title: 'Systems Integration',
      description: 'Making various organizational IT systems communicate seamlessly through integration technologies.',
      icon: <Cog className="w-8 h-8" />,
      features: ['Banking Integration', 'Medical Devices', 'Payment Systems'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Web Development & Digital Marketing',
      description: 'Modern web solutions with comprehensive digital marketing strategies for online growth.',
      icon: <Search className="w-8 h-8" />,
      features: ['Responsive Websites', 'SEO Optimization', 'Digital Marketing'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Strategic IT consultation with professional expertise and accurate business advice.',
      icon: <Headphones className="w-8 h-8" />,
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
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
            💼 Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a complete range of technology services designed to transform your business operations and drive growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <ArrowRight size={14} className="text-sky-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/services"
                className="text-sky-600 font-semibold hover:text-sky-700 transition-colors flex items-center group-hover:translate-x-2 transform transition-transform duration-300"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our comprehensive IT solutions can help your organization achieve its goals.
            </p>
            <Link
              to="/services"
              className="group bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 inline-flex items-center btn-bounce"
            >
              View All Services
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;