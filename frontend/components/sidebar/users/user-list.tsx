import { ScrollArea } from '@/components/ui/scroll-area';
import UserItem from './user-item';

interface UsersListProps {
  users: User[];
  onSelect: (u: User) => void;
}

export default function UsersList({ users: users, onSelect }: UsersListProps) {
  return (
    <ScrollArea className="flex-1 min-h-0 overflow-y-auto w-full pr-4">
      <div className="flex flex-col gap-2 w-full">
        {users.length === 0 && (
          <div className="text-sm text-muted-foreground text-center">
            No users found.
          </div>
        )}

        {users.map((user) => (
          <UserItem key={user.id} user={user} onSelect={onSelect} />
        ))}
      </div>
    </ScrollArea>
  );
}
