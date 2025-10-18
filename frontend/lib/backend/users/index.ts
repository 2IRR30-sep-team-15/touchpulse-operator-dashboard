import { useQuery } from '@tanstack/react-query';
import { fetchWithAuth } from '../httpCalls';
import urls from '../urls';

interface UsersQueryProps {
  search?: string;
  ordering?: string;
}

export const useUsersQuery = (props: UsersQueryProps = {}) => {
  const baseUrl = urls.base_backend.users;
  const queryParams: string[] = [];

  if (props.search) queryParams.push(`search=${props.search}`);
  if (props.ordering) queryParams.push(`ordering=${props.ordering}`);

  const urlWithParams = `${baseUrl}${
    queryParams.length > 0 ? '?' + queryParams.join('&') : ''
  }`;

  const call = async (): Promise<Profile[]> => {
    const response = await fetchWithAuth<Profile[]>(urlWithParams);

    return response.data;
  };

  return useQuery({
    queryKey: ['useUsersQuery', urlWithParams],
    queryFn: call,
  });
};
