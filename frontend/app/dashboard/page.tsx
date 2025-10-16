'use client';

import Sidebar from '@/components/sidebar';
import Map from '@/components/map';

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen">
      {/* Sidebar takes 1/4 of the width */}
      <div className="w-1/4">
        <Sidebar />
      </div>

      {/* Map takes the remaining 3/4 */}
      <div className="w-3/4">
        <Map />
      </div>
    </div>
  );
}
