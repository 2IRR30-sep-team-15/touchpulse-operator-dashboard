import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
    return (
        <div className="flex w-full max-w-sm items-center gap-2">
            <Input className="bg-white" type="email" placeholder="Search address here..." />
            <Button type="submit" variant="outline">
                Search
            </Button>
        </div>
    );
}