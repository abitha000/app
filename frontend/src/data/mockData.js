// Mock data for Hillside Multicuisine Restaurant

export const menuData = {
  bbq: [
    { name: "BBQ Chicken", description: "Charcoal-grilled chicken with signature spices", variants: ["Half", "Full"] },
    { name: "BBQ Fish/Prawn", description: "Fresh catch grilled to perfection", variants: [] },
    { name: "Pepper BBQ Chicken", description: "Spicy pepper-crusted grilled chicken", variants: [] },
    { name: "Chicken Alfaham", description: "Arabian-style marinated and grilled", variants: [] },
    { name: "Cheese Chicken Afghani", description: "Creamy cheese-infused Afghani chicken", variants: ["Half", "Full"] },
    { name: "Tangri Kulfi", description: "Signature drumstick preparation", variants: ["3 pcs"] }
  ],
  tandooriNonVeg: [
    { name: "Chicken Rosali Kebab", description: "Tender chicken with aromatic spices", variants: [] },
    { name: "Chicken Tikka", description: "Classic tandoori tikka", variants: [] },
    { name: "Tandoori Platter", description: "Assorted tandoori delights", variants: [] },
    { name: "Kalimirchi Fish Tikka", description: "Black pepper crusted fish tikka", variants: [] },
    { name: "Tandoori Chicken", description: "Traditional charcoal-fired tandoori", variants: ["Half", "Full"] },
    { name: "Mutton Gilafi Sheekh Kebab", description: "Succulent mutton seekh", variants: [] },
    { name: "Tandoori Pomfret", description: "Seasonal fresh pomfret", variants: ["Seasonal"] }
  ],
  nonVegGravy: [
    { name: "Butter Chicken Masala", description: "Rich creamy tomato-based curry", variants: [] },
    { name: "Kadai Chicken Masala", description: "Spicy kadai preparation", variants: [] },
    { name: "Hyderabadi Chicken Masala", description: "Authentic Hyderabadi flavors", variants: [] },
    { name: "Kashmiri Pepper Chicken Masala", description: "Aromatic Kashmiri-style curry", variants: [] },
    { name: "Rara Murgh", description: "Minced and whole chicken curry", variants: [] },
    { name: "Afghani Chicken Masala", description: "Creamy Afghani preparation", variants: [] },
    { name: "Punjabi Chicken Masala", description: "Classic Punjabi curry", variants: [] },
    { name: "Chicken Rogan Josh", description: "Aromatic Kashmiri delicacy", variants: [] },
    { name: "Mutton Rogan Josh", description: "Tender mutton in rich gravy", variants: [] },
    { name: "Mutton Shahi Kurma", description: "Royal mutton preparation", variants: [] },
    { name: "Prawn Mirchi Masala", description: "Spicy prawn curry", variants: [] },
    { name: "Fish Curry", description: "Traditional fish preparation", variants: [] },
    { name: "Prawn Curry", description: "Coastal-style prawn curry", variants: [] }
  ],
  orientalStarters: [
    { name: "Sweet & Spicy Lotus Stem", description: "Crispy lotus stem tossed in sweet-spicy sauce", variants: [] },
    { name: "Chiang Mai Babycorn", description: "Thai-style baby corn", variants: [] },
    { name: "Dynamite Potato", description: "Explosive flavored potato bites", variants: [] },
    { name: "Chung Kai Mushroom/Babycorn", description: "Oriental-style preparation", variants: [] },
    { name: "Thai Prik Potato", description: "Spicy Thai potato", variants: [] },
    { name: "Thai Green Chilli Cauliflower", description: "Spicy Thai cauliflower", variants: [] },
    { name: "Hot Basil Mushroom", description: "Aromatic basil mushroom", variants: [] },
    { name: "Malaysian Cheese Cottage", description: "Cheesy paneer delight", variants: [] },
    { name: "Corn Cornet", description: "Crispy corn preparation", variants: [] },
    { name: "Dragon Sauce", description: "Fiery dragon-style preparation", variants: [] },
    { name: "Salt & Pepper Sauce", description: "Classic salt & pepper", variants: [] },
    { name: "Shanghai", description: "Shanghai-style preparation", variants: [] },
    { name: "Veg Momo", description: "Steamed or fried dumplings", variants: ["Steamed", "Fried"] },
    { name: "Pakora", description: "Traditional Indian fritters", variants: [] },
    { name: "Spring Roll", description: "Crispy spring rolls", variants: ["Paneer", "Mushroom"] }
  ],
  salads: [
    { name: "Russian Salad", description: "Classic Russian-style salad", variants: ["Veg", "Chicken"] },
    { name: "Tandoori Salad", description: "Grilled tandoori salad", variants: ["Veg", "Chicken"] },
    { name: "Thai Salad", description: "Fresh Thai-style salad", variants: ["Veg", "Chicken"] }
  ],
  tandooriVeg: [
    { name: "Tandoori Cheese Malai", description: "Creamy cheese preparation", variants: ["Mushroom", "Paneer"] },
    { name: "Tandoori Paneer Platter", description: "Assorted paneer delights", variants: [] },
    { name: "Veg Sheekh Kebab", description: "Vegetarian seekh kebab", variants: [] },
    { name: "Paneer Chatpata Kebab", description: "Tangy paneer kebab", variants: [] },
    { name: "Paneer Tikka", description: "Classic paneer tikka", variants: [] }
  ]
};

