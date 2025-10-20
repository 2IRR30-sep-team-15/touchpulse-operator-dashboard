import { createContext, FC, ReactNode, useState } from "react";
import { SelectUserContextType } from "@/lib/types/map";
import { useUsers } from "@/components/sidebar/users/index.hooks";

export const SelectUserContext = createContext<SelectUserContextType | null>(null);

const SelectUserProvider: FC<{children: ReactNode}> = ({ children }) => {
    const { users } = useUsers();

    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

    return <SelectUserContext value = {{ users, selectedUser, setSelectedUser }}>{children}</SelectUserContext>
}

export default SelectUserProvider;