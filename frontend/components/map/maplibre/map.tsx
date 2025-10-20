import { useContext } from 'react';
import { Map, NavigationControl } from 'react-map-gl/maplibre';
import { StyleContext } from '@/context/StyleContext';
import { StyleContextType, SelectUserContextType } from '@/lib/types/map';
import { SelectUserContext } from '@/context/SelectUserContext';
import { DisplayUsers } from '@/components/map/maplibre/displayusers';
import { DisplayLocation } from './displaylocation';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MyMap() {
  const { styles, selectedStyle } = useContext(
    StyleContext,
  ) as StyleContextType;
  const { setSelectedUser } = useContext(
    SelectUserContext,
  ) as SelectUserContextType;

  return (
    <Map
      initialViewState={{
        longitude: 5.476,
        latitude: 51.439,
        zoom: 14,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle={styles[selectedStyle]}
      onClick={() => setSelectedUser(undefined)}
    >
      <DisplayUsers />
      <DisplayLocation />
      <NavigationControl />
    </Map>
  );
}
