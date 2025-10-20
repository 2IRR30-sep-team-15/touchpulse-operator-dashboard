import { createContext, FC, ReactNode, useState } from "react";
import { MapControllerContextType } from "@/lib/types/map";
import { LngLatLike, MapRef } from '@vis.gl/react-maplibre';

export const MapControllerContext = createContext<MapControllerContextType | null>(null);

const MapControllerProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [map, setMap] = useState<MapRef | undefined>(undefined);
    const [searchedLocation, setSearchedLocation] = useState<{ lon: number; lat: number } | undefined>(undefined);

    const focusUserOnMap = (coordinates: LngLatLike) => {
        map?.easeTo({center: coordinates, zoom: 14});
    }

    return <MapControllerContext value = {{ map, setMap, focusUserOnMap, searchedLocation, setSearchedLocation}}>{children}</MapControllerContext>
}

export default MapControllerProvider;