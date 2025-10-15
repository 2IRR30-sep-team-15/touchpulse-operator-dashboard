import { Input } from "../../ui/input";

export default function SearchBar({
        query,
        setQuery,
    }: {
        query: string;
        setQuery: (v: string) => void;
    }) {
    return (
        <Input
        placeholder="Search profiles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4"
        />
    );
}
