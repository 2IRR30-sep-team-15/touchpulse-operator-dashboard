import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { MapRef } from "react-map-gl/maplibre";
import { MapControllerContext } from '@/context/MapControllerContext';
import { MapControllerContextType } from '@/lib/types/map';


export default function SearchBar() {
  const maptilerKey = 'nTWCMj76UIFD774ZMWhX';
  const [searchQuery, setSearchQuery] = React.useState('');
  const { focusUserOnMap, setSearchedLocation } = useContext(MapControllerContext) as MapControllerContextType;
  const mapRef = React.useRef<MapRef>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!searchQuery) return;

    try {
      const res = await fetch(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(
          searchQuery
        )}.json?key=${maptilerKey}`
      );
      const data = await res.json();

      if (data.features && data.features.length > 0) {
        const [lon, lat] = data.features[0].geometry.coordinates;

        mapRef.current?.flyTo({
          center: [lon, lat],
          zoom: 14,
          duration: 2000,
        });

        focusUserOnMap( {lon, lat });
        setSearchedLocation({ lon, lat });
      } else {
        alert('Location not found');
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
  }


    return (
        <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center gap-2 bg-black p-2 rounded-lg shadow-md">
            <Input 
                className="bg-white" 
                placeholder="Search address here..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="outline">
                Search
            </Button>
        </form>
    );
}