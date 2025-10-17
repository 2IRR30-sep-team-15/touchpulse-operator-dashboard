'use client';

import MapOverlay from "@/components/map/overlay/mapoverlay";
import StyleProvider from "@/context/StyleContext";
import Map from "@/components/map/maplibre/map"

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