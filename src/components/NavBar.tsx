
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-alex text-primary">Moments</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
          <Link to="/vendors" className="text-gray-700 hover:text-primary transition-colors">Find Vendors</Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact Us</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</Link>
          <Link to="/faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors flex items-center">
                <User className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-primary transition-colors flex items-center">
              <User className="h-4 w-4 mr-1" />
              Login/Signup
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-1">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full mt-4 container-custom">
          <div className="flex flex-col space-y-4 pb-4">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/vendors" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Find Vendors</Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Contact Us</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/faq" className="text-gray-700 hover:text-primary transition-colors" onClick={toggleMenu}>FAQ</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors flex items-center" onClick={toggleMenu}>
                  <User className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center justify-start p-0"
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-primary transition-colors flex items-center" onClick={toggleMenu}>
                <User className="h-4 w-4 mr-1" />
                Login/Signup
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
