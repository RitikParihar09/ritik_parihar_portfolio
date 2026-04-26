import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["about", "education", "projects", "skills", "certifications", "contact"];
      const viewportMiddle = window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["About", "Education", "Projects", "Skills", "Certifications", "Contact"];

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 ${
        isScrolled 
          ? 'shadow-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg' 
          : 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#about" className="text-xl md:text-3xl font-bold text-gray-800 dark:text-white transition-colors">
            Portfolio<span className="text-blue-600">.</span>
          </a>
          
          <div className="flex items-center space-x-1 md:space-x-8">

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const linkId = link.toLowerCase();
                const isActive = activeSection === linkId;
                return (
                  <a
                    key={link}
                    href={`#${linkId}`}
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {link}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center space-x-1 md:space-x-2">

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:ring-2 hover:ring-blue-400 transition-all duration-300 shadow-md"
                aria-label="Toggle Dark Mode"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: darkMode ? 360 : 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1zm18 0c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s-.45 1-1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 00-1.41-1.41l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 00-1.41-1.41l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.1,22c-4.9,0-9-4.1-9-9s4.1-9,9-9c0.5,0,1,0,1.5,0.1c-1.4,1-2.3,2.6-2.3,4.4c0,3,2.5,5.5,5.5,5.5c1.8,0,3.4-0.9,4.4-2.3c0.1,0.5,0.1,1,0.1,1.5C21.1,17.9,17.1,22,12.1,22z" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl mt-4"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.toLowerCase();
                      const element = document.getElementById(targetId);
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`text-lg font-bold text-left transition-colors py-2 ${
                      activeSection === link.toLowerCase() 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {link}
                  </a>
                ))}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};




export default Header;