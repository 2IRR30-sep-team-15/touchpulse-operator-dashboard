import { useContext } from 'react';
import { Marker } from 'react-map-gl/maplibre';
import { MapControllerContext } from '@/context/MapControllerContext';
import { MapControllerContextType } from '@/lib/types/map';

export function DisplayLocation() {
    const { searchedLocation } = useContext(MapControllerContext) as MapControllerContextType;

    if (!searchedLocation) {
        return null;
    }
    
    {/* Marker for search result */}
    return (
        <Marker
            longitude={searchedLocation.lon}
            latitude={searchedLocation.lat}
            color="red"
            anchor="bottom"
        />
    )
    
}

