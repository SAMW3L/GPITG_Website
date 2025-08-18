import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  
  Smartphone, 
  Server, 
  Database, 
  Search, 
  Headphones, 
  ChevronRight, 
  Code2Icon
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'System Design & Development',
    description: 'We design and develop e-Systems that cater for African actual needs and requirements. This concept is pretty vibrant and it is already happening whereby all our clients are plentifully succeeding.',
    icon: <Code2Icon className="w-10 h-10 text-blue-500" />,
    link: '/services#system-dev',
  },
  {
    id: 2,
    title: 'Project Management',
    description: 'We have assisted organizational projects in terms of risk management, scheduling management, communications management, leadership, quality management, cost management and much more.',
    icon: <Smartphone className="w-10 h-10 text-blue-500" />,
    link: '/services#project-management',
  },
  {
    id: 3,
    title: 'Systems Integration',
    description: 'GPITG is equipped with innovative engineers team that has lengthy experience and strong knowledge with amazing skills to make various organizational IT systems to talk to each other through the integration technologies',
    icon: <Server className="w-10 h-10 text-blue-500" />,
    link: '/services#system-intergration',
  },
  {
    id: 4,
    title: 'Website design, Development, Hosting & Maintenance, SEO & Digital Marketing',
    description: 'Reliable hosting services with regular maintenance to keep your website secure and optimized, Improve your online visibility and attract more customers with our comprehensive digital marketing strategies..',
    icon: <Database className="w-10 h-10 text-blue-500" />,
    link: '/services#hosting',
    // web-design
  },
  {
    id: 5,
    title: 'IT Consulting',
    description: 'We offer IT Consultation to Bussiness or personal company with accurate advices and services from professional experties.',
    icon: <Search className="w-10 h-10 text-blue-500" />,
    link: '/services#consulting',
  },
  {
    id: 6,
    title: 'Systems Implementation & Support',
    description: 'We deeply understand the importance of quality implementation and support thereafter. Once deployed. We provide clients with the escalation matrix to assist them in reaching us to the specific solution provider',
    icon: <Headphones className="w-10 h-10 text-blue-500" />,
    link: '/services#consulting',
  },
];

const ServiceCard: React.FC<{
  service: typeof services[0];
  index: number;
}> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
      <Link
        to={service.link}
        className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
      >
        Learn More <ChevronRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of IT services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            View All Services <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;