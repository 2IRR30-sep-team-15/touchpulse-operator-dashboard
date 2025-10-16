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

import LocationsTab from '@/app/dashboard/sidebar/locations-tab';
import ProfilesTab from '@/app/dashboard/sidebar/profiles-tab';
import DetailsTab from '@/app/dashboard/sidebar/details-tab';
import ChatsTab from '@/app/dashboard/sidebar/chats-tab';
import CallTab from '@/app/dashboard/sidebar/call-tab';

import { Profile } from '@/lib/interfaces/profile';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<
    'settings' | 'profiles' | 'details' | 'chats' | 'locations' | 'stuff'
  >('profiles');

  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <aside className="h-screen bg-gray-100 dark:bg-gray-900 p-4 flex flex-col border-r">
      {/* --- Main content --- */}
      <div className="flex-1 overflow-hidden w-full">
        {activeTab === 'settings' && (
          <div className="flex items-center justify-center h-full text-gray-500">
            Settings placeholder
          </div>
        )}

        {activeTab === 'profiles' && (
          <ProfilesTab
            onSelectProfile={(profile) => {
              setSelectedProfile(profile);
              setActiveTab('details');
            }}
          />
        )}

        {activeTab === 'details' && (
          <div className="flex flex-col items-center justify-center h-full w-full">
            {selectedProfile ? (
              <DetailsTab profile={selectedProfile} />
            ) : (
              <p>No profile selected</p>
            )}
          </div>
        )}

        {activeTab === 'chats' && (
          <div className="flex flex-col items-center justify-center h-full">
            {selectedProfile ? (
              <ChatsTab profile={selectedProfile} />
            ) : (
              <p>No profile selected</p>
            )}
          </div>
        )}

        {activeTab === 'locations' && (
          <div className="flex flex-col items-center justify-center h-full">
            {selectedProfile ? (
              <LocationsTab profile={selectedProfile} />
            ) : (
              <p>No profile selected</p>
            )}
          </div>
        )}

        {activeTab === 'stuff' && (
          <div className="flex flex-col items-center justify-center h-full">
            {selectedProfile ? <CallTab /> : <p>No profile selected</p>}
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
          variant={activeTab === 'profiles' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('profiles')}
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
          variant={activeTab === 'stuff' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('stuff')}
        >
          <Video className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  );
}
