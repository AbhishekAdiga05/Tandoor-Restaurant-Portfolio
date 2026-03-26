import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-lg border-b border-[#FF6A00]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-serif tracking-wider"
            >
              <span className="bg-gradient-to-r from-[#FF6A00] to-[#8B0000] bg-clip-text text-transparent group-hover:from-[#FF8C00] group-hover:to-[#FF6A00] transition-all duration-300">
                Tandoor
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`relative font-sans text-sm tracking-wide transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-[#FF6A00]'
                      : 'text-[#a0a0a0] hover:text-[#F5F5F5]'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Call Now Button */}
            <motion.a
              href="tel:+918242424242"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#FF6A00]/30 transition-all duration-300 text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F5F5F5] p-2 hover:text-[#FF6A00] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0B0B0B]/98 backdrop-blur-lg border-t border-[#FF6A00]/10"
        >
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-[#FF6A00]/10 to-[#8B0000]/10 text-[#FF6A00] border border-[#FF6A00]/20'
                    : 'text-[#a0a0a0] hover:bg-[#1a1a1a] hover:text-[#F5F5F5]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+918242424242"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6A00] to-[#8B0000] text-white px-6 py-3 rounded-full mt-4 hover:shadow-lg hover:shadow-[#FF6A00]/30 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}