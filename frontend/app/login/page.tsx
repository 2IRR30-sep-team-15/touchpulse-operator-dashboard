'use client';

import LoginForm from '@/components/login';
import { MapPin } from 'lucide-react';

const LoginTemplate = () => {
  return (
    <div className="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-gray-900 p-10 text-primary-foreground dark:border-r lg:flex">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <MapPin className="mr-2 h-8 w-8" />
          Pathway Dashboard
        </div>
      </div>
      <div className="lg:p-8 bg-background">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Log in to your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
