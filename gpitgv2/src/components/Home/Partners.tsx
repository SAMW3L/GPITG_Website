import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'NMB BANK',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      description: 'Leading financial institution in Tanzania'
    },
    {
      name: 'CRDB BANK',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      description: 'Trusted banking partner'
    },
    {
      name: 'AZANIA BANK',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      description: 'Regional banking excellence'
    },
    {
      name: 'NHIF',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop&crop=center',
      description: 'National Health Insurance Fund'
    },
    {
      name: 'JUBILEE',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop&crop=center',
      description: 'Insurance and financial services'
    },
    {
      name: 'CHF',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop&crop=center',
      description: 'Community Health Fund'
    },
    {
      name: 'MOH Tanzania',
      logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop&crop=center',
      description: 'Ministry of Health Tanzania'
    },
    {
      name: 'eGA',
      logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop&crop=center',
      description: 'e-Government Authority'
    }
  ];

  return (
    <section id="partners-section" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-400 to-sky-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            🤝 Trusted Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations across Tanzania to deliver comprehensive solutions that make a real impact in healthcare, finance, and government sectors.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200">
                <div className="aspect-video bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/200x100/0ea5e9/ffffff?text=${partner.name.replace(' ', '+')}`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-center mb-2 group-hover:text-sky-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Financial Integration</h3>
              <p className="text-gray-600">Seamless integration with major banks and financial institutions for secure transactions.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Healthcare Excellence</h3>
              <p className="text-gray-600">Partnerships with health authorities ensure compliance and quality healthcare delivery.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Government Collaboration</h3>
              <p className="text-gray-600">Working with government agencies to digitize and improve public services.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;