import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import HillLogo from './HillLogo';
import { restaurantInfo } from '../data/mockData';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HillLogo className="w-10 h-10" color="#FF8C42" />
              <span className="font-serif text-2xl font-bold text-white">Hillside</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Where fire meets flavor. Experience the finest multi-cuisine dining in Salem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block hover:text-[#FF8C42] transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block hover:text-[#FF8C42] transition-colors duration-300"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('signature')}
                className="block hover:text-[#FF8C42] transition-colors duration-300"
              >
                Signature Dishes
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block hover:text-[#FF8C42] transition-colors duration-300"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="block hover:text-[#FF8C42] transition-colors duration-300"
              >
                Reserve Table
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href={`tel:+91${restaurantInfo.phone}`}
                className="flex items-center gap-2 hover:text-[#FF8C42] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                +91 {restaurantInfo.phone}
              </a>
              <p className="text-sm text-gray-400">
                Sarada College Rd, Hasthampatti
                <br />
                Salem, Tamil Nadu 636007
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hours</h3>
            <p className="mb-4">{restaurantInfo.hours}</p>
            <p className="text-sm text-gray-400 mb-4">Open daily</p>
            
            <div className="flex items-center gap-4">
              <a 
                href={`tel:+91${restaurantInfo.phone}`}
                className="bg-gray-800 p-3 rounded-full hover:bg-[#D2691E] transition-colors duration-300"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href={restaurantInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-[#D2691E] transition-colors duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/91${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-[#D2691E] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Hillside Multicuisine Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
