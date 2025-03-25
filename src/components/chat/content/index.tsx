import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useChat } from '@/stores';
import { formatTime } from '@/utils';

export function ChatContent() {
  const { messages } = useChat();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ScrollArea className="h-full overflow-y-auto">
      <div className="flex flex-col p-4 bg-slate-50 dark:bg-slate-900">
        {messages.map(message => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div
              className={`py-1 px-2 max-w-[70%] rounded-lg text-sm text-white ${
                message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              {message.text}
              <div className="text-xs text-gray-400">{formatTime(message.id)}</div>
            </div>
          </motion.div>
        ))}

        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}
