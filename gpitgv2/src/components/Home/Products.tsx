import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'eHMS',
      subtitle: 'Electronic Health Management System',
      description: 'Comprehensive healthcare management system serving 100+ facilities with NHIF integration.',
      image: '/ehms.png',
      status: '100+ Healthcare Facilities',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'G-PoS',
      subtitle: 'Point of Sale System',
      description: 'Advanced POS system for retail businesses with inventory management and TRA integration.',
      image: '/gpos.png',
      status: '50+ Retail Businesses',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      title: 'G-Pesa',
      subtitle: 'Digital Payment Solution',
      description: 'Integrated payment system with ERP design for complete business automation.',
      image: '/gpesa.png',
      status: 'Enterprise Ready',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'G-Appointment',
      subtitle: 'Appointment Management',
      description: 'Smart appointment system with multi-platform access and real-time scheduling.',
      image: '/gappointment.png',
      status: '15+ Medical Centers',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            💡 Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Innovative Solutions for Modern Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of locally developed products designed to transform operations across various industries.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/200x200/0ea5e9/ffffff?text=${product.title}`;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sky-600 text-xs font-semibold rounded-full">
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sky-600 font-semibold mb-3">{product.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <Link
                  to="/products"
                  className="text-sky-600 font-semibold hover:text-sky-700 transition-colors flex items-center group-hover:translate-x-2 transform transition-transform duration-300"
                >
                  Learn More <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
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
          <div className="bg-gradient-to-r from-sky-50 to-sky-100 rounded-2xl p-8 border border-sky-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore All Our Products</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover the complete range of innovative solutions designed to transform your business operations.
            </p>
            <Link
              to="/products"
              className="group bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 inline-flex items-center btn-bounce"
            >
              View All Products
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;