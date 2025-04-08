
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/vendors?location=${encodeURIComponent(location.trim())}`);
    }
  };

  const indianCities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 w-full max-w-2xl">
      <div className="flex-grow relative">
        <Input
          type="text"
          placeholder="Enter your location to find wedding services"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-white/95 h-12 pl-4 pr-10 text-lg rounded-md"
          list="indian-cities"
        />
        <datalist id="indian-cities">
          {indianCities.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist>
      </div>
      <Button 
        type="submit" 
        className="h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium"
      >
        <SearchIcon className="mr-2 h-5 w-5" />
        Find Vendors
      </Button>
    </form>
  );
};

export default SearchBox;
