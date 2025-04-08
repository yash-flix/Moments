
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { StarIcon, Search, MapPin, Filter } from "lucide-react";
import Chatbot from "@/components/Chatbot";

// Sample data for demonstration
const mockVendors = [
  {
    id: 1,
    name: "Elegant Occasions",
    category: "Decorators",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    location: "Los Angeles, CA",
    description: "Transforming venues into magical spaces with creative decorations and lighting.",
    price: "$$"
  },
  {
    id: 2,
    name: "Blooming Bliss",
    category: "Florists",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.8,
    location: "San Francisco, CA",
    description: "Stunning floral arrangements that bring your wedding vision to life.",
    price: "$$$"
  },
  {
    id: 3,
    name: "Captured Moments",
    category: "Photographers",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 5.0,
    location: "New York, NY",
    description: "Award-winning photographers capturing the emotion and beauty of your special day.",
    price: "$$$"
  },
  {
    id: 4,
    name: "Gourmet Celebrations",
    category: "Caterers",
    image: "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.7,
    location: "Chicago, IL",
    description: "Exquisite cuisine that delights all tastes and dietary preferences.",
    price: "$$$$"
  },
  {
    id: 5,
    name: "Dreamy Designs",
    category: "Decorators",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    location: "Seattle, WA",
    description: "Creative decorations for weddings of all styles and budgets.",
    price: "$"
  },
  {
    id: 6,
    name: "Floral Fantasy",
    category: "Florists",
    image: "https://images.unsplash.com/photo-1464699908537-0954e50189af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.5,
    location: "Miami, FL",
    description: "Lush, romantic floral designs for your wedding ceremony and reception.",
    price: "$$"
  },
  {
    id: 7,
    name: "Lens Masters",
    category: "Photographers",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.9,
    location: "Denver, CO",
    description: "Modern, artistic photography with a storytelling approach.",
    price: "$$"
  },
  {
    id: 8,
    name: "Savory Delights",
    category: "Caterers",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.8,
    location: "Boston, MA",
    description: "Gourmet food with customizable menus for every taste and budget.",
    price: "$$$"
  },
];

const priceOptions = [
  { label: "$", value: 1 },
  { label: "$$", value: 2 },
  { label: "$$$", value: 3 },
  { label: "$$$$", value: 4 },
];

const categoryOptions = [
  "All",
  "Decorators",
  "Florists", 
  "Photographers", 
  "Caterers"
];

const ratingOptions = [3, 4, 5];

const Vendors = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Filters
  const [searchLocation, setSearchLocation] = useState(queryParams.get("location") || "");
  const [selectedCategory, setSelectedCategory] = useState(queryParams.get("category") || "All");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([1, 4]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Process vendors based on filters
  const filteredVendors = mockVendors.filter(vendor => {
    const matchesCategory = selectedCategory === "All" || vendor.category === selectedCategory;
    const matchesRating = selectedRating === null || vendor.rating >= selectedRating;
    const matchesPrice = vendor.price.length >= priceRange[0] && vendor.price.length <= priceRange[1];
    const matchesLocation = searchLocation === "" || 
      vendor.location.toLowerCase().includes(searchLocation.toLowerCase());
      
    return matchesCategory && matchesRating && matchesPrice && matchesLocation;
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchLocation) params.set("location", searchLocation);
    if (selectedCategory !== "All") params.set("category", selectedCategory);
    
    const newUrl = `${location.pathname}?${params.toString()}`;
    navigate(newUrl, { replace: true });
  }, [searchLocation, selectedCategory, navigate, location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-alex text-gray-800 mb-2">Find Wedding Vendors</h1>
          <p className="text-gray-600">
            Discover the perfect service providers for your special day
          </p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border p-4 sticky top-4">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Location</label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-9 w-full"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Category</label>
                <div className="space-y-2">
                  {categoryOptions.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="space-y-2">
                  {ratingOptions.map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="mr-2"
                      />
                      <span className="flex items-center">
                        {rating}+ <StarIcon className="h-3 w-3 text-yellow-500 ml-1" fill="currentColor" />
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[1, 4]}
                    min={1}
                    max={4}
                    step={1}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value)}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{priceOptions[priceRange[0]-1].label}</span>
                    <span>to</span>
                    <span>{priceOptions[priceRange[1]-1].label}</span>
                  </div>
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedRating(null);
                  setPriceRange([1, 4]);
                  setSearchLocation("");
                }}
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Button 
              variant="outline" 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            
            {/* Mobile Filters */}
            {isMobileFilterOpen && (
              <div className="bg-white rounded-lg border p-4 mt-2">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Enter location"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-9 w-full"
                    />
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategory === category 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-2">
                    {ratingOptions.map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating === selectedRating ? null : rating)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedRating === rating 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {rating}+ <StarIcon className="inline h-3 w-3 ml-1" fill="currentColor" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <div className="px-2">
                    <Slider
                      defaultValue={[1, 4]}
                      min={1}
                      max={4}
                      step={1}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value)}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{priceOptions[priceRange[0]-1].label}</span>
                      <span>to</span>
                      <span>{priceOptions[priceRange[1]-1].label}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedRating(null);
                      setPriceRange([1, 4]);
                      setSearchLocation("");
                    }}
                    className="flex-1"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Vendors Listing */}
          <div className="flex-1">
            {filteredVendors.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No vendors found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search for a different location.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedRating(null);
                    setPriceRange([1, 4]);
                    setSearchLocation("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-4 flex justify-between items-center">
                  <p className="text-gray-600">
                    {filteredVendors.length} vendors found
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    <select className="text-sm border rounded-md px-2 py-1">
                      <option>Rating: High to Low</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Alphabetical</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                          <div className="absolute top-0 right-0 bg-white text-gray-800 px-3 py-1 text-sm">
                            {vendor.price}
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
                          <p className="text-sm text-gray-500 mb-2 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> {vendor.location}
                          </p>
                          <p className="text-sm text-gray-700">{vendor.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Vendors;
