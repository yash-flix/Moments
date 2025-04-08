
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    content: "Moments made our wedding planning journey so much easier! We found an amazing decorator and photographer through the platform, and the 'Get Assistance' feature connected us with a consultant who helped coordinate everything. Our wedding was exactly as we dreamed it would be.",
    date: "March 15, 2025",
    vendors: ["Elegant Affairs", "SnapSavvy"]
  },
  {
    id: 2,
    name: "Ananya & Vikram",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1637764154038-31b806020609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 5,
    content: "Planning a destination wedding in Mumbai while living abroad seemed impossible until we discovered Moments. The vendor reviews were detailed and honest, helping us make confident decisions from a distance. The caterer we selected through the platform impressed all our international guests with authentic Indian cuisine.",
    date: "February 8, 2025",
    vendors: ["Royal Feast", "Floral Fantasy"]
  },
  {
    id: 3,
    name: "Meera & Arjun",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1507583180783-b5df4354f0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4,
    content: "The filter options on Moments helped us find vendors that perfectly matched our eco-friendly wedding vision. We especially loved the blog articles on sustainable wedding practices. The photographer we hired captured beautiful moments while the decorators created stunning setups using locally-sourced materials.",
    date: "January 22, 2025",
    vendors: ["Creative Concepts", "DreamLens"]
  },
  {
    id: 4,
    name: "Neha & Aditya",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1534050055340-c13970196843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    rating: 5,
    content: "As a couple planning a fusion wedding, we needed vendors who could blend our different cultural traditions. Moments helped us find professionals who understood our vision and had experience with multicultural celebrations. Our guests are still talking about how seamlessly everything came together!",
    date: "December 12, 2024",
    vendors: ["Taste Buds", "Picture Perfect"]
  },
  {
    id: 5,
    name: "Riya & Sameer",
    location: "Kolkata",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 5,
    content: "We had a tight budget but didn't want to compromise on quality. The detailed pricing information on Moments helped us find affordable vendors without sacrificing our vision. The chatbot was particularly helpful, answering our questions at any time of day and offering valuable suggestions.",
    date: "November 30, 2024",
    vendors: ["Budget Blossoms", "Candid Clicks"]
  },
  {
    id: 6,
    name: "Sanjana & Dev",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4,
    content: "The vendor comparison feature saved us so much time! Being able to see side-by-side reviews, pricing, and portfolios made decision-making much easier. We found the perfect caterer and decorator who collaborated beautifully to create a cohesive look and experience for our guests.",
    date: "October 18, 2024",
    vendors: ["Spice Kitchen", "Royal Decor"]
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-alex text-gray-800 mb-2">Love Stories & Testimonials</h1>
          <p className="text-gray-600">
            Hear from couples who found their perfect wedding vendors through Moments
          </p>
        </div>
      </div>
      
      {/* Featured Testimonial */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-primary/5 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Featured Couple" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  "From finding our dream photographer to connecting with the perfect caterer, Moments transformed our wedding planning from stressful to joyful. We couldn't have created such a magical day without the incredible vendors we discovered through this platform."
                </blockquote>
                <div>
                  <p className="font-semibold text-lg">Aarav & Diya</p>
                  <p className="text-gray-600">Mumbai | December 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`} 
                        fill="currentColor" 
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-sm text-gray-500 mb-4">
                    {testimonial.date}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vendors used:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {testimonial.vendors.map((vendor, index) => (
                        <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {vendor}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Testimonials */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-alex text-gray-800 mb-8 text-center">Video Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Sneha & Rohan's Journey</h3>
                <p className="text-gray-600 text-sm">A beautiful celebration in Bangalore</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Alisha & Karan's Story</h3>
                <p className="text-gray-600 text-sm">A destination wedding in Goa</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Neha & Raj's Wedding</h3>
                <p className="text-gray-600 text-sm">A traditional celebration in Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Share Your Story */}
      <section className="py-12 bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-alex text-gray-800 mb-4">Share Your Wedding Story</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Did you find your wedding vendors through Moments? We'd love to hear about your experience and feature your story in our testimonials!
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 h-auto">
              Submit Your Story
            </Button>
          </Link>
        </div>
      </section>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Testimonials;
