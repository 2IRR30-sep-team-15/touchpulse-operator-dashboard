import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Languages,
  Accessibility,
  Eye,
  CircleEllipsis,
  Dog,
} from 'lucide-react';

interface DetailsTabProps {
  user: User;
}

export default function DetailsTab({ user }: DetailsTabProps) {
  // Helper function for the initial fallback text
  const fallbackInitials = user.settings.nickname
    ?.split(' ')
    .map((n) => n[0])
    .join('');

  // Helper for rendering Yes/No badge
  const renderBooleanBadge = (value: boolean) => (
    <Badge
      variant={value ? 'default' : 'secondary'}
      className={`w-14 justify-center ${
        value
          ? 'bg-black text-white hover:bg-black/90'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {value ? 'Yes' : 'No'}
    </Badge>
  );

  return (
    <div className="h-full w-full">
      {/* 1. Profile Header Section */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            {user.image && <AvatarImage src={user.image} />}
            <AvatarFallback>{fallbackInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-lg">{user.settings.nickname}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @{user.settings.nickname}
            </p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-200 dark:border-gray-700 mb-4" />

      {/* 2. Contact Section */}
      <section className="space-y-3 mb-6">
        <h3 className="flex items-center gap-2 font-semibold text-base text-gray-900 dark:text-gray-100">
          <Mail className="w-5 h-5" /> Contact
        </h3>

        {/* Email */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 ml-7">
          <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          <p className="text-sm">{user.email}</p>
        </div>
      </section>

      {/* 3. Languages Section */}
      <section className="space-y-3 mb-6">
        <h3 className="flex items-center gap-2 font-semibold text-base text-gray-900 dark:text-gray-100">
          <Languages className="w-5 h-5" /> Languages
        </h3>
        <div className="flex gap-2 ml-7">
          <Badge
            variant="default"
            className="bg-black text-white hover:bg-black/90"
          >
            {user.settings.language}
          </Badge>
        </div>
      </section>

      {/* 4. Accessibility Section */}
      <section className="space-y-3 mb-6">
        <h3 className="flex items-center gap-2 font-semibold text-base text-gray-900 dark:text-gray-100">
          <Accessibility className="w-5 h-5" /> Accessibility
        </h3>

        <div className="space-y-2 ml-7">
          {/* Sight */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <p>Sight:</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {user.demographic.sight_status}
            </p>
          </div>

          {/* Cane */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Using CircleEllipsis as a placeholder for the Cane icon in Lucide */}
              <CircleEllipsis className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <p>Cane:</p>
            </div>
            {renderBooleanBadge(user.demographic.uses_cane)}
          </div>

          {/* Guide Dog */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dog className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              <p>Guide Dog:</p>
            </div>
            {renderBooleanBadge(user.demographic.uses_guide_dog)}
          </div>
        </div>
      </section>
    </div>
  );
}
