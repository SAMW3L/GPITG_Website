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

  const mediaLinks = [
    { name: 'News', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
   
  ];

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
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-gradient-to-r from-gray-100 to-gray-200 py-2'
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
                  `px-4 py-2 rounded-md font-medium transition-all text-gray-800 ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* Media Center Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-md font-medium text-gray-800 hover:bg-gray-200 flex items-center focus:outline-none">
                Media Center
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100  group-hover:pointer-events-auto transition-opacity z-30">
                <div className="py-2">
                  {mediaLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-700 hover:bg-blue-50 ${isActive ? 'bg-blue-100 text-blue-700' : ''}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
              <a
                href="tel:+255717531539"
                className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+255 717 531 539</span>
              </a>
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
          className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-md transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md font-medium text-gray-800 ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* Media Center Dropdown for Mobile */}
            <div className="border-t pt-2 mt-2">
              <span className="block px-4 py-2 font-medium text-gray-800">Media Center</span>
              {mediaLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md text-gray-700 ${isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;