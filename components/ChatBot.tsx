import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, FlaskConical, Beaker } from 'lucide-react';
import { sendMessageToHeisenberg } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'I am the one who knocks. State your business.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setIsLoading(true);
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    const response = await sendMessageToHeisenberg(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="fixed bottom-6 right-6 z-50 p-4 bg-bb-yellow text-black rounded-full shadow-[0_0_20px_rgba(247,181,56,0.5)] hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
            >
                <FlaskConical size={32} strokeWidth={2.5} />
            </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[380px] max-h-[80vh] h-[600px] bg-zinc-900/95 backdrop-blur-xl border border-bb-green rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-bb-dark/90 p-4 flex justify-between items-center border-b border-bb-green/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-bb-green/20 border-2 border-bb-green rounded-lg flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-bb-green/20 animate-pulse"></div>
                  <span className="font-display font-bold text-2xl text-white relative z-10">He</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white leading-none tracking-wide">Heisenberg</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="text-xs text-bb-green/80 font-mono uppercase">Online</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-b from-black/50 to-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm font-sans shadow-lg leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-bb-yellow text-black font-medium rounded-tr-none'
                        : 'bg-zinc-800/80 text-gray-200 border border-zinc-700/50 rounded-tl-none backdrop-blur-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800/80 p-4 rounded-2xl rounded-tl-none border border-zinc-700/50 backdrop-blur-sm">
                     <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-bb-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-bb-crystal rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-bb-yellow rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                     </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-bb-dark/95 border-t border-bb-green/30 flex gap-3 items-center">
              <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about my skills..."
                    className="w-full bg-black/50 border border-zinc-700 text-white pl-4 pr-10 py-3 rounded-xl focus:outline-none focus:border-bb-green focus:ring-1 focus:ring-bb-green/50 font-sans transition-all placeholder:text-zinc-600"
                  />
                  <Beaker className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4" />
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-bb-green text-white p-3 rounded-xl hover:bg-green-600 transition-all disabled:opacity-50 disabled:hover:bg-bb-green shadow-[0_0_10px_rgba(74,124,89,0.3)]"
              >
                <Send size={20} strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;