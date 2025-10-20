import { useMutation } from '@tanstack/react-query';
import urls from '../urls';
import axios from 'axios';

interface AuthUser {
  username: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
}

/**
 * Allows users to login
 */
export const useLoginUserMutation = () => {
  const url = urls.base_backend.auth.create;
  const call = ({ username, password }: AuthUser) =>
    axios.post<AuthResponse>(url, {
      username,
      password,
    });

  return useMutation({
    mutationFn: call,
  });
};
