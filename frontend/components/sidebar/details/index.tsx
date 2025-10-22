import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@radix-ui/react-separator';
import {
  Languages,
  Accessibility,
  Eye,
  Dog,
  X,
  CandyCane,
  User,
} from 'lucide-react';

interface DetailsTabProps {
  user: User;
}

export default function DetailsTab({ user }: DetailsTabProps) {
  // Helper function for the initial fallback text
  const fallbackInitials = user.settings.nickname
    ?.split(' ')
    .map((n) => n[0])
    .join('');

  // Helper for rendering Yes/No badge
  const renderBooleanBadge = (value: boolean) => (
    <Badge
      variant={value ? 'default' : 'secondary'}
      className={`w-14 justify-center ${
        value
          ? 'bg-black text-white hover:bg-black/90'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {value ? 'Yes' : 'No'}
    </Badge>
  );

  return (
    <div className="flex flex-col h-full items-center gap-4">
      {/* 1. Profile Header Section */}
      <div className="flex items-center justify-between w-full shrink-0">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            {user.image && <AvatarImage src={user.image} />}
            <AvatarFallback>{fallbackInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-lg">{user.settings.nickname}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <Button
          variant={'ghost'}
          size="icon"
          onClick={() => console.log('Close user details')}
          className="cursor-pointer"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Separator />

      {/* Main Content Sections */}
      <ScrollArea className="flex-1 min-h-0 overflow-y-auto w-full pr-4">
        {/* 2. Details Section */}
        <section className="space-y-3 mb-6 px-2">
          <h3 className="flex items-center gap-2 font-semibold">
            <User className="w-5 h-5" />
            <span>Details</span>
          </h3>

          {/* Email */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Contact:</span>
            </div>
            <span className="text-sm">{user.email}</span>
          </div>
          {/* Languages */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Languages:</span>
            </div>
            <Badge variant="default">{user.settings.language}</Badge>
          </div>
        </section>

        {/* 4. Accessibility Section */}
        <section className="space-y-3 mb-6 px-2">
          <h3 className="flex items-center gap-2 font-semibold">
            <Accessibility className="w-5 h-5" />
            <span>Accessibility</span>
          </h3>

          {/* Sight */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Sight:</span>
            </div>
            <span className="text-sm">{user.demographic.sight_status}</span>
          </div>

          {/* Cane */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CandyCane className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Cane:</span>
            </div>
            {renderBooleanBadge(user.demographic.uses_cane)}
          </div>

          {/* Guide Dog */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dog className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Guide Dog:</span>
            </div>
            {renderBooleanBadge(user.demographic.uses_guide_dog)}
          </div>
        </section>
      </ScrollArea>
    </div>
  );
}
