import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';

interface ProfileItemProps {
  profile: Profile;
  onSelect?: (profile: Profile) => void;
  className?: string;
}

export default function ProfileItem({ profile, onSelect }: ProfileItemProps) {
  const handleCall = () => {
    console.log('Do call logic: ', profile.name);
  };

  const handleLocation = () => {
    console.log('Do location logic: ', profile.name);
  };

  return (
    <div
      className="flex items-center gap-3 py-3 px-2 transition-colors"
      onClick={() => onSelect?.(profile)}
    >
      {/* profile picture */}
      <Avatar>
        {profile.image && <AvatarImage src={profile.image} />}
        <AvatarFallback>
          {profile.name
            ?.split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>

      {/* name and email */}
      <div className="flex-1">
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {profile.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {profile.username}
        </p>
      </div>

      {/* action buttons */}
      <div
        className="flex items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          onClick={handleCall}
          variant={'ghost'}
          size={'icon'}
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <Phone className="w-5 h-5" />
        </Button>
        <Button
          onClick={handleLocation}
          variant={'ghost'}
          size={'icon'}
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <MapPin className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
