import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { ChatFooter } from './footer';
import { ChatHeader } from './header';
import { ChatContent } from './content';

export function Chat() {
  return (
    <Card className="h-[100dvh] w-full shadow-none rounded-none sm:h-[70vh] sm:w-[700px] sm:shadow-lg sm:rounded-lg gap-0 py-4">
      <ChatHeader />

      <Separator />

      <ChatContent />

      <div className="mt-auto">
        <Separator />
        <ChatFooter />
      </div>
    </Card>
  );
}
