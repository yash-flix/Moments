
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
    question: "What is the average cost of a wedding?",
    answer: "The average cost of a wedding in the US is approximately $28,000, but this can vary greatly depending on location, guest count, and your choices of vendors and services."
  },
  {
    question: "How far in advance should I book vendors?",
    answer: "Key vendors like venues, photographers, and caterers should be booked 9-12 months in advance, especially if your wedding is during peak season (May-October)."
  },
  {
    question: "What services do wedding decorators provide?",
    answer: "Wedding decorators typically provide floral arrangements, table settings, backdrop designs, lighting, draping, and overall theme coordination to create your desired ambiance."
  },
  {
    question: "How do I search for vendors on this site?",
    answer: "Use the search bar on our homepage to enter your location, then filter results by vendor type, price range, and ratings to find the perfect match for your needs."
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

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 ${className}`}
      {...props}
    />
  );
};

export default Chatbot;
