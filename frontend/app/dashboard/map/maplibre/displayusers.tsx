import { Fragment, useEffect, useState, useContext } from 'react';
import { Marker, Source, Layer, useMap } from 'react-map-gl/maplibre';
import type { LineLayerSpecification } from 'react-map-gl/maplibre'
import { SelectUserContext } from '@/context/SelectUserContext';
import { MapControllerContext } from '@/context/MapControllerContext';
import { SelectUserContextType, MapControllerContextType } from '@/lib/types/map';

export function DisplayUsers() {
    const { users, selectedUser } = useContext(SelectUserContext) as SelectUserContextType;
    const { setMap } = useContext(MapControllerContext) as MapControllerContextType;
    const { current: map } = useMap();
    useEffect(() => setMap(map)); 

    // display all users if none is selected
    if (!selectedUser) {
        return (
            <>
                {users.map((user, index) => (
                    <Fragment key={index}>
                        <UserLocation user={user} />
                        <UserRoute user={user} />
                    </Fragment>
                ))}
            </>
        )
    }

    // display only the selected user
    return (
        <>
            <UserLocation user={selectedUser} />
            <UserRoute user={selectedUser} />
        </>
    )
}

function UserLocation({ user }: { user: string }) {
    const { setSelectedUser } = useContext(SelectUserContext) as SelectUserContextType;
    const { focusUserOnMap } = useContext(MapControllerContext) as MapControllerContextType;

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
                focusUserOnMap(coordinates);
            }}
        />
    );
}

function UserRoute({ user }: { user: string }) {
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