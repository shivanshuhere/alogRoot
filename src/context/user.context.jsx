import { createContext } from "react";

export const userContext = createContext(null);

const UserContextProvier = ({ children }) => {
    const user = {
        name: "",
        email: "",
        authenticated: false,
    };
    return (
        <>
            <userContext.Provider value={user}>{children}</userContext.Provider>
        </>
    );
};

export default UserContextProvier;
