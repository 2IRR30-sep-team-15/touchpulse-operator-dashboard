import { useUsersQuery } from '@/lib/backend/users';
import { useState } from 'react';

export const useProfiles = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {
    data: profiles,
    isLoading,
    isError,
  } = useUsersQuery({
    search: searchQuery,
  });

  return {
    profiles: profiles ?? [],
    isLoading,
    isError,
    setSearchQuery,
  };
};
