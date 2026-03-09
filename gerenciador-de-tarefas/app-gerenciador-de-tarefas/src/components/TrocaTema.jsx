import { useTheme } from "./ThemeContext";

function TrocaTema() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <button onClick={toggleTheme} className="luz">
      {theme === "light" ? "☀️" : "🌙"}
    </button>
    </>
    
  );
}

export default TrocaTema;