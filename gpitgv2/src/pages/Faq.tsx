import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const Faq: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredFaqs, setFilteredFaqs] = useState<FaqItem[]>([]);

  useEffect(() => {
    document.title = 'Frequently Asked Questions - GPITG Limmited';
  }, []);

  const faqList: FaqItem[] = [
    {
      id: 1,
      question: 'What services does GPITG Limmited offer?',
      answer: 'GPITG Limmited offers a comprehensive range of IT services including Web Design & Development, Mobile App Development, System Development, Web Hosting & Maintenance, SEO & Digital Marketing, and IT Consulting. Our goal is to provide end-to-end technology solutions that help businesses grow and succeed in the digital world.',
      category: 'general',
    },
    {
      id: 2,
      question: 'How much does a website cost?',
      answer: 'The cost of a website varies depending on your specific requirements, such as design complexity, functionality, and content needs. We offer tailored solutions to fit different budgets and needs. Please contact us for a personalized quote based on your project requirements.',
      category: 'web',
    },
    {
      id: 3,
      question: 'How long does it take to develop a website?',
      answer: 'The timeline for website development depends on the complexity of the project. A simple website might take 2-4 weeks, while more complex websites or web applications could take 2-3 months or more. During our initial consultation, well provide you with a more accurate timeline based on your specific project requirements.',
      category: 'web',
    },
    {
      id: 4,
      question: 'Do you offer website maintenance services?',
      answer: 'Yes, we offer comprehensive website maintenance services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, performance optimization, content updates, and technical support.',
      category: 'web',
    },
    {
      id: 5,
      question: 'What platforms do you develop mobile apps for?',
      answer: 'We develop mobile applications for both iOS and Android platforms. We can create native apps for each platform or develop cross-platform applications using technologies like React Native or Flutter, depending on your specific needs and budget.',
      category: 'mobile',
    },
    {
      id: 6,
      question: 'How much does mobile app development cost?',
      answer: 'The cost of mobile app development varies based on factors such as app complexity, features, design requirements, and the platforms you want to target. We provide customized quotes after understanding your specific requirements. Contact us for a detailed estimate for your mobile app project.',
      category: 'mobile',
    },
    {
      id: 7,
      question: 'What is SEO and why is it important?',
      answer: 'SEO (Search Engine Optimization) is the process of improving your website to increase its visibility on search engines like Google when people search for products or services related to your business. SEO is important because higher visibility in search results leads to more organic traffic to your website, increasing your chances of attracting potential customers.',
      category: 'marketing',
    },
    {
      id: 8,
      question: 'How long does it take to see results from SEO?',
      answer: 'SEO is a long-term strategy, and results typically take time to materialize. Generally, you might start seeing initial improvements within 3-6 months, but significant results often take 6-12 months or more. The timeline depends on factors such as your industry competition, your starting point, and the aggressiveness of your SEO strategy.',
      category: 'marketing',
    },
    {
      id: 9,
      question: 'What types of systems can you develop?',
      answer: 'We develop various types of custom systems including inventory management systems, customer relationship management (CRM) systems, enterprise resource planning (ERP) systems, school management systems, hospital management systems, and other bespoke software solutions tailored to your specific business requirements.',
      category: 'system',
    },
    {
      id: 10,
      question: 'How do you ensure the security of the systems you develop?',
      answer: 'We implement multiple layers of security measures in our system development process. This includes secure coding practices, data encryption, regular security testing, user authentication and authorization controls, and compliance with relevant security standards. We also provide ongoing security updates and monitoring as part of our maintenance services.',
      category: 'system',
    },
    {
      id: 11,
      question: 'What is your project development process?',
      answer: 'Our development process typically follows these steps: 1) Requirements gathering and analysis, 2) Planning and proposal, 3) Design, 4) Development, 5) Testing and quality assurance, 6) Deployment, and 7) Maintenance and support. Throughout this process, we maintain open communication with our clients to ensure the final product meets their expectations.',
      category: 'general',
    },
    {
      id: 12,
      question: 'Do you provide training for the systems you develop?',
      answer: 'Yes, we provide comprehensive training to ensure you and your team can effectively use the systems we develop. Training can be conducted in person or virtually, depending on your preference. We also provide detailed documentation for future reference.',
      category: 'system',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'general', name: 'General' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'system', name: 'System Development' },
    { id: 'marketing', name: 'Digital Marketing' },
  ];

  useEffect(() => {
    let filtered = faqList;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }
    
    setFilteredFaqs(filtered);
  }, [searchTerm, selectedCategory]);

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 via-slate-400 to-sky-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>
      </div>

      {/* FAQ Search and Filter */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for questions..."
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map(faq => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <ChevronDown
                        className={`transform transition-transform ${
                          activeQuestion === faq.id ? 'rotate-180' : ''
                        }`}
                        size={20}
                      />
                    </button>
                    <AnimatePresence>
                      {activeQuestion === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 border-t border-gray-200 bg-gray-50">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-600 mb-4">No questions found matching your search.</p>
                  <p className="text-gray-600">Try another search term or category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're here to help. Contact us directly and we'll be happy to answer any questions you have.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center"
          >
            Contact Us <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Faq;