import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const benefits = [
    'Cutting-edge technology solutions',
    'Experienced and skilled professionals',
    'Customized approach to meet your needs',
    'Timely delivery and excellent support',
    'Cost-effective solutions without compromising quality',
    'Long-term partnership and continuous improvement',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium mb-2 block">About GPITG Limmited</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We're Committed to Delivering Excellence in IT Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              GPITG Limmited is a leading IT services company based in Dar es Salaam, Tanzania. We specialize in 
              providing innovative technology solutions that help businesses of all sizes achieve their goals 
              and stay ahead in today's competitive digital landscape.
            </p>
            <p className="text-gray-600 mb-8">
              With our team of experienced professionals and commitment to excellence, we deliver high-quality 
              services tailored to meet the unique needs of each client. Our comprehensive approach ensures that 
              your business not only gets the technology solutions it needs but also the ongoing support to 
              maximize their effectiveness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Learn More About Us <ChevronRight size={18} className="ml-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-blue-600 absolute top-8 -left-8 w-72 h-72 rounded-lg opacity-20 lg:block hidden"></div>
            <div className="bg-blue-600 absolute -bottom-8 -right-8 w-72 h-72 rounded-lg opacity-20 lg:block hidden"></div>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team working together"
              className="rounded-lg shadow-xl relative z-10 w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;