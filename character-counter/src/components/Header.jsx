import React, { useContext } from 'react';
import IconMoon from '../assets/images/icon-moon.svg';
import IconSun from '../assets/images/icon-sun.svg';
import LogoDark from '../assets/images/logo-dark-theme.svg';
import LogoLight from '../assets/images/logo-light-theme.svg';
import { themeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div className="flex flex-row justify-between">
        <img src={`${theme === "light" ? LogoLight : LogoDark}`} alt="icon" />
        <button className="bg-gray-300 w-10 h-10 pl-2.5 rounded-xl">
            <img src={theme === "light" ? IconMoon : IconSun} alt="darkmode toggle" className="cursor-pointer dark:text-black" onClick={toggleTheme} />
        </button>
    </div>
  )
}

export default Header