import { useTheme } from "../context/ThemeContext";
import './navbar.css'

const Navbar = () => {
    const { theme } = useTheme();
    return (
        <nav className={`navbar ${theme}`}>
            <h1>React Context API</h1>
        </nav>
    );
};

export default Navbar;