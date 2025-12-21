import {useState, useMemo, type PropsWithChildren} from 'react';
import { UserContext } from "./UserContext.ts";

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [userId] = useState(() => Math.floor(Math.random() * 10) + 1);

    const value = useMemo(() => ({ userId, setUserId: () => {} }), [userId]);

    return(
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}