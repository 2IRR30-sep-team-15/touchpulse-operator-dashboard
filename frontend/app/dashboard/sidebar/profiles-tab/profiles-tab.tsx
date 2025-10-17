"use client";
import { useState } from "react";
import SearchBar from "@/app/dashboard/sidebar/profiles-tab/searchbar";
import ProfileList from "@/app/dashboard/sidebar/profiles-tab/profilelist";
import { Profile } from "@/lib/interfaces/profile";
import { PROFILES_DATA } from "@/lib/data/profiles-data"; 

export default function ProfilesTab({ onSelectProfile }: { onSelectProfile: (p: Profile) => void }) {
  const [query, setQuery] = useState("");

  const profiles = PROFILES_DATA; 

  const filtered = profiles.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <SearchBar query={query} setQuery={setQuery} />
      <ProfileList profiles={filtered} onSelect={onSelectProfile}/>
    </div>
  );
}
