import { useLoginUserMutation } from '@/lib/backend/auth';
import { FormEvent, useEffect } from 'react';
import { toast } from 'sonner';

export const useUserAuth = () => {
  const loginMutation = useLoginUserMutation();

  async function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    loginMutation.mutate({
      username: event.currentTarget['username'].value,
      password: event.currentTarget['password'].value,
    });
  }

  // throw toast if login mutation failed
  useEffect(() => {
    if (loginMutation.isError) {
      toast('Invalid username or password.', {
        duration: 4000,
        description: 'Please try again.',
      });
    }
  }, [loginMutation.isError]);

  // throw toast if login mutation success
  useEffect(() => {
    if (loginMutation.isSuccess) {
      toast('Success!', {
        duration: 2000,
        description: 'You have successfully authenticated!',
      });

      const { access_token } = loginMutation.data.data;

      localStorage.setItem('access_token', access_token);

      window.location.href = '/dashboard';
    }
  }, [loginMutation.isSuccess, loginMutation.data?.data]);

  return { onFormSubmit, isLoading: loginMutation.isPending };
};
