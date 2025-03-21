import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ChatHeader() {
  return (
    <div className="flex items-center px-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h3 className="ml-2 text-md font-semibold">Cornellius Newton</h3>
    </div>
  );
}
