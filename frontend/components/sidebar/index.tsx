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
  MapPin,
  SidebarClose,
} from 'lucide-react';

import LocationsTab from '@/components/sidebar/locations';
import UsersTab from '@/components/sidebar/users';
import DetailsTab from '@/components/sidebar/details';
import ChatsTab from '@/components/sidebar/chats';
import CallTab from '@/components/sidebar/call';
import { Separator } from '@/components/ui/separator';

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
    <aside className="h-screen bg-sidebar p-4 flex flex-col gap-4">
      {/* Header with logo  */}
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant={'default'}
            size="icon-sm"
            onClick={() => console.log('Logo clicked')}
            className="accent-foreground cursor-pointer"
          >
            <MapPin className="h-5 w-5" />
          </Button>
          <h1 className="font-bold">Pathway dashboard</h1>
        </div>
        <Button
          variant={'ghost'}
          size="icon"
          onClick={() => console.log('Close sidebar')}
          className="cursor-pointer"
        >
          <SidebarClose className="h-5 w-5" />
        </Button>
      </div>

      <Separator />

      {/* --- Main content --- */}
      <div className="flex h-full min-h-0 flex-col">
        {activeTab === 'settings' && (
          <div className="flex items-center justify-center h-full">
            Settings placeholder
          </div>
        )}

        {activeTab === 'users' && (
          <UsersTab
            onSelectUser={(user) => {
              setSelectedUser(user);
              setActiveTab('details');
            }}
          />
        )}

        {activeTab === 'details' &&
          (selectedUser ? (
            <DetailsTab user={selectedUser} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <p>No user selected</p>
            </div>
          ))}

        {activeTab === 'chats' &&
          (selectedUser ? (
            <ChatsTab user={selectedUser} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <p>No user selected</p>
            </div>
          ))}

        {activeTab === 'locations' &&
          (selectedUser ? (
            <LocationsTab profile={selectedUser} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <p>No user selected</p>
            </div>
          ))}

        {activeTab === 'call' &&
          (selectedUser ? (
            <CallTab />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <p>No user selected</p>
            </div>
          ))}
      </div>

      <Separator />

      {/* --- Bottom menu --- */}
      <div className="flex justify-around">
        <Button
          variant={activeTab === 'settings' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('settings')}
          className="cursor-pointer"
        >
          <Settings className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'users' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('users')}
          className="cursor-pointer"
        >
          <Search className="h-5 w-5" />
        </Button>

        <Separator orientation="vertical" className="mx-2" />

        <Button
          variant={activeTab === 'details' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('details')}
          className="cursor-pointer"
        >
          <User className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'chats' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('chats')}
          className="cursor-pointer"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'locations' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('locations')}
          className="cursor-pointer"
        >
          <Map className="h-5 w-5" />
        </Button>

        <Button
          variant={activeTab === 'call' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setActiveTab('call')}
          className="cursor-pointer"
        >
          <Video className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  );
}
