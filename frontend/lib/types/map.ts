import { styles } from '@/lib/data/styles';
import { LngLatLike, MapRef } from '@vis.gl/react-maplibre';
import { Profile } from "@/lib/interfaces/profile"

export type StyleKey = keyof typeof styles;

export type StyleContextType = {
    styles: Record<StyleKey, string> ;
    selectedStyle: StyleKey;
    setSelectedStyle: (selectedStyle: StyleKey) => void;
}

export type SelectUserContextType = {
    users: Array<Profile>;
    selectedUser?: Profile;
    setSelectedUser: (user?: Profile) => void;
}

export type MapControllerContextType = {
    map?: MapRef;
    setMap: (map?: MapRef) => void;
    focusUserOnMap: (coordinates: LngLatLike) => void;
}