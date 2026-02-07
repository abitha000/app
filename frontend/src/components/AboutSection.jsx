import React from 'react';
import { Flame } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#8B4513]/10 px-4 py-2 rounded-full">
              <Flame className="w-5 h-5 text-[#D2691E]" />
              <span className="text-[#8B4513] font-semibold">Our Story</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Charcoal. Spice.
              <br />
              <span className="text-[#D2691E]">Celebration.</span>
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                At <span className="font-semibold text-[#8B4513]">Hillside Multicuisine Restaurant</span>, we bring together the warmth of family gatherings and the bold flavors of charcoal-fired perfection.
              </p>
              
              <p>
                Our kitchen is a celebration of diverse cuisines — from the smoky depths of our tandoor to the rich gravies of North India, the fiery woks of Oriental cooking, and the tender embrace of Mughlai traditions.
              </p>

              <p>
                Every dish is crafted with passion, every flame tells a story, and every meal becomes a memory. Whether it's a quiet family dinner or a joyous celebration, we're here to make your evenings unforgettable.
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#8B4513] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#A0522D] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Our Menu
              </button>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl h-64 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://customer-assets.emergentagent.com/job_charcoal-cuisine-1/artifacts/jyeb91re_Screenshot_2026-02-07-11-38-00-82_3d9111e2d3171bf4882369f490c087b4.jpg"
                  alt="Grilled tandoori chicken"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-48 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://customer-assets.emergentagent.com/job_charcoal-cuisine-1/artifacts/8rn39p86_Screenshot_2026-02-07-11-39-08-64_3d9111e2d3171bf4882369f490c087b4.jpg"
                  alt="Grilled kebabs"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-48 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://customer-assets.emergentagent.com/job_charcoal-cuisine-1/artifacts/trc5pp7w_Screenshot_2026-02-07-11-39-38-16_3d9111e2d3171bf4882369f490c087b4.jpg"
                  alt="Oriental cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FF8C42]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#D2691E]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
