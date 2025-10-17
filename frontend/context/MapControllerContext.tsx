import { createContext, FC, ReactNode, useState } from "react";
import { MapControllerContextType } from "@/lib/types/map";
import { LngLatLike, MapRef } from '@vis.gl/react-maplibre';

export const MapControllerContext = createContext<MapControllerContextType | null>(null);

const MapControllerProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [map, setMap] = useState<MapRef | undefined>(undefined);

    const focusUserOnMap = (coordinates: LngLatLike) => {
        map?.easeTo({center: coordinates, zoom: 14});
        console.log(map);
    }

    return <MapControllerContext value = {{ map, setMap, focusUserOnMap }}>{children}</MapControllerContext>
}

export default MapControllerProvider;