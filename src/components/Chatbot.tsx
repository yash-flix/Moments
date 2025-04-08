
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const weddingQuestions = [
  {
    question: "What is the average cost of a wedding in India?",
    answer: "Around ₹20-50 lakhs, depending on location and scale."
  },
  {
    question: "How do I choose a wedding venue",
    answer: "Consider budget, guest count, and ambiance; search our vendors for options."
  },
  {
    question: "What are the latest wedding decoration trends for 2025?",
    answer: "Bold colors like Verona Sunset and sustainable decor."
  },
  {
    question: "How far in advance should I book a photographer?",
    answer: "6-12 months for peak seasons."
  },
  {
    question: "What should I ask a caterer before hiring?",
    answer: "Menu options, dietary accommodations, and pricing."
  },
  {
    question: "How do I find a florist on your website?",
    answer: "Use the Find Vendors page and filter by florists."
  },
  {
    question: "Can you suggest budget-friendly wedding ideas?",
    answer: "Opt for off-season dates and local vendors."
  },
  {
    question: "What's the difference between traditional and candid photography?",
    answer: "Traditional is posed; candid captures natural moments."
  },
  {
    question: "How do I request an appointment with a decorator?",
    answer: "Click Request Appointment on their page."
  },
  {
    question: "What are popular wedding themes this year?",
    answer: "Rustic, bohemian, and modern minimalism."
  },
  {
    question: "How do I leave a review for a service provider?",
    answer: "Log in and submit a rating on their page."
  },
  {
    question: "What legal documents are needed for a wedding in India?",
    answer: "ID proof, address proof, and marriage registration form."
  },
  {
    question: "How can I contact a caterer listed on your site?",
    answer: "Use the phone or email on their page."
  },
  {
    question: "What are some unique wedding favor ideas?",
    answer: "Personalized candles or eco-friendly seed packets."
  },
  {
    question: "How do I get personalized assistance from your team?",
    answer: "Click Get Assistance and fill the form."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm your wedding planning assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        title: "Wedding Assistant",
        description: "Our chatbot is here to help with your wedding planning questions!",
      });
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    const newUserMessage = { id: Date.now(), text: input, isUser: true };
    setMessages([...messages, newUserMessage]);
    setInput("");

    // Generate bot response
    setTimeout(() => {
      let botResponse = "I'm not sure about that. Could you ask something about wedding planning, vendors, or how to use our website?";
      
      // Simple matching for common questions
      const lowercaseInput = input.toLowerCase();
      
      const matchedQuestion = weddingQuestions.find(q => 
        lowercaseInput.includes(q.question.toLowerCase()) || 
        new RegExp(q.question.replace(/[?]/g, '').toLowerCase().split(' ').join('|')).test(lowercaseInput)
      );
      
      if (matchedQuestion) {
        botResponse = matchedQuestion.answer;
      } else if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi")) {
        botResponse = "Hello! How can I assist with your wedding planning today?";
      } else if (lowercaseInput.includes("thank")) {
        botResponse = "You're welcome! Feel free to ask if you have more questions.";
      } else if (lowercaseInput.includes("venue") || lowercaseInput.includes("location")) {
        botResponse = "When choosing a wedding venue, consider your guest count, budget, and preferred style (indoor vs outdoor). We recommend booking venues 12-18 months in advance.";
      }
      
      setMessages(prev => [...prev, { id: Date.now(), text: botResponse, isUser: false }]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 sm:w-96 max-h-[500px] flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-primary p-3 text-white flex justify-between items-center">
            <h3 className="font-playfair font-semibold">Wedding Assistant</h3>
            <Button variant="ghost" size="sm" onClick={toggleChat} className="text-white p-1 h-auto">
              <X size={20} />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 max-h-[350px]">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.isUser ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}
              >
                <div 
                  className={`p-3 rounded-lg ${
                    message.isUser 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSend} className="border-t border-gray-200 p-3 flex">
            <Input 
              type="text" 
              placeholder="Type your question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="sm" className="ml-2 bg-primary hover:bg-primary/90">
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}
      
      <Button 
        onClick={toggleChat} 
        className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg"
      >
        <MessageSquare />
      </Button>
    </div>
  );
};

export default Chatbot;
