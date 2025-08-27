import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

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
          ? 'bg-white/90 backdrop-blur-md shadow-lg text-gray-800 py-2'
          : 'bg-gradient-to-r from-white via-sky-200 to-sky-300 text-gray-800 py-2'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
        
        <Link to="/" className="flex items-center space-x-2">
            {/* Apply rounded corners to logo */}
            <img 
              src="/logo.png" 
              alt="GPITG Logo" 
              className="h-12 mr-1 rounded-lg" 
              style={{ borderRadius: '10px' }}  
            />
            {/* <span className="font-bold text-xl">GPITG <p>Limited</p></span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md font-medium transition-all ${
                    isActive
                      ? 'bg-white/20 text-blue-700'
                      : scrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

       
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ${
            isMenuOpen ? 'top-full opacity-100' : '-top-[400px] opacity-0'
          }`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md font-medium ${
                    isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
