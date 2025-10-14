import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, MapPin } from "lucide-react";
import { Profile } from "@/lib/interfaces/profile";

export default function ProfileItem({ profile }: { profile: Profile }) {
  return (
    <div className="flex items-center gap-3 py-3 px-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors cursor-pointer">

        {/* profile picture */}
        <Avatar>
            {profile.image && <AvatarImage src={profile.image} />}
            <AvatarFallback>
            {profile.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
        </Avatar>

        {/* name and email */}
        <div className="flex-1">
            <p className="font-medium text-gray-900 dark:text-gray-100">{profile.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{profile.username}</p>
        </div>

        {/* action buttons */}
        <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition" onClick={() => console.log("Call", profile.name)}>
            <Phone size={18} />
            </button>
            <button className="p-2 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition" onClick={() => console.log("Location", profile.name)}>
            <MapPin size={18} />
            </button>
        </div>
        </div>
  );
}
