import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: SearchBarProps) {
  return (
    <Input
      placeholder="Search users..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="focus-visible:ring-0 w-full"
    />
  );
}
