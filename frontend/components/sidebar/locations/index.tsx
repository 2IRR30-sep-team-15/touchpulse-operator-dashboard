import React from 'react';
import { MapPin, Minus, Dot, ArrowRight, BookMarked, Car } from 'lucide-react';

// Custom components to handle the dark input styling and structure shown in the image
const DarkInput = ({
  placeholder,
  icon,
}: {
  placeholder: string;
  icon?: React.ReactNode;
}) => (
  <div className="flex items-center w-full h-12 bg-gray-900 rounded-lg text-white px-4">
    {icon && <span className="mr-3 text-gray-400">{icon}</span>}
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent w-full text-base placeholder-gray-500 focus:outline-none"
      readOnly // Static for now as requested
    />
  </div>
);

export default function LocationsTab({ profile }: { profile: Profile }) {
  const savedLocations = profile.locations;

  // We'll use the profile's name and a fictional route name for placeholders
  const defaultRouteName = `${profile.name}'s Typical Route`;

  return (
    <div className="flex flex-col h-full p-4 space-y-6 overflow-y-auto dark:text-white">
      {/* 1. Route Planning Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-500">Route name</h2>

        {/* Route Name Input */}
        <DarkInput
          placeholder={defaultRouteName}
          icon={<Car className="w-5 h-5" />}
        />

        {/* Route Start/End Addresses */}
        <div className="flex flex-col space-y-2 pl-4 border-l border-gray-700/50">
          {/* Start Address */}
          <div className="flex items-start">
            <div className="w-4 h-4 mt-4 mr-3 text-gray-500">
              {/* Placeholder Icon for Start (mimicking the radio/dot visual) */}
              <Dot className="w-4 h-4 fill-current" />
            </div>
            <DarkInput placeholder="Start address (Current Location)" />
          </div>

          {/* Connecting Dots/Line */}
          <div className="pl-4 h-6 flex items-center justify-start text-gray-500">
            <Minus className="w-4 h-4 rotate-90 opacity-50" />
          </div>

          {/* End Address */}
          <div className="flex items-start">
            <div className="w-4 h-4 mt-1 mr-3 text-orange-500">
              <MapPin className="w-4 h-4 fill-current" />
            </div>
            <DarkInput placeholder="End address (Destination)" />
          </div>
        </div>
      </section>

      {/* --- Separator --- */}
      <div className="w-full border-t border-gray-700/50 pt-4"></div>

      {/* 2. Saved Address Book Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-500">
          Saved address book
        </h2>

        {savedLocations?.length === 0 ? (
          <p className="text-gray-500 italic pt-2">
            No saved locations found for this user.
          </p>
        ) : (
          <div className="space-y-4">
            {savedLocations?.map((location, index) => (
              <div key={index} className="flex flex-col">
                <p className="font-bold text-lg">{location.name}</p>
                <p className="text-sm text-gray-400">{location.address}</p>
                {/* Horizontal Line Separator, mimicking the visual style */}
                {index < savedLocations.length - 1 && (
                  <div className="w-full border-b border-gray-700/50 mt-4"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
