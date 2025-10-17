import { createContext, FC, ReactNode, useState } from "react";
import { SelectUserContextType } from "@/lib/types/map";
import { users } from "@/lib/data/users";

export const SelectUserContext = createContext<SelectUserContextType | null>(null);

const SelectUserProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined);

    return <SelectUserContext value = {{ users, selectedUser, setSelectedUser }}>{children}</SelectUserContext>
}

export default SelectUserProvider;