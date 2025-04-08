
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly!",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-alex text-gray-800 mb-2">Contact Us</h1>
          <p className="text-gray-600">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      123 Wedding Lane, Connaught Place<br />
                      New Delhi, 110001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Customer Support: +91 98765 43210<br />
                      Vendor Relations: +91 98765 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@moments.com<br />
                      Vendor Support: vendors@moments.com<br />
                      Careers: careers@moments.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Find Us On Map</h3>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBZAMAEtQUKl7mA8nERiOcm3U8WdfYeQh0&q=Connaught+Place,New+Delhi"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-alex text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">How do I get verified as a vendor?</h3>
                <p className="text-gray-600">
                  To become a verified vendor on our platform, please email your business details to vendors@moments.com. Our team will guide you through the verification process.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">How can I get a personalized wedding planning consultation?</h3>
                <p className="text-gray-600">
                  You can request a personalized consultation by filling out the Get Assistance form on our homepage. One of our wedding experts will contact you within 24 hours.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Do you offer any wedding planning packages?</h3>
                <p className="text-gray-600">
                  Yes, we offer various wedding planning packages ranging from full-service planning to day-of coordination. Contact us at info@moments.com for details and pricing.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">How can I report an issue with a vendor?</h3>
                <p className="text-gray-600">
                  If you encounter any issues with a vendor, please email support@moments.com with details of the problem. We take all reports seriously and will investigate promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Contact;
