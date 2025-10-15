'use client';


import * as React from 'react';
import { Map, NavigationControl, Marker, Source, Layer, useMap } from 'react-map-gl/maplibre';
import type { LineLayerSpecification } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function InteractiveMap() {
    const maptilerKey = "nTWCMj76UIFD774ZMWhX";
    console.log("KEY:", maptilerKey);

    const styles = {
        dark: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${maptilerKey}`,
        light: `https://api.maptiler.com/maps/streets/style.json?key=${maptilerKey}`,
        satellite: `https://api.maptiler.com/maps/hybrid/style.json?key=${maptilerKey}`,
    };


    const [selectedStyle, setSelectedStyle] = React.useState<'dark' | 'light' | 'satellite' >('dark');

    const users = ['user1', 'user2', 'user3'];
    const [selectedUser, setSelectedUser] = React.useState(undefined);

    return (
        <div className="relative w-full h-full">
            <MyMap 
                mapStyle={styles[selectedStyle]}
                users={users}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
            />

            <div className="absolute bottom-12 right-4">
                <SelectLayer selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
            </div>

            <div className="absolute top-4 left-4">
                <SearchBar />
            </div>
        </div>
    );
}


function MyMap({ mapStyle, users, selectedUser, setSelectedUser }:
    { mapStyle: string; users: Array<string>; selectedUser?: String; setSelectedUser: (value: any) => void }) {
    return (
        <Map
            initialViewState={{
                longitude: 5.476,
                latitude: 51.439,
                zoom: 14
            }}
            style={{width: '100%', height: '100%'}}
            mapStyle={mapStyle}
            onClick={() => setSelectedUser(undefined)}
        >
            <DisplayUsers users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <NavigationControl />
        </Map>
    );
}

function SelectLayer({ selectedStyle, setSelectedStyle }: { selectedStyle: string; setSelectedStyle: (value: any) => void }) {
    return (
        <Select value={selectedStyle} onValueChange={(value) => setSelectedStyle(value as any)}>
            <SelectTrigger className="bg-white w-full">
            <SelectValue placeholder="Select a layer" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="satellite">Satellite</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>
    );
}

function SearchBar() {
    return (
        <div className="flex w-full max-w-sm items-center gap-2">
            <Input className="bg-white" type="email" placeholder="Search address here..." />
            <Button type="submit" variant="outline">
                Search
            </Button>
        </div>
    );
}

function DisplayUsers({ users, selectedUser, setSelectedUser }: { users: Array<string>; selectedUser?: String; setSelectedUser: (value: any) => void }) {
    // display all users if none is selected
    if (!selectedUser) {
        return (
            <>{users.map((user, index) => (
                <React.Fragment key={index}>
                    <UserLocation user={user} setSelectedUser={setSelectedUser} />
                    <UserRoute user={user} />
                </React.Fragment>
            ))}</>
        )
    }

    // display only the selected user
    return (
        <>
            <UserLocation user={selectedUser} setSelectedUser={setSelectedUser} />
            <UserRoute user={selectedUser} />
        </>
    )
}

function UserLocation({ user, setSelectedUser }: { user: String; setSelectedUser: (value: any) => void }) {
    const {current: map} = useMap();
    
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/data/location_${user}.json`).then(res => res.json()).then(setData);
    });

    if (!data) return null;

    const coordinates = data["coordinates"];
    const longitude = coordinates[0];
    const latitude = coordinates[1];

    return (
        <Marker
            longitude={longitude}
            latitude={latitude}
            onClick={(e) => {
                e.originalEvent.stopPropagation();
                setSelectedUser(user);
                map?.easeTo({center: coordinates, zoom: 14});
            }}
        />
    );
}

function UserRoute({ user }: { user: String }) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/data/route_${user}.geojson`).then(res => res.json()).then(setData);
    });

    if (!data) return null;

    const routeLayer : LineLayerSpecification = {
        id: `route_${user}`,
        type: 'line',
        source: 'maplibre',
        paint: {
            'line-color': '#01b4af',
            'line-width': 4
        },
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        }
    }
    
    return (
        <Source id={`route_${user}`} type="geojson" data={data}>
            <Layer {...routeLayer} />
        </Source>
    );
}