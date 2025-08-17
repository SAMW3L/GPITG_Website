import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiUsers } from 'react-icons/fi';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Adelard Nsaho Kiliba',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Visionary leader with over 15 years of experience in ICT solutions for African markets.',
      linkedin: '#',
      email: 'adelard@gpitg.co.tz'
    },
    {
      name: 'Dr. Amina Mwalimu',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Healthcare technology expert leading our innovative solutions development.',
      linkedin: '#',
      email: 'amina@gpitg.co.tz'
    },
    {
      name: 'James Mwanza',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Software architect with extensive experience in enterprise system integration.',
      linkedin: '#',
      email: 'james@gpitg.co.tz'
    },
    {
      name: 'Sarah Kimbo',
      role: 'Head of Business Development',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Strategic partnerships and business growth specialist for African markets.',
      linkedin: '#',
      email: 'sarah@gpitg.co.tz'
    }
  ];

  const teamDescription = 'GPITG is comprised of number of professionals from various backgrounds including but not limited to certified software engineers with deep understanding and knowledge in number of programming languages and databases, certified systems and information security professionals, certified project management professionals, medical practitioners (Doctors, Nurses etc), accounting & finance (CPA holders), legal, business management et cetera.';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mb-6"
          >
            <FiUsers className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our Team
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            {teamDescription}
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.linkedin}
                  className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FiLinkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <FiMail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating innovative ICT solutions for Africa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;