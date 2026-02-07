import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { mockBookTable } from '../data/mockData';
import { toast } from 'sonner';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await mockBookTable(formData);
      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          guests: '2',
          specialRequests: ''
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#FFF8F0] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D2691E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF8C42] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Booking Info */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Reserve Your
              <br />
              <span className="text-[#D2691E]">Table Today</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Join us for an unforgettable evening of charcoal-grilled perfection and warm hospitality. 
              Book your table now and let us make your dining experience special.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#8B4513]/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-[#D2691E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                  <p className="text-gray-600">Daily: 12:00 PM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#8B4513]/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-[#D2691E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Group Bookings</h4>
                  <p className="text-gray-600">Perfect for families and celebrations</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#8B4513]/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#D2691E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quick Contact</h4>
                  <p className="text-gray-600">Call us at +91 9994788669</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <Card className="shadow-2xl border-none">
            <CardHeader className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] text-white rounded-t-xl">
              <CardTitle className="text-2xl font-serif">Book Your Table</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#D2691E] focus:ring-[#D2691E]"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#D2691E] focus:ring-[#D2691E]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#D2691E] focus:ring-[#D2691E]"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4" />
                      Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="border-gray-300 focus:border-[#D2691E] focus:ring-[#D2691E]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4" />
                      Time *
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-[#D2691E] focus:ring-[#D2691E]"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4" />
                    Number of Guests *
                  </Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2691E] focus:border-transparent"
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="specialRequests" className="flex items-center gap-2 text-gray-700">
                    <MessageSquare className="w-4 h-4" />
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Any dietary restrictions or special occasions?"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="border-gray-300 focus:border-[#D2691E] focus:ring-[#D2691E]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8B4513] hover:bg-[#A0522D] text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll contact you to confirm your booking.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
