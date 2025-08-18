// import React, { useState, useRef, useEffect } from 'react';
// import { useChat } from '../components/Chat/ChatProvider';
// import { MessageCircle, X } from 'lucide-react';

// const ChatWidget: React.FC = () => {
//   const { messages, sendMessage, isChatOpen, toggleChat, closeChat, isTyping } = useChat();
//   const [input, setInput] = useState('');
//   const chatEndRef = useRef<HTMLDivElement | null>(null);

//   const handleSend = () => {
//     sendMessage(input);
//     setInput('');
//   };

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
//         onClick={toggleChat}
//         aria-label="Toggle Chat"
//       >
//         {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
//       </button>

//       {/* Chat Panel */}
//       {isChatOpen && (
//         <div className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-40">
//           <div className="bg-blue-600 text-white font-bold p-4">💬 Chat with GPITG Limmitede</div>

//           <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
//             {messages.map((msg) => (
//               <div
//                 key={msg.id}
//                 className={`max-w-xs px-4 py-2 rounded-lg ${
//                   msg.sender === 'user'
//                     ? 'ml-auto bg-blue-600 text-white'
//                     : 'mr-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
//                 }`}
//               >
//                 {msg.content}
//               </div>
//             ))}
//             {isTyping && <div className="italic text-xs text-gray-500">Typing...</div>}
//             <div ref={chatEndRef} />
//           </div>

//           <div className="border-t dark:border-gray-700 p-2 flex">
//             <input
//               className="flex-1 px-3 py-2 text-sm focus:outline-none dark:bg-gray-900 dark:text-white"
//               placeholder="Type your message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//             />
//             <button
//               onClick={handleSend}
//               className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatWidget;
