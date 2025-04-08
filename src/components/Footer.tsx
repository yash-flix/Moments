
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const email = emailInput.value;
    
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You've been added to our newsletter.",
      });
      
      emailInput.value = "";
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-alex text-primary mb-4">Moments</h3>
            <p className="text-gray-400 mb-6">
              Connecting couples with perfect wedding vendors across India to create memorable celebrations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/vendors" className="text-gray-400 hover:text-primary transition-colors">Find Vendors</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Vendor Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/vendors?category=decorators" className="text-gray-400 hover:text-primary transition-colors">Decorators</Link>
              </li>
              <li>
                <Link to="/vendors?category=caterers" className="text-gray-400 hover:text-primary transition-colors">Caterers</Link>
              </li>
              <li>
                <Link to="/vendors?category=photographers" className="text-gray-400 hover:text-primary transition-colors">Photographers</Link>
              </li>
              <li>
                <Link to="/vendors?category=florists" className="text-gray-400 hover:text-primary transition-colors">Florists</Link>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4">Top Cities</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/vendors?city=Delhi" className="text-gray-400 hover:text-primary transition-colors">Delhi</Link>
              </li>
              <li>
                <Link to="/vendors?city=Mumbai" className="text-gray-400 hover:text-primary transition-colors">Mumbai</Link>
              </li>
              <li>
                <Link to="/vendors?city=Bangalore" className="text-gray-400 hover:text-primary transition-colors">Bangalore</Link>
              </li>
              <li>
                <Link to="/vendors?city=Chennai" className="text-gray-400 hover:text-primary transition-colors">Chennai</Link>
              </li>
              <li>
                <Link to="/vendors?city=Kolkata" className="text-gray-400 hover:text-primary transition-colors">Kolkata</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get the latest wedding trends, tips, and vendor recommendations sent to your inbox.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your email address" 
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Moments. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
