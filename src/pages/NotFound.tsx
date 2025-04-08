
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          <h1 className="text-6xl font-alex text-primary mb-4">404</h1>
          <h2 className="text-2xl font-playfair font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
