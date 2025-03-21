import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-800 bg-gray-200 rounded-full cursor-pointer dark:bg-gray-700 dark:text-gray-200"
            aria-label="Toggle dark mode"
        >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    );
};
export default DarkModeToggle;
