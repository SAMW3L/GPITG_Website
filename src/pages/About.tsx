import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Lightbulb, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - GPITG Limmited';
  }, []);


  //   {
  //     id: 1,
  //     name: 'Adelard Nsaho Kiliba',
  //     position: 'CEO & Founder',
  //     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   },
  //   {
  //     id: 2,
  //     name: 'Madam Dola Woiso',
  //     position: 'COO',
  //     image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   },
  //   {
  //     id: 3,
  //     name: 'Thomas Mwakalimbile',
  //     position: 'Marketing Director',
  //     image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   },
  //   {
  //     id: 4,
  //     name: 'Mussa Machella',
  //     position: 'CTO',
  //     image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      
  //   },
  //   {
  //     id: 5,
  //     name: 'Evance Mosha',
  //     position: 'Lead Developer',
  //     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     id: 5,
  //     name: 'Revocatus Mweusi',
  //     position: 'Supervisor',
  //     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     id: 5,
  //     name: 'Samwel Mwaipopo',
  //     position: 'Nobody',
  //     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     id: 5,
  //     name: 'Chief Nemes',
  //     position: 'Chief',
  //     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   }
  // ];

  const values = [
    {
      id: 1,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed client expectations.',
      icon: <Award className="w-12 h-12 text-blue-500" />,
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'We embrace innovation and stay at the forefront of technology to provide cutting-edge solutions.',
      icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
    },
    {
      id: 3,
      title: 'Client Focus',
      description: 'We prioritize our clients\' needs and work collaboratively to achieve their business objectives.',
      icon: <Target className="w-12 h-12 text-blue-500" />,
    },
    {
      id: 4,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and foster a supportive environment where ideas flourish.',
      icon: <Users className="w-12 h-12 text-blue-500" />,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About GPITG Limmited</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
We are a Tanzanian ICT organization dedicated to bridging the technology gap in Africa through innovative, locally developed solutions that deliver real results.
          </p>
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
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                GPITG is a locally based Information Technology Consulting Firm based in Dar-es-salaam, Tanzania
                 that offers technology consulting and custom-made business automation solutions that align business processes with technology for organizations in various industries.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been one of continuous learning, innovation, and growth. As technology has evolved, 
                so have we, expanding our services to meet the changing needs of Organization in the digital age.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a trusted partner for Organization of all sizes, from startups to established 
                enterprises. Our team of experienced professionals is committed to delivering excellence in everything 
                we do, helping our clients achieve their goals and stay ahead of the competition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our team working together"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
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
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose GPITG Limmited</h2>
              <p className="text-gray-600 mb-6">
                At GPITG Limmited, we're more than just an IT service provider – we're your technology partner. 
                Here's why clients choose us and continue to work with us:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold">Expert Team</h4>
                    <p className="text-gray-600">Our team comprises skilled professionals with deep expertise in their respective fields.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold">Tailored Solutions</h4>
                    <p className="text-gray-600">We create customized solutions designed specifically for your business needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold">Cutting-edge Technology</h4>
                    <p className="text-gray-600">We stay at the forefront of technology to provide innovative solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold">Exceptional Support</h4>
                    <p className="text-gray-600">We provide ongoing support and maintenance to ensure your solutions continue to deliver value.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold">Results-Driven Approach</h4>
                    <p className="text-gray-600">We focus on delivering measurable results that contribute to your Organization success.</p>
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