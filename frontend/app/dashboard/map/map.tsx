'use client';

import MapOverlay from "@/app/dashboard/map/overlay/mapoverlay";
import StyleProvider from "@/context/StyleContext";
import Map from "@/app/dashboard/map/maplibre/map"

export default function InteractiveMap() {

    return (
        <div className="relative w-full h-full">
            <StyleProvider>
                <Map/>
                <MapOverlay />
            </StyleProvider>
        </div>
    );
}