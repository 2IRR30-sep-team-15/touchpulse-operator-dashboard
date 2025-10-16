'use client';

import LoadingThreeDots from '@/components/common/loading-three-dots';

import ProfileList from './profile-list';
import { useProfiles } from './index.hooks';
import SearchBar from './search-bar';

interface ProfilesTabProps {
  onSelectProfile: (p: Profile) => void;
}

export default function ProfilesTab({ onSelectProfile }: ProfilesTabProps) {
  const { profiles, isLoading, searchQuery, setSearchQuery } = useProfiles();

  return (
    <div className="flex flex-col h-full items-center gap-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {isLoading ? (
        <LoadingThreeDots />
      ) : (
        <ProfileList profiles={profiles} onSelect={onSelectProfile} />
      )}
    </div>
  );
}
