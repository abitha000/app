import React from 'react';
import { signatureDishes } from '../data/mockData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Flame } from 'lucide-react';

const SignatureSection = () => {
  return (
    <section id="signature" className="py-20 md:py-32 bg-gradient-to-b from-[#FFF8F0] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#D2691E]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8B4513]/10 px-4 py-2 rounded-full mb-4">
            <Flame className="w-5 h-5 text-[#D2691E]" />
            <span className="text-[#8B4513] font-semibold">Signature Dishes</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#D2691E]">Best Sellers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the dishes that keep our guests coming back for more
          </p>
        </div>

        {/* Signature Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Warm glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-[#8B4513] text-white border-none shadow-lg">
                  {dish.category}
                </Badge>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#D2691E] transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#8B4513] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#A0522D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D2691E]/50 hover:-translate-y-1"
          >
            Reserve Your Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
