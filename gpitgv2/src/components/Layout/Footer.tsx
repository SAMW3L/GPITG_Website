import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-sky-600/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="GPITG Logo" 
                className="h-14 mr-1 rounded-lg shadow-lg" 
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming Africa through innovative, locally developed ICT solutions. We specialize in healthcare, retail, and business automation systems that deliver real results.
            </p>
            
            <div className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-sky-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-sky-400 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+255717531539" className="block text-gray-300 hover:text-sky-400 transition-colors">
                    +255 717 531 539
                  </a>
                  <a href="tel:+255753290357" className="block text-gray-300 hover:text-sky-400 transition-colors">
                    +255 753 290 357
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-sky-400 flex-shrink-0" />
                <a href="mailto:info@gpitg.co.tz" className="text-gray-300 hover:text-sky-400 transition-colors">
                  info@gpitg.co.tz
                </a>
              </li>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-sky-400 hover:bg-sky-400/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-sky-400 hover:bg-sky-400/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-sky-400 hover:bg-sky-400/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-sky-400 hover:bg-sky-400/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-sky-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-sky-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors text-sm leading-relaxed">
                  System Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Systems Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors text-sm leading-relaxed">
                  Web Development & Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Implementation & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Our Products</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-sky-500 rounded-full"></span>
            </h3>
             <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  eHMS
                </Link>
              </li>
            
              <li>
                <Link to="/products" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  G-PoS
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  G-Pesa
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  G-Queue
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  G-Tele
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  G-Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>

      

        <hr className="border-white/20 my-8" />
        <div className="flex flex-col md:flex-row md:justify-between items-center relative">
          {/* Copyright and Policy Links */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GPITG Limmited. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;