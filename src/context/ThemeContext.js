import React, {useState, useContext, useEffect} from "react";
import Head from "next/head";
const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({children}) => {
  const defaultTheme = {
    background1: "#DDEEED",
    background2: "#FDF1E0",
    botBg: "#f5f5f5",
    botColor: "#000",
    userBg: "#4B7E8E",
    userColor: "#fff",
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        setTheme(JSON.parse(localTheme));
      }
    }
  } , [])
  
  const [theme, setTheme] = useState(defaultTheme);
  const changeTheme = (changedTheme) => {
    setTheme(changedTheme);
  }
  const saveTheme = () => {
    if(localStorage.getItem('theme') != theme){
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  }
  const reset = () => {
    setTheme(defaultTheme);
    localStorage.setItem('theme', JSON.stringify(defaultTheme));
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme, saveTheme, reset }}>
      <Head>
        <style>
          {`
              body {
                background: linear-gradient(239.26deg, ${theme.background1} 63.17%, ${theme.background2} 94.92%);
              }
          `}
        </style>
      </Head>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
