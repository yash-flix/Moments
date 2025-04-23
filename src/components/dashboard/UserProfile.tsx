
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Mail } from "lucide-react"; // Only Mail icon is needed now

const UserProfile = () => {
  const { user, updateUserProfile } = useAuth();
  
  const [isEditing, setIsEditing] = useState(false);
  // Name, phone, location states removed
  const [email, setEmail] = useState(user?.email || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Only update email if it has changed
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
        {/* Editing form removed as only email is displayed and it's disabled */}
        {/*
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                disabled
              />
            </div>
            
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
          </form>
        ) : (*/}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              {/* Name, Phone, Location display removed */}
              
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
            
            {/* Edit Profile button removed */}
          </div>
        {/*)}*/}
      </CardContent>
    </Card>
  );
};

export default UserProfile;
