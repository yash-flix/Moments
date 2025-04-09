
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface ReviewFormProps {
  vendorId: number;
  vendorName: string;
  onReviewSubmitted: () => void;
}

const ReviewForm = ({ vendorId, vendorName, onReviewSubmitted }: ReviewFormProps) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please login to leave a review.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating.",
        variant: "destructive",
      });
      return;
    }
    
    if (!comment.trim()) {
      toast({
        title: "Comment required",
        description: "Please write a comment for your review.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Save review to localStorage
    const review = {
      id: `review-${Date.now()}`,
      vendorId,
      rating,
      comment,
      date: new Date().toISOString(),
    };
    
    // Get user's existing reviews
    const userReviews = JSON.parse(localStorage.getItem(`reviews_${user?.id}`) || "[]");
    localStorage.setItem(`reviews_${user?.id}`, JSON.stringify([...userReviews, review]));
    
    // Get vendor's existing reviews
    const vendorReviews = JSON.parse(localStorage.getItem(`vendor_reviews_${vendorId}`) || "[]");
    localStorage.setItem(`vendor_reviews_${vendorId}`, JSON.stringify([...vendorReviews, {
      ...review,
      userName: user?.name
    }]));
    
    setTimeout(() => {
      setIsSubmitting(false);
      setRating(0);
      setComment("");
      
      toast({
        title: "Review submitted",
        description: `Your review for ${vendorName} has been submitted. Thank you!`
      });
      
      onReviewSubmitted();
    }, 1000);
  };

  if (!isAuthenticated) {
    return (
      <div className="text-center py-6 border rounded-md">
        <h3 className="text-lg font-medium mb-2">Write a Review</h3>
        <p className="text-gray-600 mb-4">Please login to leave a review</p>
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={() => navigate("/login")}
        >
          Login to Review
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md">
      <div>
        <h3 className="text-lg font-medium mb-4">Write a Review</h3>
        
        <div className="flex items-center mb-4">
          <p className="mr-2">Your rating:</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="p-1 focus:outline-none"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <Star
                  className={`h-6 w-6 ${
                    (hoverRating || rating) >= star
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this vendor..."
          className="min-h-32 mt-2"
        />
      </div>
      
      <Button 
        type="submit" 
        className="bg-primary hover:bg-primary/90 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default ReviewForm;
