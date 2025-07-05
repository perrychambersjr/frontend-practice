import { createContext, useState } from "react";

export const themeContext = createContext("light");

// children defines components that will be wrapped in the provider
export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }
    
    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
}