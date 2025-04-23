import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { User, Calendar, ShoppingBag, Star, BarChart2, CheckSquare, X, Mail, Phone, MapPin } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
// import UserProfile from "@/components/dashboard/UserProfile"; // UserProfile component is already used inline
import AppointmentsList from "@/components/dashboard/AppointmentsList";
import ShortlistedVendors from "@/components/dashboard/ShortlistedVendors";
import ReviewsHistory from "@/components/dashboard/ReviewsHistory";
import VendorComparison from "@/components/dashboard/VendorComparison";
// import axios from "axios"; // No longer needed for fetching user profile
import WeddingChecklist from "@/components/dashboard/WeddingChecklist";

const Dashboard = () => {
  const { isAuthenticated, user, isLoading: authLoading } = useAuth(); // Get isAuthenticated, user, and authLoading from context
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  // Remove the old useEffect for fetching user data via axios
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     axios
  //       .get("http://localhost:5000/api/profile", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         setUser(response.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data:", error);
  //         navigate("/login");
  //       });
  //   } else {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  // Use authLoading from context for the initial loading state
  if (authLoading) {
    return <div className="text-center">Loading dashboard...</div>; // Show loading while auth state is determined
  }

  // If not authenticated after loading, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container-custom py-8 flex-1">
        {/* Use user.name from context */}        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-alex text-primary">Welcome, {user?.name || user?.email}</h1>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Appointments</span>
            </TabsTrigger>
            <TabsTrigger value="shortlisted" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Shortlisted</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Reviews</span>
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              <span className="hidden sm:inline">Compare</span>
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Checklist</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="profile">
              {/* Use the UserProfile component or display info inline from context */}
                <Card>
                  <CardHeader>
                    <CardTitle>User Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Display user information from the authenticated user object */}
                    <div className="space-y-4">
                       <div className="flex items-center gap-2">
                         <User className="h-4 w-4 text-gray-600" />
                         <div><strong>Name:</strong> {user?.name || "Not provided"}</div>
                       </div>
                       <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-600" />
                          <div><strong>Email:</strong> {user?.email || "Not provided"}</div>
                       </div>
                       <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-600" />
                          <div><strong>Phone:</strong> {user?.phone || "Not provided"}</div>
                       </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-600" />
                          <div><strong>Location:</strong> {user?.location || "Not provided"}</div>
                       </div>
                    </div>
                  </CardContent>
                </Card>
            </TabsContent>
            
            <TabsContent value="appointments">
              <AppointmentsList />
            </TabsContent>
            
            <TabsContent value="shortlisted">
              <ShortlistedVendors />
            </TabsContent>
            
            <TabsContent value="reviews">
              <ReviewsHistory />
            </TabsContent>
            
            <TabsContent value="comparison">
              <VendorComparison />
            </TabsContent>
            
            <TabsContent value="checklist">
              <WeddingChecklist />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
