'use client';
import LoadingThreeDots from '@/components/common/loading-three-dots';
import UsersList from './user-list';
import { useUsers } from './index.hooks';
import SearchBar from './search-bar';

interface UsersTabProps {
  onSelectUser: (p: User) => void;
}

export default function UsersTab({
  onSelectUser: onSelectUser,
}: UsersTabProps) {
  const { users, isLoading, searchQuery, setSearchQuery } = useUsers();

  return (
    <div className="flex flex-col h-full items-center gap-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {isLoading ? (
        <LoadingThreeDots />
      ) : (
        <UsersList users={users} onSelect={onSelectUser} />
      )}
    </div>
  );
}
