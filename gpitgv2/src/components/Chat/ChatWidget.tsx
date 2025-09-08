import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChat } from '../Chat/ChatProvider';
import ChatMessage from './ChatMessage';

const ChatWidget: React.FC = () => {
  const { messages, sendMessage, isChatOpen, toggleChat, closeChat } = useChat();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat widget */}
      <div
        className={`fixed right-6 bottom-6 z-50 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform ${
          isChatOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 100px)' }}
      >
        {/* Chat header */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageCircle size={20} />
            <h3 className="font-medium">Welcome, Ask me Anything</h3>
          </div>
          <button
            onClick={closeChat}
            className="text-white hover:text-blue-100 transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat messages */}
        <div className="p-4 h-96 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="flex items-center p-3 border-t border-gray-200">
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Type your message"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;