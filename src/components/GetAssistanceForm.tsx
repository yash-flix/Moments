
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const GetAssistanceForm = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [services, setServices] = useState({
    decorators: false,
    florists: false,
    photographers: false,
    caterers: false
  });
  const [comments, setComments] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log({
      name,
      email,
      phone,
      location,
      date,
      services,
      comments
    });
    
    // Show success state
    setIsSubmitted(true);
    
    // Show toast notification
    toast({
      title: "Request Received",
      description: "Thank you for your request. We'll get back to you shortly!",
    });
    
    // Reset form after 3 seconds and close dialog
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setDate(undefined);
      setServices({
        decorators: false,
        florists: false,
        photographers: false,
        caterers: false
      });
      setComments("");
      setIsSubmitted(false);
      setOpen(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Get Wedding Assistance
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-alex text-primary">Request Wedding Assistance</DialogTitle>
              <DialogDescription>
                Share your details and preferences, and our wedding experts will help you find the perfect vendors for your special day.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-1 gap-4">
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">Location (City or Region)</label>
                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Wedding Date (if known)</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 pointer-events-auto">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Services Interested In</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={services.decorators}
                        onChange={(e) => setServices({...services, decorators: e.target.checked})}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span>Decorators</span>
                    </label>
                    
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={services.florists}
                        onChange={(e) => setServices({...services, florists: e.target.checked})}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span>Florists</span>
                    </label>
                    
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={services.photographers}
                        onChange={(e) => setServices({...services, photographers: e.target.checked})}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span>Photographers</span>
                    </label>
                    
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={services.caterers}
                        onChange={(e) => setServices({...services, caterers: e.target.checked})}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span>Caterers</span>
                    </label>
                  </div>
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
              </div>
              
              <DialogFooter>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit Request</Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Your request has been submitted successfully. Our wedding planning experts will contact you soon.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetAssistanceForm;
