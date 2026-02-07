import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D2691E]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF8C42]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Visit <span className="text-[#FF8C42]">Hillside</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join us for an evening of fire, flavor, and celebration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#D2691E]/20 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-[#FF8C42]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300 leading-relaxed">
                  {restaurantInfo.address}
                </p>
                <a 
                  href={restaurantInfo.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#FF8C42] hover:text-[#D2691E] transition-colors duration-300 font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#D2691E]/20 p-4 rounded-lg">
                <Phone className="w-6 h-6 text-[#FF8C42]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a 
                  href={`tel:+91${restaurantInfo.phone}`}
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors duration-300"
                >
                  +91 {restaurantInfo.phone}
                </a>
                <p className="text-gray-400 text-sm mt-1">Available during business hours</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="bg-[#D2691E]/20 p-4 rounded-lg">
                <svg className="w-6 h-6 text-[#FF8C42]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <a 
                  href={`https://wa.me/91${restaurantInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors duration-300"
                >
                  Chat with us
                </a>
                <p className="text-gray-400 text-sm mt-1">Quick responses for reservations</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-[#D2691E]/20 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-[#FF8C42]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-300">{restaurantInfo.hours}</p>
                <p className="text-gray-400 text-sm mt-1">Open daily</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start gap-4">
              <div className="bg-[#D2691E]/20 p-4 rounded-lg">
                <Instagram className="w-6 h-6 text-[#FF8C42]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                <a 
                  href={restaurantInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF8C42] transition-colors duration-300"
                >
                  @hillside_multicuisine_resto
                </a>
                <p className="text-gray-400 text-sm mt-1">Check out our latest dishes</p>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px] lg:h-auto">
            <iframe
              src={restaurantInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hillside Multicuisine Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
