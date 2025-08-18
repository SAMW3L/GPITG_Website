import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Product = {
  id: number;
  title: string;
  category: 'system' | 'mobile';
  image: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
};

type Category = 'all' | 'system' | 'mobile';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Our Products - GPITG Limited';
    
    // Move the products array inside the useEffect to fix the dependency error
    const products: Product[] = [
      {
        id: 1,
        title: 'eHMS',
        category: 'system',
        image: '/ehms.png',
        status: '20+ Healthcare Facilities',
        shortDescription: 'A locally developed, comprehensive and integrated healthcare management system designed for healthcare facilities.',
        fullDescription: 'eHMS is a locally developed, comprehensive and integrated healthcare management system designed for healthcare facilities looking to enhance the quality of their healthcare services by moving from manual to a digital platform.',
        features: [
          'Patient Management',
          'NHIF Integration',
          'Telemedicine Ready',
          'Real-time Analytics',
        ],
      },
  
      {
        id: 2,
        title: 'G-PoS',
        category: 'system',
        image: '/gpos.png',
        status: '50+ Retail Businesses',
        shortDescription: 'The right point of sale system vital for any retail or wholesale business.',
        fullDescription: 'The right point of sale system is vital for any retail or wholesale business. With G-PoS, management can accomplish controls of business sales, inventory, expenses, and more with greater proficiency.',
        features: [
          'Multi-payment Options',
          'Inventory Management',
          'TRA Integration',
          'Branch Connectivity',
        ],
      },
      {
        id: 3,
        title: 'G-Pesa',
        category: 'system',
        image: '/gpesa.png',
        status: 'Enterprise Ready',
        shortDescription: 'Integrated payment system connecting banks and mobile networks with an intuitive business interface.',
        fullDescription: 'Integrated payment system connecting banks and mobile networks with an intuitive business interface built with ERP design for complete business automation.',
        features: [
          'Bank Integration',
          'Mobile Money',
          'ERP Design',
          'Business Automation',
        ],
      },
      {
        id: 4,
        title: 'G-Appointment',
        category: 'system',
        image: '/gappointment.png',
        status: '15+ Medical Centers',
        shortDescription: 'State-of-the-art electronic appointment management system.',
        fullDescription: 'G-Appointment is a state-of-the-art electronic appointment management system allowing patients to request doctor or clinic appointments from their location convenience.',
        features: [
          'Multi-platform Access',
          'Self Check-in',
          'NHIF Integration',
          'Real-time Scheduling',
        ],
      },
      {
        id: 5,
        title: 'G-Queue',
        category: 'system',
        image: '/gqueue.png',
        status: '10+ Healthcare Facilities',
        shortDescription: 'Electronic queue management solution designed specifically for healthcare environments.',
        fullDescription: 'G-Queue is an electronic queue management solution designed specifically for healthcare environments with real-time analytics and multilingual support.',
        features: [
          'Real-time Analytics',
          'Multi-language Support',
          'Digital Displays',
          'Wait Time Optimization',
        ],
      },
      {
        id: 6,
        title: 'G-TELE',
        category: 'system',
        image: '/gtele.png',
        status: 'Integrated with eHMS',
        shortDescription: 'Remote diagnosing and treatment platform enabling healthcare professionals to evaluate, diagnose and treat patients at a distance.',
        fullDescription: 'G-Tele is a remote diagnosing and treatment platform enabling healthcare professionals to evaluate, diagnose and treat patients at a distance with secure file sharing.',
        features: [
          'Secure File Sharing',
          'Live Video Streaming',
          'Remote Diagnosis',
          'Multi-facility Support',
        ],
      },
    ];

    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]); // The dependency is now just selectedCategory

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'system', name: 'System Development' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const handleLearnMoreClick = (id: number) => {
    setExpandedProduct(expandedProduct === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our innovative products designed to solve real-world problems.
          </p>
        </div>
      </div>

      {/* Products Filter */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`px-6 py-2 rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative h-56">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.status}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {expandedProduct === product.id ? product.fullDescription : product.shortDescription}
                  </p>
                  
                  {expandedProduct === product.id && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {product.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleLearnMoreClick(product.id)}
                      className="w-full sm:w-auto px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
                    >
                      {expandedProduct === product.id ? 'Show Less' : 'Learn More'}
                    </button>
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center"
          >
            Get Started <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;