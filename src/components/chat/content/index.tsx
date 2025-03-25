import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useChat } from '@/stores';
import { formatTime } from '@/utils';

import { ChatEmptyState } from '../empty-state';

export function ChatContent() {
  const { messages } = useChat();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return <ChatEmptyState />;
  }

  return (
    <ScrollArea className="h-full overflow-y-auto">
      <div className="flex flex-col p-4 ">
        {messages.map(({ id, text, audio, sender }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div
              className={`py-1 px-2 max-w-[70%] rounded-lg text-sm text-white ${
                sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              {audio ? <audio className="mb-1" controls src={audio} /> : text}
              <div className="text-xs text-gray-400">{formatTime(id)}</div>
            </div>
          </motion.div>
        ))}

        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}
