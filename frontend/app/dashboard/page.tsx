"use client";
import Sidebar from "@/app/dashboard/sidebar/sidebar";
import Map from "@/app/dashboard/map/map";
import SelectUserProvider from "@/context/SelectUserContext"
import MapControllerProvider from "@/context/MapControllerContext";


export default function Home() {

  return (
    <div className="flex min-h-screen w-screen">
      <SelectUserProvider>
        <MapControllerProvider>
          {/* Sidebar takes 1/4 of the width */}
          <div className="w-1/4">
            <Sidebar />
          </div>

          {/* Map takes the remaining 3/4 */}
          <div className="w-3/4">
            <Map />
          </div>
        </MapControllerProvider>
      </SelectUserProvider>
    </div>
  );
}
