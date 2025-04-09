
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { BarChart2, Trash2, Star, MapPin, Phone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getVendorById } from "@/data/vendors";

const VendorComparison = () => {
  const { user } = useAuth();
  const [vendorIds, setVendorIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch comparison list from localStorage
    const fetchComparison = () => {
      setIsLoading(true);
      try {
        const storedComparison = localStorage.getItem(`compare_${user?.id}`);
        if (storedComparison) {
          setVendorIds(JSON.parse(storedComparison));
        } else {
          // Dummy data for demonstration
          const dummyComparison: number[] = [1, 5];
          setVendorIds(dummyComparison);
          localStorage.setItem(`compare_${user?.id}`, JSON.stringify(dummyComparison));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchComparison();
  }, [user?.id]);

  const removeFromComparison = (vendorId: number) => {
    const updatedComparison = vendorIds.filter(id => id !== vendorId);
    setVendorIds(updatedComparison);
    localStorage.setItem(`compare_${user?.id}`, JSON.stringify(updatedComparison));
    
    toast({
      title: "Vendor removed",
      description: "The vendor has been removed from your comparison."
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-alex text-primary">Vendor Comparison</CardTitle>
          <CardDescription>Loading your comparison data...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const vendors = vendorIds.map(id => getVendorById(id)).filter(v => v !== undefined);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-alex text-primary">Vendor Comparison</CardTitle>
        <CardDescription>Compare up to 3 vendors side-by-side</CardDescription>
      </CardHeader>
      <CardContent>
        {vendors.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <BarChart2 className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No vendors to compare</h3>
            <p className="text-gray-500 mb-4">
              Add vendors to your comparison list from the Shortlisted Vendors tab or from vendor pages.
            </p>
            <Link to="/vendors">
              <Button className="bg-primary hover:bg-primary/90">
                Browse Vendors
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 border-b">Comparison Criteria</th>
                    {vendors.map(vendor => (
                      <th key={vendor?.id} className="text-left p-2 border-b">
                        <div>
                          <Link to={`/vendor/${vendor?.id}`} className="font-medium hover:text-primary">
                            {vendor?.name}
                          </Link>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <Badge>{vendor?.category}</Badge>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-red-600 h-6 w-6 p-0"
                            onClick={() => removeFromComparison(vendor?.id as number)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </th>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <th key={`empty-${index}`} className="text-left p-2 border-b">
                        <div className="h-20 border-2 border-dashed border-gray-200 rounded-md flex items-center justify-center">
                          <Link to="/vendors">
                            <Button variant="ghost" className="text-gray-500">
                              + Add Vendor
                            </Button>
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">Image</td>
                    {vendors.map(vendor => (
                      <td key={`img-${vendor?.id}`} className="p-2 border-b">
                        <div className="h-24 w-24 overflow-hidden rounded-md">
                          <img 
                            src={vendor?.image} 
                            alt={vendor?.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <td key={`empty-img-${index}`} className="p-2 border-b"></td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Rating</td>
                    {vendors.map(vendor => (
                      <td key={`rating-${vendor?.id}`} className="p-2 border-b">
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(vendor?.rating || 0) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                              />
                            ))}
                          </div>
                          <span>{vendor?.rating.toFixed(1)}</span>
                        </div>
                      </td>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <td key={`empty-rating-${index}`} className="p-2 border-b"></td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Price</td>
                    {vendors.map(vendor => (
                      <td key={`price-${vendor?.id}`} className="p-2 border-b">
                        <div>{vendor?.price}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          {vendor?.price === "$" && "Budget-friendly"}
                          {vendor?.price === "$$" && "Moderate pricing"}
                          {vendor?.price === "$$$" && "Premium services"}
                          {vendor?.price === "$$$$" && "Luxury services"}
                        </div>
                      </td>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <td key={`empty-price-${index}`} className="p-2 border-b"></td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Location</td>
                    {vendors.map(vendor => (
                      <td key={`location-${vendor?.id}`} className="p-2 border-b">
                        {vendor?.location}
                      </td>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <td key={`empty-location-${index}`} className="p-2 border-b"></td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Services</td>
                    {vendors.map(vendor => (
                      <td key={`services-${vendor?.id}`} className="p-2 border-b">
                        <ul className="list-disc pl-5 space-y-1">
                          {vendor?.services.slice(0, 3).map((service, index) => (
                            <li key={index} className="text-sm">{service}</li>
                          ))}
                          {(vendor?.services.length || 0) > 3 && (
                            <li className="text-sm text-primary">+ more</li>
                          )}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <td key={`empty-services-${index}`} className="p-2 border-b"></td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Contact</td>
                    {vendors.map(vendor => (
                      <td key={`contact-${vendor?.id}`} className="p-2 border-b">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Phone className="h-3 w-3 mr-1" />
                            <a href={`tel:${vendor?.phone}`} className="hover:underline">
                              {vendor?.phone}
                            </a>
                          </div>
                          <div className="text-sm">
                            <a href={`mailto:${vendor?.email}`} className="hover:underline">
                              {vendor?.email}
                            </a>
                          </div>
                        </div>
                      </td>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <td key={`empty-contact-${index}`} className="p-2 border-b"></td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2">Actions</td>
                    {vendors.map(vendor => (
                      <td key={`actions-${vendor?.id}`} className="p-2">
                        <div className="flex space-x-2">
                          <Link to={`/vendor/${vendor?.id}`}>
                            <Button className="bg-primary hover:bg-primary/90">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </td>
                    ))}
                    {Array.from({ length: 3 - vendors.length }).map((_, index) => (
                      <td key={`empty-actions-${index}`} className="p-2"></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VendorComparison;
