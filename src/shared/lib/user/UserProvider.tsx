import { useState, useMemo} from 'react';
import { UserContext } from "./UserContext.ts";

interface UserProviderProps {
    children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userId] = useState(() => Math.floor(Math.random() * 10) + 1);

    const value = useMemo(() => ({ userId, setUserId: () => {} }), [userId]);

    return(
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}