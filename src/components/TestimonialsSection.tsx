
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah & David",
    location: "Los Angeles, CA",
    quote: "Forever After Finder made finding our dream vendors so easy! We found an amazing photographer and decorator who perfectly executed our vision.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    name: "Jessica & Michael",
    location: "New York, NY",
    quote: "Thanks to this platform, we found a florist who created the most beautiful arrangements within our budget. The search filters made it so simple!",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: 3,
    name: "Emma & Christopher",
    location: "Chicago, IL",
    quote: "The chatbot was incredibly helpful in answering our questions. We found the perfect caterer who accommodated all our dietary restrictions.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl text-center font-alex text-gray-800 mb-2">Love Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from couples who found their perfect wedding vendors through our platform
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/1">
                <Card className="border-none shadow-sm h-full">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static transform-none mr-2" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
