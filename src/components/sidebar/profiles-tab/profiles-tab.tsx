"use client";
import { useState } from "react";
import SearchBar from "@/components/sidebar/profiles-tab/searchbar";
import ProfileList from "@/components/sidebar/profiles-tab/profilelist";
import { Profile } from "@/lib/interfaces/profile";


const profiles: Profile[] = [
    { name: "Jane Doe", username: "@janedoe", image: "" }, 
    { name: "John Smith", username: "@johnsmith", image: "" }, 
    { name: "Emily Carter", username: "@emily", image: "" }, 
    { name: "Michael Lee", username: "@mlee", image: "" }, 
    { name: "Sophia Turner", username: "@sophia", image: "" }, 
    { name: "Daniel Kim", username: "@danielk", image: "" }, 
    { name: "Ava Martinez", username: "@avam", image: "" }, 
    { name: "Liam Johnson", username: "@liamj", image: "" }, 
    { name: "Daniel Kim", username: "@danielk", image: "" }, 
    { name: "Ava Martinez", username: "@avam", image: "" }, 
    { name: "Liam Johnson", username: "@liamj", image: "" }, 
    { name: "Daniel Kim", username: "@danielk", image: "" }, 
    { name: "Ava Martinez", username: "@avam", image: "" }, 
    { name: "Liam Johnson", username: "@liamj", image: "" },
];


export default function ProfilesTab() {
  const [query, setQuery] = useState("");

  const filtered = profiles.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <SearchBar query={query} setQuery={setQuery} />
      <ProfileList profiles={filtered} />
    </div>
  );
}
