import React, { useState } from 'react';
import { menuData } from '../data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('bbq');

  const categories = [
    { id: 'bbq', label: 'BBQ', icon: '🔥' },
    { id: 'tandooriNonVeg', label: 'Tandoori Non-Veg', icon: '🍗' },
    { id: 'nonVegGravy', label: 'Non-Veg Gravy', icon: '🍛' },
    { id: 'orientalStarters', label: 'Oriental', icon: '🥢' },
    { id: 'tandooriVeg', label: 'Tandoori Veg', icon: '🥗' },
    { id: 'salads', label: 'Salads', icon: '🥙' }
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#D2691E]">Menu</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A culinary journey through fire-grilled perfection, aromatic spices, and bold flavors
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          {/* Category Tabs */}
          <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent h-auto p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 data-[state=active]:bg-[#8B4513] data-[state=active]:text-white bg-gray-100 text-gray-700 hover:bg-gray-200 data-[state=active]:shadow-lg"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Menu Items */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData[category.id].map((item, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#D2691E]/20 overflow-hidden group"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-[#D2691E] transition-colors duration-300">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>

                      {item.variants && item.variants.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.variants.map((variant, vIndex) => (
                            <Badge 
                              key={vIndex}
                              variant="secondary"
                              className="bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20 text-xs"
                            >
                              {variant}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Note about pricing */}
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            For pricing and availability, please contact us or visit our restaurant
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
