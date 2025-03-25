import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { BOT_TIMEOUT } from '@/constants';
import { generateBotResponse } from '@/utils';

export interface Message {
  id: number;
  text?: string;
  audio?: string;
  sender: 'user' | 'bot';
}

interface ChatStore {
  messages: Message[];
  addMessage: (text: string | undefined, audio: string | undefined, sender: 'user' | 'bot') => void;
}

export const useChat = create<ChatStore>()(
  persist(
    set => ({
      messages: [],
      addMessage: (text, audio, sender) =>
        set(state => {
          const updatedMessages = [...state.messages, { id: Date.now(), text, audio, sender }];

          if (sender === 'bot') {
            setTimeout(() => {
              set(state => ({
                messages: [
                  ...state.messages,
                  { id: Date.now(), text: generateBotResponse(), sender },
                ],
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
