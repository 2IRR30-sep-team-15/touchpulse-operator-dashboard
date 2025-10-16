import { useQuery } from '@tanstack/react-query';
import { fetchWithAuth } from '../httpCalls';
import urls from '../urls';
import { toast } from 'sonner';

export const useUsersQuery = () => {
  const url = urls.base_backend.users;

  const call = async (): Promise<Profile[]> => {
    const response = await fetchWithAuth<Profile[]>(url);

    return response.data;
  };

  return useQuery({
    queryKey: ['useUsersQuery'],
    queryFn: call,
    refetchInterval: 1000 * 60 * 60 * 24, // 24 hours
  });
};
