import { createContext } from "react";
import { useState } from "react";
export const userContext = createContext(null);

const UserContextProvier = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        authenticated: false,
    });
    const saveToLocalStorage = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    };
    const handleSetUser = (user) => {
        setUser(user);
        saveToLocalStorage(user);
    }
    return (
        <>
            <userContext.Provider value={{ user, setUser: handleSetUser }}>{children}</userContext.Provider>
        </>
    );
};

export default UserContextProvier;
