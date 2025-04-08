
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-alex text-primary mb-4">Forever After Finder</h3>
            <p className="text-gray-600 mb-4">Find the perfect wedding service providers in your area - decorators, florists, photographers, and caterers.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/vendors" className="text-gray-600 hover:text-primary transition-colors">Find Vendors</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Vendor Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/vendors?category=decorators" className="text-gray-600 hover:text-primary transition-colors">Decorators</Link></li>
              <li><Link to="/vendors?category=florists" className="text-gray-600 hover:text-primary transition-colors">Florists</Link></li>
              <li><Link to="/vendors?category=photographers" className="text-gray-600 hover:text-primary transition-colors">Photographers</Link></li>
              <li><Link to="/vendors?category=caterers" className="text-gray-600 hover:text-primary transition-colors">Caterers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-600">
              <p className="mb-2">123 Wedding Lane</p>
              <p className="mb-2">Celebration City, CA 90210</p>
              <p className="mb-2">Email: info@foreverafterfinder.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Forever After Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
