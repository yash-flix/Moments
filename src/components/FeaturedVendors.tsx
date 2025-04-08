
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const vendors = [
  {
    id: 1,
    name: "Elegant Occasions",
    category: "Decorators",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    location: "Los Angeles, CA",
    description: "Transforming venues into magical spaces with creative decorations and lighting.",
  },
  {
    id: 2,
    name: "Blooming Bliss",
    category: "Florists",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.8,
    location: "San Francisco, CA",
    description: "Stunning floral arrangements that bring your wedding vision to life.",
  },
  {
    id: 3,
    name: "Captured Moments",
    category: "Photographers",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 5.0,
    location: "New York, NY",
    description: "Award-winning photographers capturing the emotion and beauty of your special day.",
  },
  {
    id: 4,
    name: "Gourmet Celebrations",
    category: "Caterers",
    image: "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.7,
    location: "Chicago, IL",
    description: "Exquisite cuisine that delights all tastes and dietary preferences.",
  },
];

const FeaturedVendors = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredVendors = selectedCategory 
    ? vendors.filter(vendor => vendor.category.toLowerCase() === selectedCategory.toLowerCase())
    : vendors;
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl text-center font-alex text-gray-800 mb-2">Featured Vendors</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover our top-rated service providers who can make your wedding dreams come true
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {Array.from(new Set(vendors.map(v => v.category))).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVendors.map((vendor) => (
            <Link to={`/vendor/${vendor.id}`} key={vendor.id}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full">
                <div className="relative h-48">
                  <img 
                    src={vendor.image} 
                    alt={vendor.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1 text-sm">
                    {vendor.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{vendor.name}</h3>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                      <span className="text-sm font-medium">{vendor.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{vendor.location}</p>
                  <p className="text-sm text-gray-700">{vendor.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/vendors">
            <Button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white">
              View All Vendors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
}) => {
  return (
    <button
      className={`rounded-md font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FeaturedVendors;
