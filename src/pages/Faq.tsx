
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Minus } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const faqCategories = [
  "All",
  "General",
  "Vendors",
  "Bookings",
  "Payments",
  "Account"
];

const faqItems = [
  {
    id: 1,
    question: "How does Moments work?",
    answer: "Moments is a wedding planning platform that connects couples with trusted vendors across India. You can search for vendors by location and category, read reviews, view portfolios, and directly contact vendors to request quotes or appointments. We also offer wedding planning resources, a blog with expert advice, and personalized assistance.",
    category: "General"
  },
  {
    id: 2,
    question: "Is it free to use Moments?",
    answer: "Yes, Moments is completely free for couples to use. You can search for vendors, read reviews, and access wedding planning resources without any cost. Vendors pay a subscription fee to be listed on our platform, which allows us to provide a quality service without charging couples.",
    category: "General"
  },
  {
    id: 3,
    question: "How do I know the vendors on your site are reliable?",
    answer: "All vendors on Moments go through a verification process before being listed. We check their business credentials, portfolio, and references. Additionally, our review system allows couples to share their experiences, providing real feedback about vendors' services. We regularly monitor vendor performance to maintain high standards.",
    category: "Vendors"
  },
  {
    id: 4,
    question: "Can I request quotes from multiple vendors at once?",
    answer: "Yes, you can request quotes from multiple vendors simultaneously. This makes it easier to compare services and prices. To do this, simply use the 'Request Quote' button on each vendor's profile that interests you. You'll receive responses directly from the vendors.",
    category: "Vendors"
  },
  {
    id: 5,
    question: "How do I book a vendor through Moments?",
    answer: "Moments facilitates the introduction between couples and vendors, but bookings are made directly with the vendors. Once you've found a vendor you like, you can use our platform to request an appointment or contact them. The vendor will then work with you to confirm details, contracts, and payments according to their business practices.",
    category: "Bookings"
  },
  {
    id: 6,
    question: "What happens after I request an appointment with a vendor?",
    answer: "After requesting an appointment, the vendor will receive your details and contact you directly within 1-2 business days. They'll discuss your specific needs, availability, and next steps. If you don't hear back within this timeframe, you can contact our support team for assistance.",
    category: "Bookings"
  },
  {
    id: 7,
    question: "Does Moments handle payments to vendors?",
    answer: "No, Moments does not process payments between couples and vendors. All financial transactions occur directly between you and the vendor. We recommend discussing payment terms, methods, and schedules clearly with vendors before signing any contracts, and always getting agreements in writing.",
    category: "Payments"
  },
  {
    id: 8,
    question: "What payment methods do vendors typically accept?",
    answer: "Payment methods vary by vendor, but most accept bank transfers, credit/debit cards, and digital payment platforms. Some may also accept cash for certain payments. Payment terms (deposits, installments, etc.) also vary by vendor. This information is typically discussed during initial consultations.",
    category: "Payments"
  },
  {
    id: 9,
    question: "Do I need to create an account to use Moments?",
    answer: "You can browse vendors and view most content without an account. However, creating a free account allows you to save favorite vendors, write reviews, and access additional planning tools. Account creation is simple, requiring just your name, email, and a password.",
    category: "Account"
  },
  {
    id: 10,
    question: "How do I write a review for a vendor I've worked with?",
    answer: "To write a review, you need to be logged in to your Moments account. Navigate to the vendor's profile page and click on the 'Write a Review' button. You can rate the vendor and share your experience. Reviews help other couples make informed decisions and provide valuable feedback to vendors.",
    category: "Account"
  },
  {
    id: 11,
    question: "How can I get personalized wedding planning assistance?",
    answer: "You can request personalized assistance by using the 'Get Assistance' button on our homepage. Fill out the form with your details and preferences, and one of our wedding planning experts will contact you to discuss how we can help with your specific needs.",
    category: "General"
  },
  {
    id: 12,
    question: "What cities does Moments currently operate in?",
    answer: "Moments currently features vendors in Delhi, Mumbai, Bangalore, Chennai, and Kolkata. We're continuously expanding to more cities across India. If your location isn't currently covered, you can still use our planning resources and blog, and submit a request for vendor recommendations in your area.",
    category: "General"
  }
];

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  const filteredFaqs = faqItems.filter(item => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-4xl font-alex text-gray-800 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Find answers to common questions about using Moments for your wedding planning
          </p>
        </div>
      </div>
      
      {/* Search and Categories */}
      <div className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <Input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Items */}
      <div className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No matching questions found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search query or category filter.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((item) => (
                  <div 
                    key={item.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
                    >
                      <span>{item.question}</span>
                      {openItems.includes(item.id) ? (
                        <Minus className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Plus className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                    {openItems.includes(item.id) && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Still Have Questions */}
      <section className="py-12 bg-primary/5">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-alex text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            If you couldn't find the answer you were looking for, feel free to reach out to our customer support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Contact Us
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => {
                const chatbot = document.querySelector('.fixed.bottom-6.right-6 button') as HTMLButtonElement;
                if (chatbot) chatbot.click();
              }}
            >
              Chat with Us
            </Button>
          </div>
        </div>
      </section>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Faq;
