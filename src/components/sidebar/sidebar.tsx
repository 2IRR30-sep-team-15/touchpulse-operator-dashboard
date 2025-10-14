import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, User, Settings } from "lucide-react";
import ProfilesTab from "@/components/sidebar/profiles-tab/profiles-tab";


export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<
  "profiles" | "chats" | "details" | "settings"
  >("profiles");

  return (
    <aside className="h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col border-r">
      {/* --- Bar content --- */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "profiles" && (
          <ProfilesTab/>
        )}

        {activeTab === "details" && (
          <div className="flex items-center justify-center h-full text-gray-500">
            Details placeholder
          </div>
        )}

        {activeTab === "chats" && (
          <div className="flex items-center justify-center h-full text-gray-500">
            Chats placeholder
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex items-center justify-center h-full text-gray-500">
            Settings placeholder
          </div>
        )}
      </div>

      {/* --- Bottom menu --- */}
      <div className="flex justify-around border-t pt-2 mt-2">
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
