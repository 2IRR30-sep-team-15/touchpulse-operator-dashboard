import { ArrowRight } from 'lucide-react';

interface ChatItemProps {
  chat: Chat;
}

export default function ChatItem({ chat }: ChatItemProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-sidebar-accent rounded-lg shadow-sm dark:hover:bg-sidebar-accent-hover hover:bg-sidebar-accent-hover cursor-pointer transition">
      {/* Chat Information */}
      <div className="flex flex-col">
        <p className="font-semibold">{chat.correspondent}</p>
        <p className="text-sm text-muted-foreground truncate w-48">
          {chat.lastMessage}
        </p>
      </div>

      {/* Timestamp and Arrow Icon */}
      <div className="flex items-center space-x-2 text-right">
        <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}
