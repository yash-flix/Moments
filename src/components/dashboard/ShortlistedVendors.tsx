
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Heart, Trash2, Star, MapPin, Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getVendorById } from "@/data/vendors";

interface ShortlistedVendor {
  id: number;
  dateAdded: string;
}

const ShortlistedVendors = () => {
  const { user } = useAuth();
  const [shortlisted, setShortlisted] = useState<ShortlistedVendor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch shortlisted vendors from localStorage
    const fetchShortlisted = () => {
      setIsLoading(true);
      try {
        const storedShortlisted = localStorage.getItem(`shortlisted_${user?.id}`);
        if (storedShortlisted) {
          setShortlisted(JSON.parse(storedShortlisted));
        } else {
          // Dummy data for demonstration
          const dummyShortlisted: ShortlistedVendor[] = [
            {
              id: 1,
              dateAdded: new Date().toISOString()
            },
            {
              id: 5,
              dateAdded: new Date().toISOString()
            }
          ];
          
          setShortlisted(dummyShortlisted);
          localStorage.setItem(`shortlisted_${user?.id}`, JSON.stringify(dummyShortlisted));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchShortlisted();
  }, [user?.id]);

  const removeFromShortlist = (vendorId: number) => {
    const updatedShortlisted = shortlisted.filter(item => item.id !== vendorId);
    setShortlisted(updatedShortlisted);
    localStorage.setItem(`shortlisted_${user?.id}`, JSON.stringify(updatedShortlisted));
    
    toast({
      title: "Vendor removed",
      description: "The vendor has been removed from your shortlist."
    });
  };

  const addToCompare = (vendorId: number) => {
    // Get current comparison list
    const currentCompare = JSON.parse(localStorage.getItem(`compare_${user?.id}`) || "[]");
    
    // Check if already in comparison
    if (currentCompare.includes(vendorId)) {
      toast({
        title: "Already in comparison",
        description: "This vendor is already in your comparison list."
      });
      return;
    }
    
    // Check if comparison list is full
    if (currentCompare.length >= 3) {
      toast({
        title: "Comparison list full",
        description: "You can compare up to 3 vendors at a time. Please remove one first.",
        variant: "destructive"
      });
      return;
    }
    
    // Add to comparison list
    const updatedCompare = [...currentCompare, vendorId];
    localStorage.setItem(`compare_${user?.id}`, JSON.stringify(updatedCompare));
    
    toast({
      title: "Added to comparison",
      description: "Vendor added to your comparison list. Go to Compare tab to view."
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-alex text-primary">Shortlisted Vendors</CardTitle>
          <CardDescription>Loading your shortlisted vendors...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-alex text-primary">Shortlisted Vendors</CardTitle>
        <CardDescription>Manage your favorite wedding vendors</CardDescription>
      </CardHeader>
      <CardContent>
        {shortlisted.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No shortlisted vendors yet</h3>
            <p className="text-gray-500 mb-4">
              Browse vendors and shortlist your favorites to keep track of them.
            </p>
            <Link to="/vendors">
              <Button className="bg-primary hover:bg-primary/90">
                Browse Vendors
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shortlisted.map((item) => {
              const vendor = getVendorById(item.id);
              if (!vendor) return null;
              
              return (
                <div 
                  key={item.id} 
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 h-32 sm:h-auto">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/vendor/${vendor.id}`}>
                            <h3 className="font-medium hover:text-primary">{vendor.name}</h3>
                          </Link>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{vendor.location}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < Math.floor(vendor.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm">{vendor.rating.toFixed(1)}</span>
                          </div>
                          <Badge className="mt-2">{vendor.category}</Badge>
                        </div>
                        <div className="text-lg font-medium">{vendor.price}</div>
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <Link to={`/vendor/${vendor.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => addToCompare(vendor.id)}
                        >
                          Compare
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-red-600 border-red-600"
                          onClick={() => removeFromShortlist(vendor.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShortlistedVendors;
