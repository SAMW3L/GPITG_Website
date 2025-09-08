import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Lightbulb, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - GPITG Limited';
  }, []);

  const partners = [
    {
      name: 'NMB BANK',
      logo: '/logo.png',
      description: 'Leading financial institution in Tanzania',
      category: 'Banking'
    },
    {
      name: 'CRDB BANK',
      logo: '/logo.png',
      description: 'Trusted banking partner for financial integration',
      category: 'Banking'
    },
    {
      name: 'AZANIA BANK',
      logo: '/logo.png',
      description: 'Regional banking excellence and innovation',
      category: 'Banking'
    },
    {
      name: 'NHIF',
      logo: '/logo.png',
      description: 'National Health Insurance Fund - Healthcare financing',
      category: 'Healthcare'
    },
    {
      name: 'JUBILEE',
      logo: '/logo.png',
      description: 'Insurance and financial services provider',
      category: 'Insurance'
    },
    {
      name: 'CHF',
      logo: '/logo.png',
      description: 'Community Health Fund - Community healthcare',
      category: 'Healthcare'
    },
    {
      name: 'MOH Tanzania',
      logo: '/logo.png',
      description: 'Ministry of Health Tanzania - Healthcare governance',
      category: 'Government'
    },
    {
      name: 'eGA',
      logo: '/logo.png',
      description: 'e-Government Authority - Digital government services',
      category: 'Government'
    }
  ];

  const values = [
    {
      id: 1,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed client expectations.',
      icon: <Award className="w-12 h-12 text-sky-500" />,
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'We embrace innovation and stay at the forefront of technology to provide cutting-edge solutions.',
      icon: <Lightbulb className="w-12 h-12 text-sky-500" />,
    },
    {
      id: 3,
      title: 'Client Focus',
      description: 'We prioritize our clients\' needs and work collaboratively to achieve their business objectives.',
      icon: <Target className="w-12 h-12 text-sky-500" />,
    },
    {
      id: 4,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and foster a supportive environment where ideas flourish.',
      icon: <Users className="w-12 h-12 text-sky-500" />,
    },
  ];

  const benefits = [
    'Cutting-edge technology solutions',
    'Experienced and skilled professionals',
    'Customized approach to meet your needs',
    'Timely delivery and excellent support',
    'Cost-effective solutions without compromising quality',
    'Long-term partnership and continuous improvement',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-400/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-sky-400/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              🏢 About GPITG Limited
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GPITG Limited</h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              We are a Tanzanian ICT organization dedicated to bridging the technology gap in Africa through innovative, locally developed solutions that deliver real results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
                📖 Our Story
              </span>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story & Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                GPITG Limited is a locally based Information Technology Consulting Firm in Dar es Salaam, Tanzania, 
                offering technology consulting and custom-made business automation solutions that align business 
                processes with technology for organizations in various industries.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been one of continuous learning, innovation, and growth. As technology has evolved, 
                so have we, expanding our services to meet the changing needs of organizations in the digital age.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to be a trusted partner for organizations of all sizes, from startups to established 
                enterprises. Our team of experienced professionals is committed to delivering excellence in everything 
                we do, helping our clients achieve their goals and stay ahead of the competition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="text-sky-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                <iframe
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/gx7HSq35OJQ?autoplay=0&controls=1"
                  title="eHMS NHIF E-billing at Kinondoni Hospital"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
              💎 Our Values
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-sky-200 group"
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
              🤝 Strategic Partners
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Trusted Partners</h2>
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
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sky-200"
              >
                <div className="aspect-square bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:from-sky-100 group-hover:to-sky-200 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/100x100/0ea5e9/ffffff?text=${partner.name.replace(' ', '+')}`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 group-hover:text-sky-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs text-sky-600 text-center mb-2 font-medium">
                  {partner.category}
                </p>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  Financial Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration with major banks and financial institutions for secure transactions and payment processing.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  Healthcare Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Partnerships with health authorities ensure compliance and quality healthcare delivery across Tanzania.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  Government Collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Working with government agencies to digitize and improve public services for better citizen experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
                🌟 Why Choose Us
              </span>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose GPITG Limited</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At GPITG Limited, we're more than just an IT service provider – we're your technology partner. 
                Here's why clients choose us and continue to work with us:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">Expert Team</h4>
                    <p className="text-gray-600">Our team comprises skilled professionals with deep expertise in their respective fields.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">Tailored Solutions</h4>
                    <p className="text-gray-600">We create customized solutions designed specifically for your business needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">Cutting-edge Technology</h4>
                    <p className="text-gray-600">We stay at the forefront of technology to provide innovative solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">Exceptional Support</h4>
                    <p className="text-gray-600">We provide ongoing support and maintenance to ensure your solutions continue to deliver value.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">Results-Driven Approach</h4>
                    <p className="text-gray-600">We focus on delivering measurable results that contribute to your organization's success.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;