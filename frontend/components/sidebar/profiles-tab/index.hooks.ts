import { useUsersQuery } from '@/lib/backend/users';

export const useProfiles = () => {
  const { data: profiles, isLoading, isError } = useUsersQuery();

  return {
    profiles: profiles ?? [],
    isLoading,
    isError,
  };
};
