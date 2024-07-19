import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const ligthTheme = {
  background: "#fff",
  background01: "#71B7FB",
  background02: "#1e1d84",
  color: "#151516",
  color01: "#fff",
};

export const darkTheme = {
  background: "#151516",
  background01: "#1e1d84",
  background02: "#71B7FB",
  color: "#fff",
  color01: "#000",
};

const ThemeContext = createContext({
  theme: ligthTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(ligthTheme);

  const toggleTheme = () => {
    setTheme(theme === ligthTheme ? darkTheme : ligthTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
