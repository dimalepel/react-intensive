import { createContext } from "react";

export interface UserContextProps {
    userId: number | null,
    setUserId: (userId: number) => void
}

export const UserContext = createContext<UserContextProps>({
    userId: null,
    setUserId: () => {}
})