export const signatureDishes = [
  {
    name: "Butter Chicken Masala",
    description: "Tender chicken in velvety tomato cream sauce",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VufGVufDB8fHx8MTc3MDQ0NTMwN3ww&ixlib=rb-4.1.0&q=85",
    category: "Non Veg Gravy"
  },
  {
    name: "Tandoori Chicken",
    description: "Charcoal-fired traditional tandoori perfection",
    image: "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW58ZW58MHx8fHwxNzcwMzcwMDk2fDA&ixlib=rb-4.1.0&q=85",
    category: "Tandoori"
  },
  {
    name: "Tangri Kulfi",
    description: "Signature charcoal-grilled drumsticks",
    image: "https://customer-assets.emergentagent.com/job_charcoal-cuisine-1/artifacts/jyeb91re_Screenshot_2026-02-07-11-38-00-82_3d9111e2d3171bf4882369f490c087b4.jpg",
    category: "BBQ"
  },
  {
    name: "Chicken Rogan Josh",
    description: "Aromatic Kashmiri delicacy with rich spices",
    image: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxidXR0ZXIlMjBjaGlja2VufGVufDB8fHx8MTc3MDQ0NTMwN3ww&ixlib=rb-4.1.0&q=85",
    category: "Non Veg Gravy"
  },
  {
    name: "Kalimirchi Fish Tikka",
    description: "Black pepper crusted fish perfection",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHx0YW5kb29yaSUyMGNoaWNrZW58ZW58MHx8fHwxNzcwMzcwMDk2fDA&ixlib=rb-4.1.0&q=85",
    category: "Tandoori"
  }
];

export const galleryImages = [
  "https://customer-assets.emergentagent.com/job_charcoal-cuisine-1/artifacts/1b5ljsr8_Screenshot_2026-02-07-11-37-36-52_3d9111e2d3171bf4882369f490c087b4.jpg",
  "https://customer-assets.emergentagent.com/job_charcoal-cuisine-1/artifacts/8rn39p86_Screenshot_2026-02-07-11-39-08-64_3d9111e2d3171bf4882369f490c087b4.jpg",
  "https://customer-assets.emergentagent.com/job_charcoal-cuisine-1/artifacts/trc5pp7w_Screenshot_2026-02-07-11-39-38-16_3d9111e2d3171bf4882369f490c087b4.jpg",
  "https://images.unsplash.com/photo-1697970684518-56ccc51138b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxjaGFyY29hbCUyMGJicXxlbnwwfHx8fDE3NzA0NDUzMTJ8MA&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/30749027/pexels-photo-30749027.jpeg",
  "https://images.unsplash.com/photo-1705174427925-744646e72117?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxidXR0ZXIlMjBjaGlja2VufGVufDB8fHx8MTc3MDQ0NTMwN3ww&ixlib=rb-4.1.0&q=85"
];

export const restaurantInfo = {
  name: "Hillside Multicuisine Restaurant",
  location: "Salem",
  address: "45/1, Sarada College Rd, opposite to Swarnapuri gas agency, Adaikala Nagar, Hasthampatti, Salem, Tamil Nadu 636007, India",
  phone: "9994788669",
  whatsapp: "9994788669",
  instagram: "https://www.instagram.com/hillside_multicuisine_resto/",
  mapLink: "https://maps.app.goo.gl/MMBETpsiSixoM2u97",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.4629836589947!2d78.15222831472743!3d11.675279991564987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1606c1fbc55%3A0xe393a5b712aded38!2sHillside%20Multicuisine%20Restaurant%20Salem!5e0!3m2!1sen!2sin!4v1707304320000!5m2!1sen!2sin",
  hours: "12 PM - 11 PM"
};

// Mock booking function
export const mockBookTable = (bookingData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock booking created:', bookingData);
      resolve({
        success: true,
        message: 'Booking request received! We will contact you shortly.',
        bookingId: `BK${Date.now()}`
      });
    }, 1000);
  });
};
