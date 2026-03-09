import { createContext, useContext, useState } from "react";

// Cria o contexto
const ThemeContext = createContext();

// Hook personalizado
export function useTheme() {
  return useContext(ThemeContext);
}

// Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  console.log("ThemeProvider renderizado, tema:", theme)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const styles = {
    light: {
      backgroundColor: "#f5f5f5",
      color: "#222",
      minHeight: "100vh",
      transition: "all 0.3s ease"
    },
    dark: {
      backgroundColor: "#1e1e1e",
      color: "#f5f5f5",
      minHeight: "100vh",
      transition: "all 0.3s ease"
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={styles[theme]}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}