import React, { useState, useContext, createContext, useEffect } from 'react'

const initialState = {
  isDark: false,
  setIsDark: () => {}
}

const ThemeContext = createContext(initialState)

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  )
}

const useDarkMode = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)

    useEffect(() => {
    const className = 'dark'
    if (isDark) {
      window.document.body.classList.add(className)
    } else {
      window.document.body.classList.remove(className)
    }
  }, [isDark])

  return [isDark, setIsDark]
  
}

export default useDarkMode