import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ChatFooter() {
  return (
    <div className="flex items-center pt-4 px-4">
      <Input className="flex-grow mr-2" placeholder="Type your message..." />
      <Button
        onClick={() => {
          /* Send message logic */
        }}
      >
        Send
      </Button>
    </div>
  );
}
