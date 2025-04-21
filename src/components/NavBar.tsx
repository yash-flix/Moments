
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);
  
  const isLoggedIn = !!localStorage.getItem('token');
  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          {/* Hamburger Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMenu} 
            className="p-1 mr-4 text-[#FA5F55]"
            aria-label="Navigation Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-alex text-primary">Moments</h1>
          </Link>
        </div>

        {/* Login/Signup Button - Always Visible */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <Link 
                to="/dashboard" 
                className="text-[#FA5F55] hover:text-[#d84941] transition-colors flex items-center px-4 py-2 rounded-md"
              >
                Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="text-[#FA5F55] hover:text-[#d84941] transition-colors flex items-center px-4 py-2 rounded-md"
              >
                 Profile
              </Link>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-[#FA5F55] border-[#FA5F55] hover:bg-[#FA5F55] hover:text-white transition-colors flex items-center"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-white text-[#FA5F55] border border-[#FA5F55] hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors flex items-center"
            >
              <User className="h-4 w-4 mr-1" />
              Login/Signup
            </Link>
          )}
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="absolute left-0 top-16 w-64 bg-white shadow-md z-50 rounded-br-md"
        >
          <div className="flex flex-col space-y-1 p-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>


            <Link 
              to="/" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/vendors" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Find Vendors
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/testimonials" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:bg-[#FA5F55] hover:text-white px-4 py-2 rounded-md transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
