import { ScrollArea } from '@/components/ui/scroll-area';
import { useChat } from '@/stores';
import { formatTime } from '@/utils';

export function ChatContent() {
  const { messages } = useChat();

  return (
    <ScrollArea className="h-full overflow-y-auto">
      <div className="flex flex-col p-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div
              className={`py-1 px-2 max-w-[70%] rounded-lg text-sm text-white ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}
            >
              {message.text}

              <div className="text-xs text-gray-400">{formatTime(message.id)}</div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
