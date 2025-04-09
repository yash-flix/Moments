
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface VendorActionsProps {
  vendorId: number;
  vendorName: string;
}

const VendorActions = ({ vendorId, vendorName }: VendorActionsProps) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isShortlisted, setIsShortlisted] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      // Check if vendor is shortlisted
      const shortlisted = JSON.parse(localStorage.getItem(`shortlisted_${user.id}`) || "[]");
      setIsShortlisted(shortlisted.some((item: any) => item.id === vendorId));
    }
  }, [vendorId, user, isAuthenticated]);

  const toggleShortlist = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please login to shortlist vendors.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    // Get current shortlisted
    const shortlisted = JSON.parse(localStorage.getItem(`shortlisted_${user?.id}`) || "[]");
    
    if (isShortlisted) {
      // Remove from shortlist
      const updatedShortlisted = shortlisted.filter((item: any) => item.id !== vendorId);
      localStorage.setItem(`shortlisted_${user?.id}`, JSON.stringify(updatedShortlisted));
      setIsShortlisted(false);
      
      toast({
        title: "Removed from shortlist",
        description: `${vendorName} has been removed from your shortlist.`
      });
    } else {
      // Add to shortlist
      const newShortlistedItem = {
        id: vendorId,
        dateAdded: new Date().toISOString()
      };
      
      const updatedShortlisted = [...shortlisted, newShortlistedItem];
      localStorage.setItem(`shortlisted_${user?.id}`, JSON.stringify(updatedShortlisted));
      setIsShortlisted(true);
      
      toast({
        title: "Added to shortlist",
        description: `${vendorName} has been added to your shortlist.`
      });
    }
  };

  const shareVendor = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Vendor link copied to clipboard. Share it with others!"
    });
  };

  return (
    <div className="flex space-x-2">
      <Button 
        variant="outline" 
        className={`flex items-center ${isShortlisted ? 'text-red-500 border-red-500' : ''}`}
        onClick={toggleShortlist}
      >
        <Heart className={`h-4 w-4 mr-2 ${isShortlisted ? 'fill-red-500' : ''}`} />
        {isShortlisted ? 'Shortlisted' : 'Shortlist'}
      </Button>
      
      <Button 
        variant="outline" 
        className="flex items-center"
        onClick={shareVendor}
      >
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
    </div>
  );
};

export default VendorActions;
