import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => closeMenu(), [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/90 backdrop-blur-sm py-2 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="GPITG Logo" 
              className="h-12 mr-1 rounded-md" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-sky-100 text-sky-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
              <a
                href="tel:+255717531539"
                className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+255 717 531 539</span>
              </a>
              <Link
                to="/contact"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
       
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 border-t border-gray-100 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive 
                      ? 'bg-sky-100 text-sky-700' 
                      : 'text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Mobile Contact */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+255717531539"
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                <Phone size={18} />
                <span>+255 717 531 539</span>
              </a>
              <Link
                to="/contact"
                className="block mx-4 text-center py-3 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold hover:from-sky-600 hover:to-sky-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
            {/* Removed duplicate link
            <Link
              to="/contact"
              className="mt-4 px-4 py-3 text-center rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Get Started
            </Link> 
            */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;