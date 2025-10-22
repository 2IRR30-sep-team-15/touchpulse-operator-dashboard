import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MapControllerContext } from '@/context/MapControllerContext';
import { MapControllerContextType } from '@/lib/types/map';
import { Phone, MapPin } from 'lucide-react';
import { useContext } from 'react';

interface UserItemProps {
  user: User;
  onSelect?: (user: User) => void;
  className?: string;
}

export default function UserItem({ user, onSelect }: UserItemProps) {
  const { focusUserOnMap } = useContext(
    MapControllerContext,
  ) as MapControllerContextType;

  const handleCall = () => {
    console.log('Do call logic: ', user.settings.nickname);
  };

  const handleLocation = async () => {
    console.log('Do location logic: ', user.settings.nickname);

    try {
      // TODO: get data from backend
      const res = await fetch(`/data/location_${user.id}.json`);
      const data = await res.json();

      if (data) {
        const coordinates = data['coordinates'];
        focusUserOnMap(coordinates);
      }
    } catch {
      console.log("Couldn't fetch location for user: ", user.settings.nickname);
    }
  };
  return (
    <div
      className="flex items-center gap-2 py-4 px-2 hover:bg-sidebar-primary cursor-pointer rounded-md transition"
      onClick={() => onSelect?.(user)}
    >
      {/* profile picture */}
      <Avatar className="w-10 h-10">
        {user?.image && <AvatarImage src={user?.image} />}
        <AvatarFallback>
          {user.settings.nickname
            ?.split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>

      {/* name and email */}
      <div className="flex-1">
        <p className="text-base font-medium">
          {user.settings.nickname ?? 'NICKNAME'}
        </p>
        <p className="text-sm text-muted-foreground">{user.email ?? 'EMAIL'}</p>
      </div>

      {/* action buttons */}
      <div
        className="flex items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          onClick={handleCall}
          variant="ghost"
          size="icon-lg"
          className="p-2 rounded-md hover:bg-sidebar-primary cursor-pointer"
        >
          <Phone className="w-5 h-5" />
        </Button>
        <Button
          onClick={handleLocation}
          variant="ghost"
          size="icon-lg"
          className="p-2 rounded-md hover:bg-sidebar-primary cursor-pointer"
        >
          <MapPin className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
