
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { StarIcon, Phone, Mail, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { getVendorById } from "@/data/vendors";

const VendorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vendor = getVendorById(parseInt(id || "0"));
  
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [isAppointmentSubmitted, setIsAppointmentSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Vendor not found</h1>
            <Link to="/vendors">
              <Button>Browse all vendors</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAppointmentSubmitted(true);
      setIsSubmitting(false);
      
      toast({
        title: "Appointment Request Sent",
        description: `Your appointment request with ${vendor.name} has been submitted.`,
      });
      
      // Reset form after 3 seconds and close dialog
      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setAppointmentDate(undefined);
        setComments("");
        setIsAppointmentSubmitted(false);
        setFormOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container-custom py-8">
        <div className="mb-8">
          <Link to="/vendors" className="text-primary hover:underline mb-4 inline-block">
            ← Back to vendors
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vendor Info */}
            <div className="md:col-span-2">
              <div className="relative h-64 md:h-96 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={vendor.image} 
                  alt={vendor.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {vendor.category.charAt(0).toUpperCase() + vendor.category.slice(1)}
                </div>
                <div className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm">
                  {vendor.price}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-semibold">{vendor.name}</h1>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="text-lg font-medium">{vendor.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 flex items-center">
                <MapPin className="h-5 w-5 mr-2" /> {vendor.location}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild variant="outline" className="flex items-center">
                  <a href={`tel:${vendor.phone}`}>
                    <Phone className="h-4 w-4 mr-2" /> {vendor.phone}
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="flex items-center">
                  <a href={`mailto:${vendor.email}`}>
                    <Mail className="h-4 w-4 mr-2" /> {vendor.email}
                  </a>
                </Button>
                
                <Dialog open={formOpen} onOpenChange={setFormOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" /> Request Appointment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    {!isAppointmentSubmitted ? (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-alex text-primary">Request Appointment</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to request an appointment with {vendor.name}.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <form onSubmit={handleAppointmentSubmit} className="space-y-4 py-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <input
                              id="name"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">Email</label>
                              <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                              <input
                                id="phone"
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Preferred Date</label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !appointmentDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {appointmentDate ? format(appointmentDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={appointmentDate}
                                  onSelect={setAppointmentDate}
                                  initialFocus
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="comments" className="text-sm font-medium">Additional Comments</label>
                            <textarea
                              id="comments"
                              rows={3}
                              value={comments}
                              onChange={(e) => setComments(e.target.value)}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            ></textarea>
                          </div>
                          
                          <DialogFooter>
                            <Button 
                              type="submit" 
                              className="w-full bg-primary hover:bg-primary/90"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Submitting..." : "Submit Request"}
                            </Button>
                          </DialogFooter>
                        </form>
                      </>
                    ) : (
                      <div className="py-12 flex flex-col items-center text-center">
                        <svg
                          className="w-16 h-16 text-green-500 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Appointment Request Submitted!</h3>
                        <p className="text-gray-600 mb-4">
                          Thank you for your request. {vendor.name} will contact you soon to confirm your appointment.
                        </p>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 mb-4">{vendor.address}</p>
                  
                  <div className="h-48 bg-gray-200 rounded-md overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDuPU4QfbOrgMba9p9HZl-_sD6RKJoxT6w&q=${encodeURIComponent(vendor.location)}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Tabs section */}
        <Tabs defaultValue="about">
          <TabsList className="mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About {vendor.name}</h2>
              <p className="mb-4">{vendor.description}</p>
              <p>
                With years of experience in the wedding industry, {vendor.name} has established a reputation for excellence and reliability. 
                Our team of professionals is dedicated to making your special day memorable and stress-free.
              </p>
              <p>
                We understand that each wedding is unique, and we work closely with our clients to create customized solutions that reflect their personal style and preferences.
                Whether you're planning an intimate gathering or a grand celebration, we have the expertise to exceed your expectations.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="services">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vendor.services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Pricing Information</h3>
                <p className="mb-4">
                  Our pricing varies based on the specific services required, the size of your event, and your unique needs.
                  We offer transparent pricing with no hidden fees.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-xl font-bold mr-2">{vendor.price}</span>
                    <span className="text-gray-600">
                      {vendor.price === "$" && "Budget-friendly"}
                      {vendor.price === "$$" && "Moderate pricing"}
                      {vendor.price === "$$$" && "Premium services"}
                      {vendor.price === "$$$$" && "Luxury services"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vendor.gallery.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${vendor.name} - Gallery image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
              
              <div className="mb-6 flex items-center">
                <div className="flex items-center mr-4">
                  <StarIcon className="h-8 w-8 text-yellow-500 mr-2" fill="currentColor" />
                  <span className="text-3xl font-bold">{vendor.rating.toFixed(1)}</span>
                </div>
                <div className="text-gray-600">Based on 24 reviews</div>
              </div>
              
              <div className="space-y-4">
                {/* Sample reviews */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Priya Sharma</h4>
                        <p className="text-gray-500 text-sm">2 months ago</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < 5 ? "text-yellow-500" : "text-gray-300"}`} 
                            fill="currentColor" 
                          />
                        ))}
                      </div>
                    </div>
                    <p>
                      We had an amazing experience with {vendor.name}! They were professional, creative, and delivered exactly what we wanted for our wedding day. Highly recommend!
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Raj Patel</h4>
                        <p className="text-gray-500 text-sm">3 months ago</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < 4 ? "text-yellow-500" : "text-gray-300"}`} 
                            fill="currentColor" 
                          />
                        ))}
                      </div>
                    </div>
                    <p>
                      Great service and excellent value for money. The team was responsive to our needs and made our wedding day special.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Ananya Singh</h4>
                        <p className="text-gray-500 text-sm">5 months ago</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < 5 ? "text-yellow-500" : "text-gray-300"}`} 
                            fill="currentColor" 
                          />
                        ))}
                      </div>
                    </div>
                    <p>
                      {vendor.name} exceeded all our expectations! Their attention to detail and creativity made our wedding truly memorable. Would definitely recommend to anyone planning a wedding.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90">Write a Review</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default VendorDetail;
