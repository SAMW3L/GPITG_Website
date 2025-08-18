import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiStar, FiHeart } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Mwangi',
      title: 'Chief Medical Officer',
      organization: 'Dar es Salaam Regional Hospital',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      content: 'GPITG\'s eHMS has revolutionized our hospital operations. The transition from paper-based systems to digital has improved our efficiency by over 250%. Patient care quality has significantly improved.',
      product: 'eHMS'
    },
    {
      name: 'Grace Mtei',
      title: 'Family Care Coordinator',
      organization: 'Home Care Services',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      content: 'AdeCare brought clinic-quality care to our homes! The platform connects us with professional caregivers seamlessly. My elderly mother receives excellent care in the comfort of her own home.',
      product: 'AdeCare'
    },
    {
      name: 'James Mbwana',
      title: 'Store Manager',
      organization: 'Mbwana Electronics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      content: 'GPOS has transformed our retail operations. Inventory management, sales tracking, and payment processing are now seamless. Our revenue has increased by 300% since implementation.',
      product: 'GPOS'
    },
    {
      name: 'Dr. Patrick Kimaro',
      title: 'Hospital Administrator',
      organization: 'Kilimanjaro Medical Centre',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      content: 'G-Queue has eliminated patient waiting time frustrations. The system provides real-time updates and our patients now have a much better experience. Staff productivity has also improved significantly.',
      product: 'G-Queue'
    },
    {
      name: 'Amina Hassan',
      title: 'Business Owner',
      organization: 'Hassan Trading Co.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      content: 'The G-Pesa integration has made our business completely cashless. Transaction processing is secure, fast, and reliable. GPITG\'s support team is always there when we need them.',
      product: 'G-Pesa'
    }
  ];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-sky-50 dark:bg-sky-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 dark:bg-blue-800/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-200/20 dark:bg-teal-800/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/10 dark:bg-purple-800/10 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-300 to-teal-600 rounded-full mb-6"
          >
            <FiHeart className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto"
          >
            Real stories from organizations that have transformed their operations with our solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-sky-800 rounded-2xl p-8 shadow-lg h-full"
                >
                  {/* Product Tag */}
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
                    {testimonial.product}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.title}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        {testimonial.organization}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Quote */}
                  <div className="absolute top-4 right-6 text-gray-200 dark:text-gray-700">
                    <FiHeart className="w-8 h-8 transform rotate-180" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <p className="text-gray-600 dark:text-white mb-6">
              Ready to join these successful organizations?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg"
            >
              Start Your Transformation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;





// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     position: 'CEO, TechStart',
//     image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     content:
//       'GPITG Limmited completely transformed our digital presence. Their team built us a beautiful website and helped us implement effective digital marketing strategies. We\'ve seen a significant increase in customer engagement and conversions.',
//   },
//   {
//     id: 2,
//     name: 'Michael Ochieng',
//     position: 'Founder, EcoSolutions',
//     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     content:
//       'Working with GPITG Limmited has been a game-changer for our business. They developed a custom system that streamlined our operations and improved efficiency. Their team is professional, responsive, and truly dedicated to helping us succeed.',
//   },
//   {
//     id: 3,
//     name: 'Amina Patel',
//     position: 'Marketing Director, AfriGrowth',
//     image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     content:
//       'The mobile app developed by GPITG Limmited exceeded our expectations. It\'s user-friendly, visually appealing, and has all the functionality we needed. Their team took the time to understand our requirements and delivered a solution that perfectly meets our needs.',
//   },
// ];

// const TestimonialsSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);

//   const nextTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     if (!autoplay) return;

//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 8000);

//     return () => clearInterval(interval);
//   }, [autoplay]);

//   const handleNavigation = (direction: 'prev' | 'next') => {
//     setAutoplay(false);
//     if (direction === 'prev') {
//       prevTestimonial();
//     } else {
//       nextTestimonial();
//     }
//   };

//   return (
//     <section className="py-20 bg-gradient-to-r from-sky-900 to-yellow-800 text-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             Hear from businesses who have transformed their digital presence with our services.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto relative">
//           <Quote className="absolute top-0 left-0 opacity-20 text-blue-300" size={64} />

//           <div className="relative z-10">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center"
//               >
//                 <div className="mb-6">
//                   <img
//                     src={testimonials[activeIndex].image}
//                     alt={testimonials[activeIndex].name}
//                     className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-400"
//                   />
//                 </div>
//                 <p className="text-lg md:text-xl italic mb-6">{testimonials[activeIndex].content}</p>
//                 <div>
//                   <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
//                   <p className="text-blue-300">{testimonials[activeIndex].position}</p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   index === activeIndex ? 'bg-blue-400' : 'bg-blue-900'
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
//             <button
//               onClick={() => handleNavigation('prev')}
//               className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transform -translate-x-1/2 pointer-events-auto"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={() => handleNavigation('next')}
//               className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transform translate-x-1/2 pointer-events-auto"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;