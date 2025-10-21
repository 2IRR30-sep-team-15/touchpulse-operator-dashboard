import { useUsersQuery } from '@/lib/backend/users';
import { useState } from 'react';
import { LOCAL_USER_LIST } from '@/lib/data/users';

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
    // users: LOCAL_USER_LIST, // uncomment if you want to use local data instead of database and comment line below
    users: users ?? [],
    isLoading,
    isError,
    searchQuery,
    setSearchQuery,
  };
};
