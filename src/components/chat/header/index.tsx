import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { ModeToggle } from '@/components/mode-toggle';

export function ChatHeader() {
  return (
    <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-none sm:rounded-t-lg">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>C</AvatarFallback>
      </Avatar>

      <h3 className="ml-2 text-md font-semibold">Newton</h3>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>
  );
}
