import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';
  import { v4 as uuidv4 } from 'uuid';
  
  export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  }
  
  interface ChatContextType {
    messages: Message[];
    sendMessage: (content: string) => void;
    isChatOpen: boolean;
    toggleChat: () => void;
    closeChat: () => void;
    isTyping: boolean;
  }
  
  const ChatContext = createContext<ChatContextType | undefined>(undefined);
  
  export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
      throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
  };
  
  interface ChatProviderProps {
    children: ReactNode;
  }
  
  const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
  
    // Load messages from localStorage
    useEffect(() => {
      const stored = localStorage.getItem('chatMessages');
      if (stored) {
        const parsed = JSON.parse(stored);
        setMessages(
          parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          }))
        );
      }
    }, []);
  
    // Save messages to localStorage
    useEffect(() => {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);
  
    // Initial greeting
    useEffect(() => {
      if (isChatOpen && messages.length === 0) {
        const greeting: Message = {
          id: uuidv4(),
          content: "Hi there! I'm your Assistant. How can I help you today?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages([greeting]);
      }
    }, [isChatOpen, messages.length]);
  
    const generateResponse = (userMessage: string): string => {
  const lower = userMessage.toLowerCase();

  // New and expanded responses for specific products and services
  if (/\b(ehms|electronic health|hospital management|healthcare system|ehms features)\b/.test(lower)) {
    return "eHMS is our comprehensive Electronic Health Management System. It's a locally developed solution that's integrated with NHIF electronic billing and supports interoperability with laboratory and radiology devices. Would you like to know more about its key features like patient management or telemedicine?";
  }

  if (/\b(g-pos|gpos|point of sale|retail|inventory|stock management)\b/.test(lower)) {
    return "G-PoS is our robust Point of Sale system, designed for retail and wholesale businesses. It helps you manage sales, inventory, and expenses with powerful features like multi-payment options and real-time reporting. Do you have a specific question about inventory management or TRA integration?";
  }

  if (/\b(g-pesa|gpesa|digital payment|payment solution|erp|business automation)\b/.test(lower)) {
    return "G-Pesa is a powerful digital payment solution built with an ERP design for complete business automation. It connects banks and mobile networks, streamlining your accounting, finance, and HR processes. Is there a specific business area you'd like to automate?";
  }

  if (/\b(g-appointment|gappointment|appointment system|clinic appointment|doctor appointment)\b/.test(lower)) {
    return "G-Appointment is an electronic appointment management system that simplifies scheduling for medical centers. It offers multi-platform access, self-check-in, and real-time scheduling to provide a seamless experience for both patients and staff.";
  }

  if (/\b(g-queue|gqueue|queue management|queue solution)\b/.test(lower)) {
    return "G-Queue is our electronic queue management solution designed to resolve complex visitor flows in various organizations. It provides real-time analytics, digital displays, and multi-language support to optimize wait times.";
  }

  if (/\b(g-tele|gtele|telemedicine|remote diagnosis|telehealth)\b/.test(lower)) {
    return "G-Tele is our telemedicine solution, seamlessly integrated with eHMS. It enables healthcare professionals to remotely diagnose and treat patients using secure file sharing and live video streaming. This platform makes quality healthcare more accessible.";
  }
  
  // New responses for company information and other services
  if (/\b(about|mission|vision|who are you|what do you do)\b/.test(lower)) {
    return "We are GPITG Limmited, a Tanzanian IT consulting firm. Our mission is to transform public and private operations through the use of locally made and supported e-solutions. We specialize in custom software development, mobile apps, IT consulting, and system integration.";
  }

  if (/\b(training|support|maintenance|after-sales|implementation)\b/.test(lower)) {
    return "Yes, we provide comprehensive training and continuous support for all our systems. Our approach includes intensive training, change management, and timely maintenance services to ensure our e-solutions become the backbone of your business operations.";
  }

  if (/\b(custom solution|bespoke software|tailor-made|unique needs)\b/.test(lower)) {
    return "We are experts in creating custom-made, bespoke software solutions that align with your unique business processes. We conduct thorough research to ensure our applications meet your specific operational needs and deliver effective results.";
  }

  // Existing responses
  if (/\b(pricing|cost|price|charge|quote)\b/.test(lower)) {
    return "Our pricing depends on your project's scope and complexity. Contact us at info@gpitg.co.tz or call +255 717 531 539 / +255 753 290 357 for a free quote.";
  }

  if (/\b(location|office|address|where are you)\b/.test(lower)) {
    return "Our office is located in Kawe, Dar es Salaam, Tanzania. Visit our Contact page for full directions.";
  }

  if (/\b(website|web design|web development|landing page)\b/.test(lower)) {
    return "We create modern, responsive websites optimized for performance, SEO, and UX. Whether you need a corporate site or e-commerce platform—we've got you.";
  }

  if (/\b(app|mobile app|android|ios|flutter|react native)\b/.test(lower)) {
    return "We develop high-quality apps for Android and iOS using Flutter and React Native. Tell us your idea, and we'll build it.";
  }

  if (/\b(seo|marketing|digital marketing|social media|ads|visibility)\b/.test(lower)) {
    return "We help grow your brand through SEO, social media, paid ads, and content strategies. Let's talk about how to elevate your online presence.";
  }

  if (/\b(hosting|maintenance|support|uptime|backups)\b/.test(lower)) {
    return "We provide secure hosting, routine backups, and ongoing maintenance so your site stays fast and safe 24/7.";
  }

  if (/\b(timeline|how long|delivery|deadline|turnaround)\b/.test(lower)) {
    return "Timelines vary by project. A basic site may take 2–3 weeks, while complex systems take longer. Contact us for a tailored estimate.";
  }

  if (/\b(technologies|tech stack|what do you use|tools)\b/.test(lower)) {
    return "We use technologies like React, Node.js, Laravel, Flutter, Firebase, and AWS. We pick the stack that best suits your project.";
  }

  if (/\b(job|career|intern|vacancy|hiring)\b/.test(lower)) {
    return "We're always open to passionate talent! Send your CV to careers@info.gpitg.co.tz or visit our Careers page.";
  }

  if (/\b(contact|talk|speak|reach out|call)\b/.test(lower)) {
    return "You can contact us at info@gpitg.co.tz or call +255 717 531 539 / +255 753 290 357. Or use the contact form on our site.";
  }

  if (/\b(hello|hi|hey|good morning|good evening)\b/.test(lower)) {
    return "Hello! 👋 How can GPITG Limmited assist you today?";
  }

  return "I'm sorry, I don't have enough information to answer that. Could you please rephrase your question? If you need more specific help, you can contact us directly at info@gpitg.co.tz or call +255 717 531 539.";
};
  
    const sendMessage = (content: string) => {
      if (!content.trim()) return;
  
      const userMsg: Message = {
        id: uuidv4(),
        content,
        sender: 'user',
        timestamp: new Date(),
      };
  
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);
  
      setTimeout(() => {
        const botMsg: Message = {
          id: uuidv4(),
          content: generateResponse(content),
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 800);
    };
  
    const toggleChat = () => setIsChatOpen((prev) => !prev);
    const closeChat = () => setIsChatOpen(false);
  
    return (
      <ChatContext.Provider
        value={{ messages, sendMessage, isChatOpen, toggleChat, closeChat, isTyping }}
      >
        {children}
      </ChatContext.Provider>
    );
  };
  
  export default ChatProvider;
  