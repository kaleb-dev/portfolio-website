import React, { useState, useLayoutEffect, useContext } from "react";

const ThemeContext = React.createContext(null);

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light"
  );

  useLayoutEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    console.log("The theme is " + theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
