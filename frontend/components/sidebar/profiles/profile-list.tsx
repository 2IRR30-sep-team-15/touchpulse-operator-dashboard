import ProfileItem from './profile-item';

interface ProfileListProps {
  profiles: Profile[];
  onSelect: (p: Profile) => void;
}

export default function ProfileList({ profiles, onSelect }: ProfileListProps) {
  return (
    <div
      className="flex-1 w-full overflow-y-auto divide-y divide-gray-300 dark:divide-gray-700
      [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {profiles.map((profile) => (
        <ProfileItem key={profile.id} profile={profile} onSelect={onSelect} />
      ))}
    </div>
  );
}
