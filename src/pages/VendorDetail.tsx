import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon, Phone, Mail, Globe, MapPin, Calendar as CalendarIcon, CheckCircle, Info, Camera, Clock, DollarSign } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Chatbot from "@/components/Chatbot";

// Sample vendor data for demonstration
const mockVendors = [
  {
    id: "1",
    name: "Elegant Occasions",
    category: "Decorators",
    mainImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1478473495191-2d8dd1398896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    rating: 4.9,
    reviewCount: 124,
    location: "Los Angeles, CA",
    address: "123 Wedding Lane, Los Angeles, CA 90001",
    phone: "(123) 456-7890",
    email: "info@elegantoccasions.com",
    website: "https://elegantoccasions.com",
    description: "With over 10 years of experience, Elegant Occasions transforms venues into magical spaces with creative decorations and lighting. Our team of designers works closely with you to bring your vision to life, whether you desire a classic, rustic, modern, or themed wedding.",
    services: [
      "Complete venue transformation",
      "Custom backdrop design",
      "Centerpiece creation",
      "Lighting design and installation",
      "Table settings and linens",
      "Floral and non-floral decorations",
      "Props and accent pieces",
      "Setup and teardown"
    ],
    pricing: [
      { name: "Basic Package", price: "$1,500", description: "Essential decorations for a small wedding" },
      { name: "Standard Package", price: "$3,000", description: "Comprehensive decorations for a medium-sized wedding" },
      { name: "Premium Package", price: "$5,000+", description: "Luxury decorations for a large wedding" },
      { name: "Custom Options", price: "Varies", description: "Tailored to your specific needs and vision" }
    ],
    reviews: [
      { id: 1, name: "Sarah & David", date: "2023-08-15", rating: 5, comment: "Elegant Occasions transformed our venue into a fairytale setting! The team was professional and attentive to every detail." },
      { id: 2, name: "Jessica & Michael", date: "2023-07-22", rating: 5, comment: "The decorations were absolutely stunning and matched our vision perfectly. Highly recommend!" },
      { id: 3, name: "Emma & Christopher", date: "2023-06-10", rating: 4, comment: "Beautiful work and great customer service. A bit pricey but worth it for the quality." },
      { id: 4, name: "Olivia & James", date: "2023-05-28", rating: 5, comment: "They went above and beyond to make our special day magical. The lighting design was breathtaking!" }
    ],
    faq: [
      { question: "How far in advance should I book?", answer: "We recommend booking 6-12 months in advance, especially for peak wedding season (May-October)." },
      { question: "Do you provide setup and takedown?", answer: "Yes, all our packages include complete setup before the event and takedown afterward." },
      { question: "Can I see examples of your work?", answer: "Yes, we have a portfolio of previous weddings and can arrange a consultation to show you samples." },
      { question: "Do you travel outside of Los Angeles?", answer: "Yes, we service all of Southern California. Travel fees may apply for locations beyond 50 miles." }
    ]
  },
  // Other vendor data would go here
];

const VendorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vendor = mockVendors.find(v => v.id === id);
  
  const [selectedImage, setSelectedImage] = useState(vendor?.mainImage || "");
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(undefined);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    message: ""
  });
  
  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Vendor Not Found</h2>
            <p className="text-gray-600 mb-6">The vendor you're looking for doesn't exist or has been removed.</p>
            <Link to="/vendors">
              <Button className="bg-primary hover:bg-primary/90">
                Browse All Vendors
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log({
      vendorId: id,
      date: appointmentDate,
      ...formData
    });
    
    // Show success state
    setAppointmentSubmitted(true);
    
    // Show toast notification
    toast({
      title: "Appointment Request Sent",
      description: "The vendor will contact you soon to confirm your appointment.",
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setAppointmentDate(undefined);
      setFormData({
        name: "",
        email: "",
        phone: "",
        time: "",
        message: ""
      });
      setAppointmentSubmitted(false);
    }, 3000);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Vendor Header */}
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center mb-2">
                <Link to="/vendors" className="text-primary hover:underline text-sm mr-2">
                  Vendors
                </Link>
                <span className="text-gray-400 mx-1">›</span>
                <span className="text-sm text-gray-600">{vendor.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-alex text-gray-800 mb-1">{vendor.name}</h1>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="font-medium mr-1">{vendor.rating}</span>
                  <span className="text-gray-500">({vendor.reviewCount} reviews)</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-600">{vendor.category}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{vendor.location}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <Button className="flex items-center justify-center gap-2" variant="outline">
                <Phone className="h-4 w-4" />
                <a href={`tel:${vendor.phone}`} className="hidden sm:inline">Call</a>
              </Button>
              
              <Button className="flex items-center justify-center gap-2" variant="outline">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${vendor.email}`} className="hidden sm:inline">Email</a>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Request Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  {!appointmentSubmitted ? (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-alex text-primary">Request an Appointment</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to schedule an appointment with {vendor.name}.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <form onSubmit={handleAppointmentSubmit} className="space-y-4 py-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">Email</label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
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
                              <PopoverContent className="w-auto p-0 pointer-events-auto">
                                <Calendar
                                  mode="single"
                                  selected={appointmentDate}
                                  onSelect={setAppointmentDate}
                                  initialFocus
                                  disabled={(date) => 
                                    date < new Date(new Date().setHours(0, 0, 0, 0))
                                  }
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="time" className="text-sm font-medium">Preferred Time</label>
                            <select
                              id="time"
                              name="time"
                              required
                              value={formData.time}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                              <option value="">Select a time</option>
                              <option value="9:00 AM">9:00 AM</option>
                              <option value="10:00 AM">10:00 AM</option>
                              <option value="11:00 AM">11:00 AM</option>
                              <option value="1:00 PM">1:00 PM</option>
                              <option value="2:00 PM">2:00 PM</option>
                              <option value="3:00 PM">3:00 PM</option>
                              <option value="4:00 PM">4:00 PM</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message (Optional)</label>
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              value={formData.message}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="Tell the vendor about your wedding and what services you're interested in."
                            ></textarea>
                          </div>
                        </div>
                        
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                            Request Appointment
                          </Button>
                        </DialogFooter>
                      </form>
                    </>
                  ) : (
                    <div className="py-12 flex flex-col items-center text-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Appointment Request Sent!</h3>
                      <p className="text-gray-600 mb-4">
                        {vendor.name} will contact you soon to confirm your appointment.
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="mb-8">
              <div className="relative h-96 rounded-lg overflow-hidden mb-2">
                <img 
                  src={selectedImage} 
                  alt={vendor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {vendor.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className={`h-20 rounded-lg overflow-hidden cursor-pointer ${
                      selectedImage === image ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tabs for Details */}
            <Tabs defaultValue="about" className="mb-8">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-4">
                <h2 className="text-2xl font-alex text-gray-800 mb-2">About {vendor.name}</h2>
                <p className="text-gray-700">{vendor.description}</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {vendor.faq.map((item, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h4 className="font-medium flex items-center mb-2">
                        <Info className="h-4 w-4 text-primary mr-2" />
                        {item.question}
                      </h4>
                      <p className="text-gray-600 pl-6">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="space-y-4">
                <h2 className="text-2xl font-alex text-gray-800 mb-4">Our Services</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {vendor.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="pricing" className="space-y-4">
                <h2 className="text-2xl font-alex text-gray-800 mb-4">Pricing & Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vendor.pricing.map((package_, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-1">{package_.name}</h3>
                      <div className="text-xl text-primary font-medium mb-2">{package_.price}</div>
                      <p className="text-gray-600">{package_.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  * Prices may vary based on specific requirements and event details. Contact us for a custom quote.
                </p>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-alex text-gray-800">Customer Reviews</h2>
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="font-semibold text-lg mr-1">{vendor.rating}</span>
                    <span className="text-gray-500">({vendor.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {vendor.reviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{review.name}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                              fill="currentColor"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="bg-white rounded-lg border p-4 mb-4">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-gray-600">{vendor.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href={`tel:${vendor.phone}`} className="text-primary hover:underline">
                        {vendor.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href={`mailto:${vendor.email}`} className="text-primary hover:underline">
                        {vendor.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Website</h4>
                      <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {vendor.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-4 mb-4">
                <h3 className="font-semibold text-lg mb-4">Business Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Camera className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Service Type</h4>
                      <p className="text-gray-600">{vendor.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Price Range</h4>
                      <p className="text-gray-600">
                        {vendor.pricing[0].price} - {vendor.pricing[2].price}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Response Time</h4>
                      <p className="text-gray-600">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Request Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-alex text-primary">Request an Appointment</DialogTitle>
                        <DialogDescription>
                          Fill out the form below to schedule an appointment with {vendor.name}.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <form onSubmit={handleAppointmentSubmit} className="space-y-4 py-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">Email</label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
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
                              <PopoverContent className="w-auto p-0 pointer-events-auto">
                                <Calendar
                                  mode="single"
                                  selected={appointmentDate}
                                  onSelect={setAppointmentDate}
                                  initialFocus
                                  disabled={(date) => 
                                    date < new Date(new Date().setHours(0, 0, 0, 0))
                                  }
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="time" className="text-sm font-medium">Preferred Time</label>
                            <select
                              id="time"
                              name="time"
                              required
                              value={formData.time}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                              <option value="">Select a time</option>
                              <option value="9:00 AM">9:00 AM</option>
                              <option value="10:00 AM">10:00 AM</option>
                              <option value="11:00 AM">11:00 AM</option>
                              <option value="1:00 PM">1:00 PM</option>
                              <option value="2:00 PM">2:00 PM</option>
                              <option value="3:00 PM">3:00 PM</option>
                              <option value="4:00 PM">4:00 PM</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message (Optional)</label>
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              value={formData.message}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="Tell the vendor about your wedding and what services you're interested in."
                            ></textarea>
                          </div>
                        </div>
                        
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                            Request Appointment
                          </Button>
                        </DialogFooter>
                      </form>
                  
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default VendorDetail;
