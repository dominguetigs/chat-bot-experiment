import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { BOT_TIMEOUT } from '@/constants';

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatStore {
  messages: Message[];
  addMessage: (text: string, sender: 'user' | 'bot') => void;
}

export const useChat = create<ChatStore>()(
  persist(
    set => ({
      messages: [],
      addMessage: (text, sender) =>
        set(state => {
          const updatedMessages = [...state.messages, { id: Date.now(), text, sender }];

          if (sender === 'bot') {
            setTimeout(() => {
              set(state => ({
                messages: [...state.messages, { id: Date.now(), text, sender }],
              }));
            }, BOT_TIMEOUT);

            return { ...state };
          }

          return { messages: updatedMessages };
        }),
    }),
    {
      name: 'chat-history',
    },
  ),
);
