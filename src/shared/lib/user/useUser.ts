import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("user not found");
    }

    return context;
};