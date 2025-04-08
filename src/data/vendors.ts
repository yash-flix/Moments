
type VendorCategory = 'decorators' | 'caterers' | 'photographers' | 'florists';

export type Vendor = {
  id: number;
  name: string;
  category: VendorCategory;
  image: string;
  rating: number;
  location: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  price: string;
  gallery: string[];
  services: string[];
};

// Sample images for each category
const decoratorImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

const catererImages = [
  "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const photographerImages = [
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

const floristImages = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1464699908537-0954e50189af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

// Gallery images
const decoratorGalleryImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
  "https://images.unsplash.com/photo-1528041119984-da3a9f8a04e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const catererGalleryImages = [
  "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
  "https://images.unsplash.com/photo-1565538447911-5a91f9e8a88d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
];

const photographerGalleryImages = [
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1537728726292-93b315301b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const floristGalleryImages = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1464699908537-0954e50189af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1587584565072-bf19befae197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
];

// Services for each category
const decoratorServices = [
  "Complete venue decoration",
  "Theme-based setups",
  "Lighting arrangements",
  "Stage design",
  "Table settings",
  "Entrance decor",
  "Floral installations",
  "Backdrop creation",
  "Props and furniture rental",
  "Custom installations"
];

const catererServices = [
  "Multi-cuisine menu options",
  "Live cooking stations",
  "Specialized dietary accommodations",
  "Dessert bars",
  "Beverage services",
  "Traditional delicacies",
  "Food presentation design",
  "Staff service",
  "Equipment rental",
  "Menu tasting sessions"
];

const photographerServices = [
  "Pre-wedding photoshoots",
  "Candid photography",
  "Traditional posed photographs",
  "Cinematic videography",
  "Drone shots",
  "Same-day edits",
  "Photo albums",
  "Digital galleries",
  "Family portraits",
  "Video highlights"
];

const floristServices = [
  "Bridal bouquets",
  "Ceremony arrangements",
  "Reception centerpieces",
  "Entrance decorations",
  "Mandap/altar flowers",
  "Garlands and jewelry",
  "Car decorations",
  "Boutonnières and corsages",
  "Custom installations",
  "Sustainable/eco-friendly options"
];

// Price ranges
const priceRanges = ["$", "$$", "$$$", "$$$$"];

// Email domains
const emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "company.com"];

// Generate random email
const generateEmail = (name: string): string => {
  const namePart = name.toLowerCase().replace(/\s/g, "");
  const domain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
  return `${namePart}@${domain}`;
};

