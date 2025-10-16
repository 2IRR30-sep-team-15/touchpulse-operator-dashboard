import React from 'react';
import { Profile } from '@/lib/interfaces/profile';
import { ArrowRight } from 'lucide-react';

interface ChatsTabProps {
  profile: Profile;
}

export default function ChatsTab({ profile }: ChatsTabProps) {
  const chats = profile.chats;

  return (
    <div className="flex flex-col h-full space-y-6 overflow-y-auto">
      <h2 className="text-xl">Chats for {profile.name}</h2>

      <div className=""></div>

      {chats?.length === 0 ? (
        <p className="text-gray-500 italic pt-4">
          No recent chats found for this user.
        </p>
      ) : (
        <div className="space-y-2">
          {chats?.map((chat, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
            >
              <div className="flex flex-col">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {chat.correspondent}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate w-48">
                  {chat.lastMessage}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-right">
                <span className="text-xs text-gray-400">{chat.timestamp}</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
