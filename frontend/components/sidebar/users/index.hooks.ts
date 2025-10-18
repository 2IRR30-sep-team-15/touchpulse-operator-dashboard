import { useUsersQuery } from '@/lib/backend/users';
import { useState } from 'react';

export const useUsers = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {
    data: users,
    isLoading,
    isError,
  } = useUsersQuery({
    search: searchQuery,
  });

  return {
    users: users ?? [],
    isLoading,
    isError,
    searchQuery,
    setSearchQuery,
  };
};
