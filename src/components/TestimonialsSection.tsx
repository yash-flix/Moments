
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
    name: "Priya & Rahul",
    location: "Delhi",
    quote: "Moments made our wedding planning journey so much easier! We found an amazing decorator and photographer through the platform, and the 'Get Assistance' feature connected us with a consultant who helped coordinate everything.",
    image: "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    name: "Ananya & Vikram",
    location: "Mumbai",
    quote: "Planning a destination wedding in Mumbai while living abroad seemed impossible until we discovered Moments. The vendor reviews were detailed and honest, helping us make confident decisions from a distance.",
    image: "https://images.unsplash.com/photo-1637764154038-31b806020609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 3,
    name: "Meera & Arjun",
    location: "Bangalore",
    quote: "The filter options on Moments helped us find vendors that perfectly matched our eco-friendly wedding vision. We especially loved the blog articles on sustainable wedding practices.",
    image: "https://images.unsplash.com/photo-1507583180783-b5df4354f0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
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
