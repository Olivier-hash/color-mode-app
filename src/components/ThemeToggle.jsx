import { useTheme } from "../context/ThemeContext";
import './themeToggle.css';

const Themetoggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button className={`theme-toggle ${theme}`}  onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

export default Themetoggle;

