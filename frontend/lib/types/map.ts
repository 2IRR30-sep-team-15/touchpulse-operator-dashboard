import { styles } from '../data/styles';
import { LngLatLike, MapRef } from '@vis.gl/react-maplibre';

export type StyleKey = keyof typeof styles;

export type StyleContextType = {
    styles: Record<StyleKey, string> ;
    selectedStyle: StyleKey;
    setSelectedStyle: (selectedStyle: StyleKey) => void;
}

export type SelectUserContextType = {
    users: Array<string>;
    selectedUser?: string;
    setSelectedUser: (user?: string) => void;
}

export type MapControllerContextType = {
    map?: MapRef;
    setMap: (map?: MapRef) => void;
    focusUserOnMap: (coordinates: LngLatLike) => void;
}