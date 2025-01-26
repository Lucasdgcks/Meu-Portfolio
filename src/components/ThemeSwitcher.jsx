import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.body.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button id='theme-toggle' onClick={toggleTheme} className="theme-switcher">
      {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default ThemeSwitcher;
