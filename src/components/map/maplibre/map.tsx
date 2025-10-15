import { useContext } from 'react';
import { Map, NavigationControl } from 'react-map-gl/maplibre';
import { StyleContext } from '@/context/StyleContext';
import { StyleContextType } from '@/lib/types/map';
import { DisplayUsers } from '@/components/map/maplibre/displayusers';
import 'maplibre-gl/dist/maplibre-gl.css';


export default function MyMap({ users, selectedUser, setSelectedUser }:
    { users: Array<string>; selectedUser?: String; setSelectedUser: (value: any) => void }) {
    
    const { styles, selectedStyle } = useContext(StyleContext) as StyleContextType;

    return (
        <Map
            initialViewState={{
                longitude: 5.476,
                latitude: 51.439,
                zoom: 14
            }}
            style={{width: '100%', height: '100%'}}
            mapStyle={styles[selectedStyle]}
            onClick={() => setSelectedUser(undefined)}
        >
            <DisplayUsers users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <NavigationControl />
        </Map>
    );
}