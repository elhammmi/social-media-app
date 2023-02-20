import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        setCurrentUser({
            id:1,
            name:"John Doe",
            profilePic:"https://images.pexels.com/photos/4972601/pexels-photo-4972601.jpeg?auto=compress&cs=tinysrgb&w=1600"
        });
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
}

