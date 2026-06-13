import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/60 backdrop-blur-lg py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-xl md:text-2xl font-playfair font-bold tracking-tighter z-50"
        >
          COMPACT <span className="text-luxury-gold">FILMS</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs uppercase tracking-widest hover:text-luxury-gold transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            href="https://wa.me/919019631104?text=Hi%20Compact%20Wedding%20Studio,%20I%20am%20interested%20in%20your%20wedding%20photography%20and%20cinematography%20services.%20Please%20share%20package%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-luxury-gold hover:bg-luxury-gold-light text-black px-4 md:px-6 py-2 rounded-full flex items-center gap-2 font-bold text-xs md:text-sm transition-all duration-300 z-50"
          >
            <FaWhatsapp className="text-lg" />
            <span className="hidden sm:inline">Book Now</span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-2xl text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/98 border-t border-white/5 py-10 px-6 flex flex-col items-center space-y-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg uppercase tracking-[0.2em] hover:text-luxury-gold transition-colors font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
