import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { AudioRecorder } from '@/components/audio-recorder';

import { useChat } from '@/stores';
import { generateBotResponse } from '@/utils';

export function ChatFooter() {
  const [inputValue, setInputValue] = useState('');
  const { addMessage } = useChat();

  const handleUserMessage = (text: string) => {
    addMessage(text, undefined, 'user');

    const botResponse = generateBotResponse();

    addMessage(botResponse, undefined, 'bot');
    setInputValue('');
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      handleUserMessage(inputValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleAudioMessage = (audioUrl: string) => {
    addMessage(undefined, audioUrl, 'user');

    const botResponse = generateBotResponse();

    addMessage(botResponse, undefined, 'bot');
  };

  return (
    <div className="relative flex items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-none sm:rounded-b-lg">
      <Input
        className="flex-grow mr-2 bg-background"
        placeholder="Type your message..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <AudioRecorder onSendAudio={handleAudioMessage} />
    </div>
  );
}
