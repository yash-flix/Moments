
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-alex text-gray-800 mb-4">About Moments</h1>
            <p className="text-xl text-gray-600 mb-6">
              Connecting couples with the perfect wedding vendors across India
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-alex text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Moments was founded in 2020 with a simple mission: to make wedding planning easier, more transparent, and less stressful for couples across India. We understand that finding the right vendors is one of the most crucial aspects of planning a wedding, yet it can also be the most challenging.
              </p>
              <p className="text-gray-600 mb-4">
                After experiencing the difficulties of wedding planning firsthand, our founders saw an opportunity to create a platform that would connect couples with trusted, high-quality vendors while providing all the resources needed to make informed decisions.
              </p>
              <p className="text-gray-600">
                Today, Moments has grown into India's leading wedding vendor marketplace, helping thousands of couples create their perfect wedding day with confidence and joy.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Couple planning their wedding" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-alex text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              We believe every couple deserves a wedding that reflects their unique love story, cultural heritage, and personal style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-gray-600">
                  Connecting couples with skilled, reliable vendors who match their vision and budget
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Simplify</h3>
                <p className="text-gray-600">
                  Simplifying the wedding planning process with transparent information and helpful resources
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Celebrate</h3>
                <p className="text-gray-600">
                  Celebrating diverse traditions and helping create meaningful wedding experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-alex text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Priya Sharma</h3>
              <p className="text-primary mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                Former wedding planner with 10+ years of experience in the industry
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                  alt="Co-founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Arjun Patel</h3>
              <p className="text-primary mb-3">Co-founder & CTO</p>
              <p className="text-gray-600">
                Tech enthusiast focused on creating seamless digital experiences
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80" 
                  alt="Marketing Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Maya Singh</h3>
              <p className="text-primary mb-3">Marketing Director</p>
              <p className="text-gray-600">
                Creative strategist connecting vendors with their ideal clients
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Vendor Relations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Rahul Mehta</h3>
              <p className="text-primary mb-3">Vendor Relations</p>
              <p className="text-gray-600">
                Building our network of premium vendors across India
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-alex text-gray-800 mb-8 text-center">Where We Operate</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We're proud to connect couples with top vendors in India's major cities, with plans to expand to more locations soon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Delhi</h3>
              <p className="text-gray-600">
                500+ vendors across all categories
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Mumbai</h3>
              <p className="text-gray-600">
                450+ vendors across all categories
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Bangalore</h3>
              <p className="text-gray-600">
                400+ vendors across all categories
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Chennai</h3>
              <p className="text-gray-600">
                350+ vendors across all categories
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Kolkata</h3>
              <p className="text-gray-600">
                300+ vendors across all categories
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-alex text-gray-800 mb-4">Ready to Find Your Perfect Wedding Vendors?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your wedding planning journey with Moments today. Our platform makes it easy to discover, compare, and connect with the best vendors for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vendors">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 h-auto">
                Find Vendors
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-lg px-8 py-3 h-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default About;
