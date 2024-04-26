import { useEffect, useState } from 'react';
import { PiMoonStarsDuotone ,PiSunDimDuotone } from 'react-icons/pi';

export default function ThemeToggler() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      {theme === 'light' ? <PiSunDimDuotone size="2rem" /> : <PiMoonStarsDuotone size="2rem" />}
    </button>
  );
}
