"use client";

import { useState } from "react";
import SearchBar from "@/components/sidebar/searchbar";
import ProfileList from "@/components/sidebar/profilelist";
import { Profile } from "@/lib/interfaces/profile";

export default function Sidebar() {
  const [query, setQuery] = useState("");

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

  const filtered = profiles.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.username.toLowerCase().includes(query.toLowerCase())
  );

  console.log("SearchBar is:", SearchBar);

  return (
    <aside className="h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col border-r">
      <SearchBar query={query} setQuery={setQuery} />
      <ProfileList profiles={filtered} />
    </aside>
  );
}
