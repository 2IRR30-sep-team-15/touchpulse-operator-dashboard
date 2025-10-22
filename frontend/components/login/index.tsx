import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { useUserAuth } from './index.hooks';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: LoginFormProps) {
  const { onFormSubmit, isLoading } = useUserAuth();

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onFormSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username"
              type="username"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              className="border-gray-300 text-black"
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              className="border-gray-300 text-black"
            />
          </div>
          <Button
            disabled={isLoading}
            className="bg-[#E17100] text-white hover:bg-[#C86400] transition-colors"
          >
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Enter
          </Button>
        </div>
      </form>
    </div>
  );
}
