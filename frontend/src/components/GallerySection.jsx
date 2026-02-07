import React, { useState } from 'react';
import { galleryImages } from '../data/mockData';
import { Camera } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8B4513]/10 px-4 py-2 rounded-full mb-4">
            <Camera className="w-5 h-5 text-[#D2691E]" />
            <span className="text-[#8B4513] font-semibold">Our Gallery</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Experience the <span className="text-[#D2691E]">Ambiance</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into our warm dining atmosphere and mouthwatering creations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/80 via-[#8B4513]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={selectedImage}
              alt="Gallery lightbox"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
