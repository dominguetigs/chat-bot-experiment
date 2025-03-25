import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { ModeToggle } from '@/components/mode-toggle';

export function ChatHeader() {
  return (
    <div className="flex items-center p-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <h3 className="ml-2 text-md font-semibold">Cornellius</h3>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>
  );
}
