'use client';


import * as React from 'react';
import { Map, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function InteractiveMap() {
    const maptilerKey = "nTWCMj76UIFD774ZMWhX";
    console.log("KEY:", maptilerKey);

    const styles = {
        dark: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${maptilerKey}`,
        light: `https://api.maptiler.com/maps/streets/style.json?key=${maptilerKey}`,
        satellite: `https://api.maptiler.com/maps/hybrid/style.json?key=${maptilerKey}`,
    };


    const [selectedStyle, setSelectedStyle] = React.useState<'dark' | 'light' | 'satellite' >('dark');

    return (
        <div className="relative w-full h-full">
            <MyMap mapStyle={styles[selectedStyle]} />

            <div className="absolute bottom-4 right-4 z-10 w-[14%]">
                <SelectLayer selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
            </div>

            <div className="absolute top-4 right-4 z-10">
                <SearchBar />
            </div>
        </div>
    );
}


function MyMap({ mapStyle }: { mapStyle: string}) {

    return (
        <Map
            initialViewState={{
                longitude: 5.476,
                latitude: 51.439,
                zoom: 14
            }}
            style={{width: '100%', height: '100%'}}
            mapStyle={mapStyle}
        >
            <Marker longitude={5.476} latitude={51.439} anchor="bottom" />
            <Marker longitude={5.481} latitude={51.435} anchor="bottom" />
        </Map>
    );
}


function SelectLayer({ selectedStyle, setSelectedStyle }: { selectedStyle: string; setSelectedStyle: (value: any) => void }) {
    return (
        <Select value={selectedStyle} onValueChange={(value) => setSelectedStyle(value as any)}>
            <SelectTrigger className="bg-white w-full">
            <SelectValue placeholder="Select a layer" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="satellite">Satellite</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>
    );
}


function SearchBar() {
    return (
        <div className="flex w-full max-w-sm items-center gap-4">
            <Input className="bg-white" placeholder="Search address here..." />
            <Button type="submit" variant="outline">
                Search
            </Button>
        </div>
    );
}