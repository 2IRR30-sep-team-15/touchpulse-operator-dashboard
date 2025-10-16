'use client';

import ProfileList from './profile-list';
import { useProfiles } from './index.hooks';
import SearchBar from './searchbar';
import LoadingThreeDots from '@/components/common/loading-three-dots';

export default function ProfilesTab({
  onSelectProfile,
}: {
  onSelectProfile: (p: Profile) => void;
}) {
  const { profiles, isLoading, setSearchQuery } = useProfiles();

  return (
    <div className="flex flex-col h-full items-center">
      <SearchBar setSearchQuery={setSearchQuery} />

      {isLoading ? (
        <LoadingThreeDots />
      ) : (
        <ProfileList profiles={profiles} onSelect={onSelectProfile} />
      )}
    </div>
  );
}
