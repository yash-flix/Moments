
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "decorators",
    title: "Decorators",
    icon: "🎨",
    description: "Transform your venue into a stunning masterpiece",
  },
  {
    id: "florists",
    title: "Florists",
    icon: "💐",
    description: "Beautiful floral arrangements for your special day",
  },
  {
    id: "photographers",
    title: "Photographers",
    icon: "📸",
    description: "Capture your magical moments forever",
  },
  {
    id: "caterers",
    title: "Caterers",
    icon: "🍽️",
    description: "Delicious cuisine to delight your guests",
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl text-center font-alex text-gray-800 mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/vendors?category=${category.id}`} key={category.id}>
              <Card className="hover:shadow-md transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
