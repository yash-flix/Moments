
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarIcon, MapPin } from "lucide-react";
import { getFeaturedVendors } from "@/data/vendors";

const FeaturedVendors = () => {
  const featuredVendors = getFeaturedVendors(6);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl text-center font-alex text-gray-800 mb-2">Featured Vendors</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover top-rated wedding professionals in your area
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVendors.map((vendor) => (
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
        
        <div className="text-center mt-10">
          <Link to="/vendors">
            <Button className="bg-primary hover:bg-primary/90">
              View All Vendors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
