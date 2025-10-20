import SelectLayer from '@/components/map/overlay/selectlayer';
import SearchBar from '@/components/map/overlay/searchbar';

export default function MapOverlay() {
  return (
    <>
      <div className="absolute bottom-12 right-4">
        <SelectLayer />
      </div>

      <div className="absolute top-4 left-4">
        <SearchBar />
      </div>
    </>
  );
}
