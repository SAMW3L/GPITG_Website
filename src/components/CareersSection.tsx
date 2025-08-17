import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMail } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

interface CareerFormData {
  name: string;
  email: string;
  cv: string;
  contribution: string;
}

const CareersSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CareerFormData>();

  const hiringContent = 'We desire in attaining continuous growth! For years we have delivered to our clients by meeting and exceeding their expectations. With that more clients are flocking to GPITG seeking for our professional services, so opportunities are thumping daily! For that we are in need of adding innovative, energetic, team players, critical thinking associates. So if you feel you do qualify with these characters and you desire to work with progressive organization, please do not hesitate to send you CV. With it, also include short (two paragraphs) information of how you aspire to contribute in the company if hired. We are in need of business, sales and ICT professionals. All information should be sent to… hr.idesiretodeliver@gpitg.co.tz';

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Career application:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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

  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Dar es Salaam, Tanzania',
      type: 'Full-time',
      description: 'Join our engineering team to develop innovative healthcare and business solutions for African markets.',
      requirements: ['5+ years of software development experience', 'Proficiency in React, Node.js, and databases', 'Experience with healthcare systems preferred'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Dar es Salaam, Tanzania',
      type: 'Full-time',
      description: 'Drive business growth by identifying new opportunities and building strategic partnerships across Tanzania.',
      requirements: ['3+ years of B2B sales experience', 'Strong networking and communication skills', 'Knowledge of ICT solutions market'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Healthcare Solutions Specialist',
      department: 'Product',
      location: 'Dar es Salaam, Tanzania',
      type: 'Full-time',
      description: 'Work closely with healthcare providers to implement and optimize our eHMS and AdeCare solutions.',
      requirements: ['Healthcare industry experience', 'Project management skills', 'Customer-facing experience'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote/Dar es Salaam',
      type: 'Full-time',
      description: 'Lead our digital marketing efforts to promote GPITG solutions across African markets.',
      requirements: ['Digital marketing experience', 'Content creation skills', 'Social media expertise'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <FiBriefcase className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Join Our Team
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            {hiringContent.substring(0, 200)}...
          </motion.p>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {openPositions.map((position, index) => (
            <motion.div
              key={position.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {position.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className={`px-3 py-1 bg-gradient-to-r ${position.color} text-white rounded-full`}>
                      {position.department}
                    </span>
                    <span>{position.location}</span>
                    <span>{position.type}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {position.description}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${position.color} text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all`}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Hiring Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Join GPITG?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {hiringContent}
            </p>
            
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <FiMail className="w-5 h-5" />
              <a 
                href="mailto:hr.idesiretodeliver@gpitg.co.tz" 
                className="font-semibold hover:underline"
              >
                hr.idesiretodeliver@gpitg.co.tz
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Submit Your Application
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Application Submitted!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for your interest in joining GPITG. We'll review your application and get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    CV/Resume (Text format) *
                  </label>
                  <textarea
                    {...register('cv', { required: 'CV is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Please paste your CV content here..."
                  />
                  {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How would you contribute to GPITG? (Two paragraphs) *
                  </label>
                  <textarea
                    {...register('contribution', { required: 'Contribution statement is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Describe how you would contribute to our mission and goals..."
                  />
                  {errors.contribution && <p className="text-red-500 text-sm mt-1">{errors.contribution.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;