
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MessageSquare, Edit, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { getVendorById } from "@/data/vendors";
import { format } from "date-fns";

interface Review {
  id: string;
  vendorId: number;
  rating: number;
  comment: string;
  date: string;
}

const ReviewsHistory = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch reviews from localStorage
    const fetchReviews = () => {
      setIsLoading(true);
      try {
        const storedReviews = localStorage.getItem(`reviews_${user?.id}`);
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
        } else {
          // Dummy data for demonstration
          const dummyReviews: Review[] = [
            {
              id: "rev1",
              vendorId: 1,
              rating: 5,
              comment: "Excellent service! Very professional and responsive.",
              date: new Date().toISOString()
            },
            {
              id: "rev2",
              vendorId: 5,
              rating: 4,
              comment: "Good decorations, slightly pricey but worth it.",
              date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
            }
          ];
          
          setReviews(dummyReviews);
          localStorage.setItem(`reviews_${user?.id}`, JSON.stringify(dummyReviews));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [user?.id]);

  const deleteReview = (reviewId: string) => {
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${user?.id}`, JSON.stringify(updatedReviews));
    
    toast({
      title: "Review deleted",
      description: "Your review has been deleted successfully."
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-alex text-primary">Your Reviews</CardTitle>
          <CardDescription>Loading your reviews...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-alex text-primary">Your Reviews</CardTitle>
        <CardDescription>Reviews you've posted for vendors</CardDescription>
      </CardHeader>
      <CardContent>
        {reviews.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <MessageSquare className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
            <p className="text-gray-500 mb-4">
              You haven't posted any reviews for vendors.
            </p>
            <Link to="/vendors">
              <Button className="bg-primary hover:bg-primary/90">
                Browse Vendors
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => {
              const vendor = getVendorById(review.vendorId);
              if (!vendor) return null;
              
              return (
                <div 
                  key={review.id} 
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between">
                    <Link to={`/vendor/${vendor.id}`}>
                      <h3 className="font-medium hover:underline">{vendor.name}</h3>
                    </Link>
                    <div className="text-sm text-gray-500">
                      {format(new Date(review.date), "MMM d, yyyy")}
                    </div>
                  </div>
                  
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="mt-3 text-gray-700">{review.comment}</p>
                  
                  <div className="flex space-x-2 mt-4">
                    <Link to={`/vendor/${vendor.id}`}>
                      <Button variant="outline" size="sm">
                        View Vendor
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-600 border-red-600"
                      onClick={() => deleteReview(review.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
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

export default ReviewsHistory;
