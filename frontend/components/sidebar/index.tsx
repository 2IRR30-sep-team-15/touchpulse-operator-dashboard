'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Search,
  MessageCircle,
  User,
  Map,
  Settings,
  Video,
} from 'lucide-react';

import LocationsTab from '@/components/sidebar/locations';
import UsersTab from '@/components/sidebar/users';
import DetailsTab from '@/components/sidebar/details';
import ChatsTab from '@/components/sidebar/chats';
import CallTab from '@/components/sidebar/call';
import SettingsTab from '@/components/sidebar/settings';

type TabType =
  | 'settings'
  | 'users'
  | 'details'
  | 'chats'
  | 'locations'
  | 'call';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<TabType>('users');

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <aside className="h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col border-r">
      {/* --- Main content --- */}
      <div className="flex-1 overflow-hidden w-full">
        {activeTab === 'settings' && <SettingsTab />}

        {activeTab === 'users' && (
          <UsersTab
            onSelectUser={(user) => {
              setSelectedUser(user);
              setActiveTab('details');
            }}
          />
        )}

        {activeTab === 'details' && (
          <div className="flex flex-col items-center justify-center h-full w-full">
            {selectedUser ? (
              <DetailsTab user={selectedUser} />
            ) : (
              <p>No user selected</p>
            )}
          </div>
        )}

        {activeTab === 'chats' && (
          <div className="flex flex-col items-center justify-center h-full">
            {selectedUser ? (
              <ChatsTab user={selectedUser} />
            ) : (
              <p>No user selected</p>
            )}
          </div>
        )}

        {activeTab === 'locations' && (
          <div className="flex flex-col items-center justify-center h-full">
            {selectedUser ? (
              <LocationsTab profile={selectedUser} />
            ) : (
              <p>No user selected</p>
            )}
          </div>
        )}

        {activeTab === 'call' && (
          <div className="flex flex-col items-center justify-center h-full">
            {selectedUser ? <CallTab /> : <p>No user selected</p>}
          </div>
        )}
      </div>

      {/* --- Bottom menu --- */}
      <div className="flex justify-around border-t pt-2 mt-2 border-gray-100">
        <Button
          variant={activeTab === 'settings' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('settings')}
        >
          <Settings className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'users' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('users')}
        >
          <Search className="h-5 w-5" />
        </Button>

        {/* --- Vertical Separator --- */}
        <div className="border-l border-gray-100 h-8 mx-1 self-center" />

        <Button
          variant={activeTab === 'details' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('details')}
        >
          <User className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'chats' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('chats')}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'locations' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('locations')}
        >
          <Map className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'call' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('call')}
        >
          <Video className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  );
}
