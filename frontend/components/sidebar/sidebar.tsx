"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Search, MessageCircle, User, Map, Settings } from "lucide-react";
import ProfilesTab from "./profiles-tab/profiles-tab";
import { Profile } from "@/lib/interfaces/profile";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<
    "profiles" | "details" | "chats" | "locations" | "settings"
  >("profiles");

  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <aside className="h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col border-r">
      {/* --- Main content --- */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "profiles" && (
          <ProfilesTab
            onSelectProfile={(profile) => {
              setSelectedProfile(profile);
              setActiveTab("details");
            }}
          />
        )}

        {activeTab === "details" && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            {selectedProfile ? (
              <>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedProfile.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Details placeholder
                </p>
              </>
            ) : (
              <p>No profile selected</p>
            )}
          </div>
        )}

        {activeTab === "chats" && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            {selectedProfile ? (
              <>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedProfile.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Chats placeholder
                </p>
              </>
            ) : (
              <p>No profile selected</p>
            )}
          </div>
        )}

        {activeTab === "locations" && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            {selectedProfile ? (
              <>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedProfile.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Locations placeholder
                </p>
              </>
            ) : (
              <p>No profile selected</p>
            )}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex items-center justify-center h-full text-gray-500">
            Settings placeholder
          </div>
        )}
      </div>

      {/* --- Bottom menu --- */}
      <div className="flex justify-around border-t pt-2 mt-2 border-gray-100">
        <Button
          variant={activeTab === "profiles" ? "default" : "ghost"}
          size="icon"
          onClick={() => setActiveTab("profiles")}
        >
          <Search className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === "details" ? "default" : "ghost"}
          size="icon"
          onClick={() => setActiveTab("details")}
        >
          <User className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === "chats" ? "default" : "ghost"}
          size="icon"
          onClick={() => setActiveTab("chats")}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === "locations" ? "default" : "ghost"}
          size="icon"
          onClick={() => setActiveTab("locations")}
        >
          <Map className="h-5 w-5" />
        </Button>
        
        <Button
          variant={activeTab === "settings" ? "default" : "ghost"}
          size="icon"
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  );
}
