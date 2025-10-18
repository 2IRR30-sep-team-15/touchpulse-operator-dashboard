import UserItem from './user-item';

interface UsersListProps {
  users: User[];
  onSelect: (u: User) => void;
}

export default function UsersList({ users: users, onSelect }: UsersListProps) {
  return (
    <div
      className="flex-1 w-full overflow-y-auto divide-y divide-gray-300 dark:divide-gray-700
      [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {users.map((user) => (
        <UserItem key={user.id} user={user} onSelect={onSelect} />
      ))}
    </div>
  );
}
