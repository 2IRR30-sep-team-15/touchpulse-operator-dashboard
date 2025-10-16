'use client';
import { useState } from 'react';
import SearchBar from '@/app/dashboard/sidebar/profiles-tab/searchbar';
import ProfileList from '@/app/dashboard/sidebar/profiles-tab/profilelist';
import { Profile } from '@/lib/interfaces/profile';
import { PROFILES_DATA } from '@/lib/data/profiles-data';
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
