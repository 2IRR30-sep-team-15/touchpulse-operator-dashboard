import { createContext, FC, ReactNode, useState } from "react";
import { SelectUserContextType } from "@/lib/types/map";
import { PROFILES_DATA } from "@/lib/data/profiles-data";
import { Profile } from "@/lib/interfaces/profile";

export const SelectUserContext = createContext<SelectUserContextType | null>(null);

const users = PROFILES_DATA;

const SelectUserProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState<Profile | undefined>(undefined);

    return <SelectUserContext value = {{ users, selectedUser, setSelectedUser }}>{children}</SelectUserContext>
}

export default SelectUserProvider;