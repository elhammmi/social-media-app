import { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    const toggle = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode]);

    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
}

