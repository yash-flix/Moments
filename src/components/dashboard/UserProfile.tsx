
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Mail } from "lucide-react"; // Removed User, Phone, MapPin icons

const UserProfile = () => {
  const { user, updateUserProfile } = useAuth();
  
  const [isEditing, setIsEditing] = useState(false);
  // Removed state for name, phone, location as they are not displayed or edited here
  const [email, setEmail] = useState(user?.email || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Only update email if it has changed. Name, phone, location are not handled here.
      const updateData: { email?: string } = {};
      if (email !== user?.email) updateData.email = email;

      if (Object.keys(updateData).length > 0) {
         await updateUserProfile(updateData);
      }
     
      setIsEditing(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Update failed",
        description: "There was an error updating your profile.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-alex text-primary">Your Profile</CardTitle>
        <CardDescription>Manage your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Removed editing form as there are no fields to edit */}
        {/*
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Removed Name Input */}
            {/* Removed Phone Input */}
            {/* Removed Location Input */}
            
            {/* Email input kept as example if it were editable */}
            {/*
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                disabled // Email is often not editable after signup
              />
            </div>
            */}
            
            {/* Removed Save and Cancel buttons */}
            {/*
            <div className="flex space-x-4 pt-4">
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
            */}
          {/*</form>
        ) : (*/}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              {/* Removed Name Display */}
              {/* Removed Phone Display */}
              {/* Removed Location Display */}
              
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 rounded-full p-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user?.email || "Not provided"}</p>
                </div>
              </div>
              
            </div>
            
            {/* Removed Edit Profile button as there are no fields to edit */}
            {/* 
            <Button 
              onClick={() => setIsEditing(true)} 
              className="bg-primary hover:bg-primary/90 mt-4"
            >
              Edit Profile
            </Button>
            */}
          </div>
        {/*)}*/}
      </CardContent>
    </Card>
  );
};

export default UserProfile;
