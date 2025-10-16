'use client';

import SearchBar from '@/components/sidebar/profiles-tab/searchbar';
import ProfileList from '@/components/sidebar/profiles-tab/profilelist';
import { Profile } from '@/lib/interfaces/profile';
import { useUsersQuery } from '@/lib/backend/users';

export default function ProfilesTab({
  onSelectProfile,
}: {
  onSelectProfile: (p: Profile) => void;
}) {
  const { data: profiles } = useUsersQuery();

  // const filtered = profiles?.filter(
  //   (p) =>
  //     p?.name.toLowerCase().includes(query.toLowerCase()) ||
  //     p?.username.toLowerCase().includes(query.toLowerCase()),
  // );

  return (
    <div className="flex flex-col h-full">
      <ProfileList profiles={profiles} onSelect={onSelectProfile} />
    </div>
  );
}
