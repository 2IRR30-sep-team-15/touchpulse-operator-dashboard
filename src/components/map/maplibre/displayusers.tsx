import { Fragment, useEffect, useState } from 'react';
import { Marker, Source, Layer, useMap } from 'react-map-gl/maplibre';
import type { LineLayerSpecification } from 'react-map-gl/maplibre'

export function DisplayUsers({ users, selectedUser, setSelectedUser }: { users: Array<string>; selectedUser?: String; setSelectedUser: (value: any) => void }) {
    // display all users if none is selected
    if (!selectedUser) {
        return (
            <>
                {users.map((user, index) => (
                    <Fragment key={index}>
                        <UserLocation user={user} setSelectedUser={setSelectedUser} />
                        <UserRoute user={user} />
                    </Fragment>
                ))}
            </>
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
    
    const [data, setData] = useState(null);

    useEffect(() => {
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
    const [data, setData] = useState(null);

    useEffect(() => {
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