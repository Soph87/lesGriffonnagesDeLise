import React from "react";
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [colorMode, rawSetColorMode] = React.useState(undefined);

    React.useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
        rawSetColorMode(initialColorValue);
    }, []);

    const setColorMode = (newValue) => {
        //Mise à jour du state
        rawSetColorMode(newValue);

        //Mise à jour du local storage
        localStorage.setItem("color-mode", newValue);

        //Mise à jour du CSS
        document.body.classList.remove(newValue === "dark" ? "light" : "dark");
        document.body.classList.add(newValue === "dark" ? "dark" : "light");
    };

    return <ThemeContext.Provider value={{ colorMode, setColorMode }}>{children}</ThemeContext.Provider>;
};
