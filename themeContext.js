import React, { useContext, useState } from 'react'
const themeContext = React.createContext()

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


    return (
        <ThemeContext.Provider value={darkTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
