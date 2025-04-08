
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
import { vendors, filterVendors } from "@/data/vendors";

const priceOptions = [
  { label: "$", value: "$" },
  { label: "$$", value: "$$" },
  { label: "$$$", value: "$$$" },
  { label: "$$$$", value: "$$$$" },
];

const categoryOptions = [
  "All",
  "Decorators",
  "Florists", 
  "Photographers", 
  "Caterers"
];

const ratingOptions = [3, 4, 5];

const cityOptions = [
  "Delhi", 
  "Mumbai", 
  "Bangalore", 
  "Chennai", 
  "Kolkata"
];

const Vendors = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Filters
  const [searchLocation, setSearchLocation] = useState(queryParams.get("location") || "");
  const [selectedCategory, setSelectedCategory] = useState(queryParams.get("category") || "All");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>("");
  
  // Process vendors based on filters
  const filteredVendors = vendors.filter(vendor => {
    // Convert category to lowercase for matching
    const vendorCategory = vendor.category.charAt(0).toUpperCase() + vendor.category.slice(1);
    
    const matchesCategory = selectedCategory === "All" || 
                           vendorCategory === selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
    
    const matchesRating = selectedRating === null || vendor.rating >= selectedRating;
    
    const matchesPrice = selectedPrices.length === 0 || selectedPrices.includes(vendor.price);
    
    const matchesLocation = searchLocation === "" || 
      vendor.location.toLowerCase().includes(searchLocation.toLowerCase());
      
    const matchesCity = selectedCity === "" || 
      vendor.city.toLowerCase() === selectedCity.toLowerCase();
      
    return matchesCategory && matchesRating && matchesPrice && matchesLocation && matchesCity;
  });
  
  const togglePriceFilter = (price: string) => {
    if (selectedPrices.includes(price)) {
      setSelectedPrices(selectedPrices.filter(p => p !== price));
    } else {
      setSelectedPrices([...selectedPrices, price]);
    }
  };
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchLocation) params.set("location", searchLocation);
    if (selectedCategory !== "All") params.set("category", selectedCategory.toLowerCase());
    if (selectedCity) params.set("city", selectedCity);
    
    const newUrl = `${location.pathname}?${params.toString()}`;
    navigate(newUrl, { replace: true });
  }, [searchLocation, selectedCategory, selectedCity, navigate, location.pathname]);
  
  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = queryParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));
    }
    
    const cityParam = queryParams.get("city");
    if (cityParam) {
      setSelectedCity(cityParam);
    }
  }, []);
  
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
                <label className="block text-sm font-medium mb-2">City</label>
                <div className="space-y-2">
                  <select 
                    className="w-full p-2 border rounded-md" 
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="">All Cities</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
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
                <div className="space-y-2">
                  {priceOptions.map((price) => (
                    <label key={price.value} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPrices.includes(price.value)}
                        onChange={() => togglePriceFilter(price.value)}
                        className="mr-2"
                      />
                      <span>{price.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedRating(null);
                  setSelectedPrices([]);
                  setSearchLocation("");
                  setSelectedCity("");
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
                  <label className="block text-sm font-medium mb-2">City</label>
                  <select 
                    className="w-full p-2 border rounded-md" 
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="">All Cities</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
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
                  <div className="flex flex-wrap gap-2">
                    {priceOptions.map((price) => (
                      <button
                        key={price.value}
                        onClick={() => togglePriceFilter(price.value)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedPrices.includes(price.value) 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {price.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedRating(null);
                      setSelectedPrices([]);
                      setSearchLocation("");
                      setSelectedCity("");
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
                    setSelectedPrices([]);
                    setSearchLocation("");
                    setSelectedCity("");
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
                            {vendor.category.charAt(0).toUpperCase() + vendor.category.slice(1)}
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
                              <span className="text-sm font-medium">{vendor.rating.toFixed(1)}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-2 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> {vendor.location}
                          </p>
                          <p className="text-sm text-gray-700 line-clamp-2">{vendor.description}</p>
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
