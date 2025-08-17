import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiGithub, FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sw' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'eHMS', href: 'products' },
        { name: 'AdeCare', href: 'products' },
        { name: 'GPOS', href: 'products' },
        { name: 'G-Pesa', href: 'products' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: t('nav.about'), href: 'about' },
        { name: t('nav.team'), href: 'team' },
        { name: t('nav.partners'), href: 'partners' },
        { name: t('nav.careers'), href: 'careers' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Project Management', href: 'services' },
        { name: 'System Design', href: 'services' },
        { name: 'Integration', href: 'services' },
        { name: 'Support', href: 'contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiGithub, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="footer-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <div>
                    <span className="font-bold text-xl">GPITG</span>
                    <div className="text-xs text-gray-400 -mt-1">ICT Solutions</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-4 max-w-md text-sm">
                  {t('footer.description')} - Innovative locally developed solutions for healthcare, retail, and business automation across Tanzania.
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <FiMapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400">Kawe, Dar es Salaam, Tanzania</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiPhone className="w-4 h-4 text-blue-400" />
                    <a href="tel:+255717531539" className="text-gray-400 hover:text-white transition-colors">
                      (+255) 717-531-539
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiMail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:info@gpitg.co.tz" className="text-gray-400 hover:text-white transition-colors">
                      info@gpitg.co.tz
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 rounded-lg flex items-center justify-center transition-all duration-300"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0"
            >
              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </p>

              {/* Theme and Language Controls */}
              <div className="flex items-center space-x-3">
                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
                  <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
                </motion.button>

                {/* Language Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  aria-label="Toggle language"
                >
                  <FiGlobe className="w-4 h-4" />
                  <span>{i18n.language.toUpperCase()}</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;