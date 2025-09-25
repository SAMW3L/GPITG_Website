import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Headphones,
  ChevronRight,
  CheckCircle,
  Users2,
  Code2Icon,
  Globe
} from 'lucide-react';
import { ImConnection } from 'react-icons/im';
import { FaCogs } from 'react-icons/fa';

const Services: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Our Services - GPITG Limmited';
    
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  }, [location]);

  const services = [

    {
      id: 'system-dev',
      title: 'System Design & Development',
      icon: <Code2Icon className="w-16 h-16 text-blue-500" />,
      description: 'We develop custom software solutions to streamline your business processes.',
      features: [
        'Custom software development',
        'Enterprise resource planning (ERP) systems',
        'Customer relationship management (CRM) systems',
        'Inventory management systems',
        'Cloud-based solutions',
        'Integration with existing systems',
      ],
    },

     {
      id: 'project-management',
      title: 'Project Management',
      icon: <Globe className="w-16 h-16 text-blue-500" />,
      description: 'We have assisted organizational projects in terms of risk management scheduling management communications management leadership quality management cost management and much more.',
      features: [
        'Risk management',
        'Scheduling management',
        'Communications management',
        'Leadership and team coordination',
        'Quality management',
        'Cost management and budgeting',
      ],
    },
   
    {
      id: 'system-intergation',
      title: 'Systems Integration',
      icon: <FaCogs className='w-16 h-16 text-blue-500' />,
      description: 'GPITG is equipped with innovative engineers’ team that has lengthy experience and strong knowledge with amazing skills to make various organizational IT systems to “talk to each other” through the integration technologies.',
      features: [
        'e-banking integrations',
        'mobile payments integrations',
        'insurance systems integrations (e.g. NHIF)',
        'machinery integrations (Hematology, Biochemistry, X-rays, CT Scans, MRI etc)'
      ]
    },

    {
      id: 'hosting',
      title: 'Website design, Development, Hosting & Maintenance, SEO & Digital Marketing',
      icon: <Search className="w-16 h-16 text-blue-500" />,
      description: 'We provide reliable hosting services and regular maintenance to keep your website running smoothly.',
      features: [
        'Web application development',
        'Website maintenance and support',
        'Responsive design for all devices',
        'Secure and reliable web hosting',
        'Regular backups and updates',
        'Performance optimization',
        'Security monitoring and protection',
        'Technical support',
        'Domain name registration and management',
        'Search engine optimization (SEO)',
        'Social media marketing',
        'Pay-per-click (PPC) advertising',
        'Content marketing,Analytics and reporting, Email marketing',
      ]
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      icon: <Headphones className="w-16 h-16 text-blue-500" />,
      description: 'We provide strategic advice to help your business make informed technology decisions.',
      features: [
        'IT strategy development',
        'Technology assessment and recommendations',
        'Project management',
        'Business process optimization',
        'Digital transformation consulting',
        'IT infrastructure planning',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Comprehensive IT solutions designed to help your business thrive in the digital world.
          </p>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="sticky top-20 bg-white shadow-md z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={`px-4 py-2 whitespace-nowrap rounded-md transition-colors ${
                    activeSection === service.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveSection(service.id)}
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                    >
                      Get Started <ChevronRight size={18} className="ml-1" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}
                  >
                    <div className="bg-gray-200 rounded-lg p-8 h-full flex items-center justify-center">
                      <img
                        src={`https://images.pexels.com/photos/${3000 + index * 100}/pexels-photo-${3000 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                        alt={service.title}
                        className="rounded-lg shadow-md max-h-80 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-200 to-sky-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can benefit your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center"
          >
            Contact Us <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;