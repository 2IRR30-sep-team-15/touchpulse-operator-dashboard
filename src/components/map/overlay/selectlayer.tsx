import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from "@/components/ui/select";
import { useContext } from "react";
import { StyleContext } from "@/context/StyleContext";
import { StyleContextType } from "@/lib/types/map";

export default function SelectLayer() {
    const { selectedStyle, setSelectedStyle } = useContext(StyleContext) as StyleContextType;
    return (
        <Select value={selectedStyle} onValueChange={(value) => setSelectedStyle(value as any)}>
            <SelectTrigger className="bg-white w-full">
            <SelectValue placeholder="Select a layer" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="satellite">Satellite</SelectItem>
            </SelectGroup>
            </SelectContent>
        </Select>
    );
}