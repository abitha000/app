import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1611578560976-6911bce2e09f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxjaGFyY29hbCUyMGJicXxlbnwwfHx8fDE3NzA0NDUzMTJ8MA&ixlib=rb-4.1.0&q=85"
          alt="Charcoal grill background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        
        {/* Warm glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#D2691E]/20 via-transparent to-transparent opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Where Fire
              <br />
              <span className="text-[#FF8C42]">Meets Flavor</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light">
              Experience the perfect blend of charcoal-grilled perfection,
              <br className="hidden md:block" />
              traditional tandoor, and bold multi-cuisine flavors
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-[#8B4513] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A0522D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D2691E]/50 hover:-translate-y-1 w-full sm:w-auto"
              >
                View Menu
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#8B4513] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-[#FF8C42] transition-colors duration-300"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Floating smoke animation effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
