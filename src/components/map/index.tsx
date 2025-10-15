'use client';

import { useState } from 'react';
import MapOverlay from "@/components/map/overlay/mapoverlay";
import StyleProvider from "@/context/StyleContext";
import Map from "@/components/map/maplibre/map"

export default function InteractiveMap() {
    const users = ['user1', 'user2', 'user3'];
    const [selectedUser, setSelectedUser] = useState(undefined);

    return (
        <div className="relative w-full h-full">
            <StyleProvider>
                <Map
                    users={users}
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                />
                <MapOverlay />
            </StyleProvider>
        </div>
    );
}