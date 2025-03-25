import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useChat } from '@/stores';
import { generateBotResponse } from '@/utils';

export function ChatFooter() {
  const [inputValue, setInputValue] = useState('');
  const { addMessage } = useChat();

  const handleUserMessage = (text: string) => {
    addMessage(text, 'user');

    const botResponse = generateBotResponse();

    addMessage(botResponse, 'bot');
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

  return (
    <div className="flex items-center pt-4 px-4">
      <Input
        className="flex-grow mr-2"
        placeholder="Type your message..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </div>
  );
}
