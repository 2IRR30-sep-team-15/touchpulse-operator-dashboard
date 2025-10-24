import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import ChatItem from './chat-item';

interface ChatsTabProps {
  user: User;
}

export default function ChatsTab({ user }: ChatsTabProps) {
  // TODO: uncomment line below and remove the rest once the database gets populated with chat data
  //const chats = user.chats;

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/data/chats_${user.id}.json`)
      .then((res) => res.json())
      .then(setData);
  });

  let chats: Chat[] = [];

  if (data) {
    chats = data['chats'];
  }

  // end of TODO

  return (
    <div className="flex flex-col h-full items-center gap-4">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full shrink-0">
        <h2 className="text-xl">Chats for {user.settings.nickname}</h2>
        <Button
          variant={'ghost'}
          size="icon"
          onClick={() => console.log('Close user chats')}
          className="cursor-pointer"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Separator />

      {/* Main Content Sections */}
      <ScrollArea className="flex-1 min-h-0 overflow-y-auto w-full pr-4">
        <div className="flex flex-col gap-6 px-2">
          {chats?.length === 0 ? (
            <div className="text-sm text-muted-foreground text-center">
              No recent chats found for this user.
            </div>
          ) : (
            chats?.map((chat, index) => <ChatItem key={index} chat={chat} />)
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
