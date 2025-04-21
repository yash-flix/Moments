
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import ServiceCategories from "@/components/ServiceCategories";
import TestimonialsSection from "@/components/TestimonialsSection";
import GetAssistanceForm from "@/components/GetAssistanceForm";
import FeaturedVendors from "@/components/FeaturedVendors";
import Chatbot from "@/components/Chatbot";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-black/50 bg-[url('https://t4.ftcdn.net/jpg/11/17/02/71/240_F_1117027196_0UBk1Sg9nsJl28fPW0XNDQxUYw68gAvy.jpg')] bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-alex mb-6">Find Your Perfect Wedding Vendors</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
            Discover top decorators, florists, photographers, and caterers in your area to make your special day unforgettable
          </p>
          <div className="flex justify-center">
            <Link to="/vendors">
              <Button className="h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium text-lg">
                Find Vendors
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Categories */}
      <ServiceCategories />
      
      {/* Featured Vendors */}
      <FeaturedVendors />
      
      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-alex text-gray-800 mb-4">Need Help Planning Your Wedding?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our wedding experts are ready to assist you in finding the perfect vendors for your special day.
          </p>
          <GetAssistanceForm />
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl text-center font-alex text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-gray-600">Enter your location and find wedding vendors in your area</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Compare</h3>
              <p className="text-gray-600">Compare vendors by reviews, pricing, and services offered</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">Reach out directly or request appointments with your chosen vendors</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Wedding Tips */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl text-center font-alex text-gray-800 mb-2">Wedding Planning Tips</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Expert advice and inspiration for planning your perfect wedding day
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Wedding Budget" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Top 10 Wedding Planning Tips for 2025</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Learn how to allocate your budget effectively without compromising on your dream wedding.
                </p>
                <Link to="/blog/top-10-wedding-planning-tips-for-2025" className="text-primary inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Venue Selection" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">How to Choose the Perfect Wedding Venue</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Key factors to consider when selecting a venue that matches your style and guest list.
                </p>
                <Link to="/blog/how-to-choose-the-perfect-wedding-venue" className="text-primary inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1528656707959-c9dc050e59a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Budget-Friendly Decorations" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Budget-Friendly Wedding Decoration Ideas</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Discover affordable yet stunning decoration ideas for your wedding day.
                </p>
                <Link to="/blog/budget-friendly-wedding-decoration-ideas" className="text-primary inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/blog" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block">
              Explore All Wedding Tips
            </Link>
          </div>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
      
      <Footer />
    </div>
  );
};

export default Index;
