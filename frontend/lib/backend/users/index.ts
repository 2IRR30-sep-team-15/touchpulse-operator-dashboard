import { useQuery } from '@tanstack/react-query';
import { fetchWithAuth } from '../httpCalls';
import urls from '../urls';
import { Profile } from '@/lib/interfaces/profile';

export const useUsersQuery = () => {
  const url = urls.base_backend.users;

  const call = async (): Promise<Profile[]> => {
    const response = await fetchWithAuth<Profile[]>(url);
    return response.data; // Ensure the correct data type is returned
  };

  return useQuery({
    queryKey: ['useUsersQuery'],
    queryFn: call,
    refetchInterval: 1000 * 60 * 60 * 24, // 24 hours
  });
};
