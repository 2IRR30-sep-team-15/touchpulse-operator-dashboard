'use client';

import ProfileList from './profile-list';
import { useProfiles } from './index.hooks';

export default function ProfilesTab({
  onSelectProfile,
}: {
  onSelectProfile: (p: Profile) => void;
}) {
  const { profiles, isLoading, isError } = useProfiles();

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
