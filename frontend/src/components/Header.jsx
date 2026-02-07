import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import HillLogo from './HillLogo';
import { restaurantInfo } from '../data/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <HillLogo 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
              color={isScrolled ? '#8B4513' : '#ffffff'}
            />
            <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Hillside
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-[#D2691E] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className={`font-medium transition-colors duration-300 hover:text-[#D2691E] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('signature')}
              className={`font-medium transition-colors duration-300 hover:text-[#D2691E] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Signature
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors duration-300 hover:text-[#D2691E] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-[#D2691E] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-[#8B4513] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#A0522D] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Reserve Table
            </button>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${restaurantInfo.phone}`}
              className={`transition-colors duration-300 hover:text-[#D2691E] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href={restaurantInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 hover:text-[#D2691E] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 font-medium hover:text-[#D2691E] transition-colors text-left px-4"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 font-medium hover:text-[#D2691E] transition-colors text-left px-4"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('signature')}
                className="text-gray-700 font-medium hover:text-[#D2691E] transition-colors text-left px-4"
              >
                Signature
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 font-medium hover:text-[#D2691E] transition-colors text-left px-4"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 font-medium hover:text-[#D2691E] transition-colors text-left px-4"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-[#8B4513] text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#A0522D] transition-all duration-300 mx-4"
              >
                Reserve Table
              </button>
              <div className="flex items-center gap-4 px-4 pt-2 border-t border-gray-200 mt-2">
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-gray-700 hover:text-[#D2691E] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a 
                  href={restaurantInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#D2691E] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
