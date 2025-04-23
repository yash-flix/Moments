import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vendors from "./pages/Vendors";
import VendorDetail from "./pages/VendorDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { useAuth } from "./context/AuthContext"; // Import useAuth

const queryClient = new QueryClient();

const App = () => {
  const { isLoading } = useAuth(); // Get isLoading from AuthContext

  // While authentication state is loading, show a loading indicator
  if (isLoading) {
    return <div>Loading application...</div>; // Or a spinner component
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* AuthProvider is now in main.tsx */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendor/:id" element={<VendorDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Faq />} />
            
            {/* Protect Login and Signup routes - only accessible when NOT authenticated */}
            <Route element={<PublicRoute restricted={true} />} >
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Protect the Dashboard route - only accessible when authenticated */}          
            <Route element={<ProtectedRoute />} >
               <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