// Generate business listings for Delhi
const generateVendors = (): Vendor[] => {
  let id = 1;
  const vendors: Vendor[] = [];

  // Sample data for Delhi
  const delhiDecorators = [
    { name: "Dreamz Wedding Planner", location: "Karol Bagh, Delhi", phone: "9876543210" },
    { name: "Ferns N Petals Events", location: "South Delhi", phone: "9812345678" },
    { name: "Elegant Affairs", location: "Lajpat Nagar, Delhi", phone: "9998765432" },
    { name: "Shagun Decor", location: "Rohini, Delhi", phone: "9871234567" },
    { name: "Blossom Events", location: "Vasant Kunj, Delhi", phone: "9654321098" },
    { name: "Royal Decor", location: "Pitampura, Delhi", phone: "9819876543" },
    { name: "Celebration Concepts", location: "Greater Kailash, Delhi", phone: "9991234567" },
    { name: "Divine Decor", location: "Dwarka, Delhi", phone: "9877896543" },
    { name: "Festive Frames", location: "Janakpuri, Delhi", phone: "9650987654" },
    { name: "Glamour Events", location: "Connaught Place, Delhi", phone: "9811112233" }
  ];

  const delhiCaterers = [
    { name: "Bikanervala", location: "Connaught Place, Delhi", phone: "9876541234" },
    { name: "Kwality Catering", location: "South Delhi", phone: "9812348765" },
    { name: "Chaat Chowk", location: "Karol Bagh, Delhi", phone: "9998761234" },
    { name: "Taste of Punjab", location: "Rohini, Delhi", phone: "9871239876" },
    { name: "Sagar Ratna Catering", location: "Dwarka, Delhi", phone: "9654325678" },
    { name: "Delhi Darbar", location: "Lajpat Nagar, Delhi", phone: "9819871234" },
    { name: "Spice Kitchen", location: "Pitampura, Delhi", phone: "9991239876" },
    { name: "Urban Tadka", location: "Greater Kailash, Delhi", phone: "9877891234" },
    { name: "Food Fiesta", location: "Janakpuri, Delhi", phone: "9650981234" },
    { name: "Royal Feast", location: "Vasant Kunj, Delhi", phone: "9811119876" }
  ];

  const delhiPhotographers = [
    { name: "FotoZone", location: "South Delhi", phone: "9876545678" },
    { name: "Candid Clicks", location: "Karol Bagh, Delhi", phone: "9812341234" },
    { name: "Shutterbug Studio", location: "Rohini, Delhi", phone: "9998765678" },
    { name: "Pixel Perfect", location: "Dwarka, Delhi", phone: "9871231234" },
    { name: "Moments by Manoj", location: "Lajpat Nagar, Delhi", phone: "9654329876" },
    { name: "SnapSavvy", location: "Greater Kailash, Delhi", phone: "9819875678" },
    { name: "Eternal Frames", location: "Pitampura, Delhi", phone: "9991231234" },
    { name: "DreamLens", location: "Vasant Kunj, Delhi", phone: "9877895678" },
    { name: "Focus Fusion", location: "Janakpuri, Delhi", phone: "9650985678" },
    { name: "Visionary Shots", location: "Connaught Place, Delhi", phone: "9811115678" }
  ];

  const delhiFlorists = [
    { name: "Ferns N Petals", location: "South Delhi", phone: "9876549876" },
    { name: "Blooming Buds", location: "Karol Bagh, Delhi", phone: "9812345670" },
    { name: "Floral Fantasy", location: "Rohini, Delhi", phone: "9998769876" },
    { name: "Petal Power", location: "Dwarka, Delhi", phone: "9871235670" },
    { name: "Rose Haven", location: "Lajpat Nagar, Delhi", phone: "9654321234" },
    { name: "Lily Lane", location: "Greater Kailash, Delhi", phone: "9819879876" },
    { name: "Blossom Boutique", location: "Pitampura, Delhi", phone: "9991235670" },
    { name: "Flower Frenzy", location: "Vasant Kunj, Delhi", phone: "9877899876" },
    { name: "Petals & More", location: "Janakpuri, Delhi", phone: "9650989876" },
    { name: "Garden Glory", location: "Connaught Place, Delhi", phone: "9811111234" }
  ];

  // Add Delhi Decorators
  delhiDecorators.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'decorators',
      image: decoratorImages[index % decoratorImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Specialized in creating beautiful and elegant wedding decorations that transform venues into magical spaces. We focus on customized themes and detailed setups.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: decoratorGalleryImages,
      services: decoratorServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Caterers
  delhiCaterers.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'caterers',
      image: catererImages[index % catererImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Offering exquisite cuisine with diverse menu options for wedding ceremonies and receptions. We pride ourselves on quality ingredients and professional service.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: catererGalleryImages,
      services: catererServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Photographers
  delhiPhotographers.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'photographers',
      image: photographerImages[index % photographerImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Capturing the most precious moments of your special day with creativity and professionalism. Specializing in both traditional and candid photography styles.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: photographerGalleryImages,
      services: photographerServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Florists
  delhiFlorists.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'florists',
      image: floristImages[index % floristImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Creating stunning floral arrangements that bring your wedding vision to life. We work with fresh, seasonal flowers to design unique and beautiful displays.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: floristGalleryImages,
      services: floristServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Generate data for Mumbai
  const cities = ["Mumbai", "Bangalore", "Chennai", "Kolkata"];
  const areas = {
    "Mumbai": ["Bandra", "Andheri", "Juhu", "Colaba", "Worli", "Dadar", "Powai", "Malad", "Goregaon", "Churchgate"],
    "Bangalore": ["Koramangala", "Indiranagar", "Whitefield", "JP Nagar", "MG Road", "Jayanagar", "HSR Layout", "Electronic City", "Malleshwaram", "Brigade Road"],
    "Chennai": ["T Nagar", "Adyar", "Nungambakkam", "Anna Nagar", "Mylapore", "Velachery", "Besant Nagar", "Porur", "OMR", "ECR"],
    "Kolkata": ["Park Street", "Salt Lake", "New Town", "Ballygunge", "Howrah", "Alipore", "Gariahat", "Behala", "Dum Dum", "Esplanade"]
  };

  const businessTypes = {
    "decorators": [
      "Royal Weddings", "Dream Decorators", "Elegant Setups", "Divine Decor", "Creative Concepts",
      "Wedding Wonders", "Artistic Arrangements", "Festive Designs", "Glamour Decorations", "Perfect Planners"
    ],
    "caterers": [
      "Spice Delight", "Food Masters", "Gourmet Kitchen", "Taste Buds", "Culinary Experts", 
      "Flavor Junction", "Royal Feast", "Food Fiesta", "Delicious Bites", "Catering Kings"
    ],
    "photographers": [
      "Moment Catchers", "Picture Perfect", "Lens Masters", "Shutter Art", "Click Chronicles",
      "Frame Fantasy", "Capture Kings", "Visual Stories", "Photo Finesse", "Image Crafters"
    ],
    "florists": [
      "Floral Touch", "Bloom Box", "Petal Paradise", "Rose Garden", "Flower Fantasy",
      "Botanical Beauty", "Blossom World", "Green Thumb", "Nature's Art", "Floral Fantasies"
    ]
  };

  // Generate phone numbers
  const generatePhone = () => {
    return "9" + Math.floor(Math.random() * 900000000 + 100000000);
  };

  // Generate data for other cities
  cities.forEach(city => {
    const cityAreas = areas[city as keyof typeof areas];
    
    // Generate for each category
    Object.keys(businessTypes).forEach(category => {
      const categoryBusinesses = businessTypes[category as keyof typeof businessTypes];
      const categoryImages = category === 'decorators' ? decoratorImages : 
                            category === 'caterers' ? catererImages :
                            category === 'photographers' ? photographerImages : floristImages;
      
      const categoryGalleryImages = category === 'decorators' ? decoratorGalleryImages : 
                                  category === 'caterers' ? catererGalleryImages :
                                  category === 'photographers' ? photographerGalleryImages : floristGalleryImages;
      
      const categoryServices = category === 'decorators' ? decoratorServices : 
                              category === 'caterers' ? catererServices :
                              category === 'photographers' ? photographerServices : floristServices;
      
      // Generate 10 businesses for each category in each city
      for (let i = 0; i < 10; i++) {
        const businessName = categoryBusinesses[i];
        const area = cityAreas[i];
        const location = `${area}, ${city}`;
        const phone = generatePhone();
        
        vendors.push({
          id: id++,
          name: businessName,
          category: category as VendorCategory,
          image: categoryImages[i % categoryImages.length],
          rating: 3.5 + Math.random() * 1.5,
          location: location,
          city: city,
          address: location,
          phone: phone,
          email: generateEmail(businessName),
          description: category === 'decorators' 
                      ? "Specialized in creating beautiful and elegant wedding decorations that transform venues into magical spaces."
                      : category === 'caterers'
                      ? "Offering exquisite cuisine with diverse menu options for wedding ceremonies and receptions."
                      : category === 'photographers'
                      ? "Capturing the most precious moments of your special day with creativity and professionalism."
                      : "Creating stunning floral arrangements that bring your wedding vision to life.",
          price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
          gallery: categoryGalleryImages,
          services: categoryServices.slice(0, 5 + Math.floor(Math.random() * 5))
        });
      }
    });
  });

  return vendors;
};

export const vendors = generateVendors();

export const getVendorById = (id: number): Vendor | undefined => {
  return vendors.find(vendor => vendor.id === id);
};

export const getFeaturedVendors = (count: number = 6): Vendor[] => {
  // Shuffle the vendors array
  const shuffled = [...vendors].sort(() => 0.5 - Math.random());
  // Get the first 'count' elements
  return shuffled.slice(0, count);
};

export const getVendorsByCategory = (category: string): Vendor[] => {
  if (category === 'all') return vendors;
  return vendors.filter(vendor => vendor.category === category);
};

export const getVendorsByLocation = (location: string): Vendor[] => {
  if (!location) return vendors;
  const lowercaseLocation = location.toLowerCase();
  return vendors.filter(vendor => 
    vendor.location.toLowerCase().includes(lowercaseLocation) || 
    vendor.city.toLowerCase().includes(lowercaseLocation)
  );
};

export const filterVendors = (
  location: string,
  category: string = 'all',
  minRating: number = 0,
  priceRange: string[] = []
): Vendor[] => {
  return vendors.filter(vendor => {
    const matchesLocation = !location || 
                           vendor.location.toLowerCase().includes(location.toLowerCase()) ||
                           vendor.city.toLowerCase().includes(location.toLowerCase());
    
    const matchesCategory = category === 'all' || vendor.category === category;
    
    const matchesRating = vendor.rating >= minRating;
    
    const matchesPrice = priceRange.length === 0 || priceRange.includes(vendor.price);
    
    return matchesLocation && matchesCategory && matchesRating && matchesPrice;
  });
};
