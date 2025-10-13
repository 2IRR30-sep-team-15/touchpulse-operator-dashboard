import ProfileItem from "./profileitem";
import { Profile } from "@/lib/interfaces/profile";

export default function ProfileList({ profiles }: { profiles: Profile[] }) {
  return (
    <div className="flex-1 overflow-y-auto divide-y divide-gray-300 dark:divide-gray-700
      [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {profiles.map((p, i) => (
        <ProfileItem key={i} profile={p} />
      ))}
    </div>
  );
}
