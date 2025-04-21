
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { User, Calendar, ShoppingBag, Star, BarChart2, CheckSquare, X } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import UserProfile from "@/components/dashboard/UserProfile";
import AppointmentsList from "@/components/dashboard/AppointmentsList";
import ShortlistedVendors from "@/components/dashboard/ShortlistedVendors";
import ReviewsHistory from "@/components/dashboard/ReviewsHistory";
import VendorComparison from "@/components/dashboard/VendorComparison";
import axios from "axios";
import WeddingChecklist from "@/components/dashboard/WeddingChecklist";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container-custom py-8 flex-1">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-alex text-primary">Welcome, {user?.username}</h1>
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
              <Card>
                <CardHeader>
                  <CardTitle>User Profile</CardTitle>
                </CardHeader>
                <CardContent><div>Username: {user?.username}</div><div>Email: {user?.email}</div></CardContent>
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
