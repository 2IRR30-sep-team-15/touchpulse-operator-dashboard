import { Input } from '@/components/ui/input';

export default function SearchBar({
  setSearchQuery,
}: {
  setSearchQuery: (v: string) => void;
}) {
  return (
    <Input
      placeholder="Search profiles..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="mb-4"
    />
  );
}
