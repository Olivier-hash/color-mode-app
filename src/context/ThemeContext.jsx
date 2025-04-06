// in the summary of createContext create new context objects 
//Making global storage(like a box) for your app's shared data

import React,{createContext, useContext, useEffect, useState} from "react";

//createContext is a function that creates a context object.

const ThemeContext = createContext();

//Theme provider is a component that provides the theme context to its children.

  const ThemeProvider = ({children}) =>{
  const [theme, setTheme] = useState("light");

  // function to toggle between light and dark themes
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

 return (
    <ThemeContext.Provider value={{theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
 );
};

//useContext is a hook that allows you to access the context value in your components

 const useTheme = () => useContext(ThemeContext);

 export { ThemeProvider, useTheme};