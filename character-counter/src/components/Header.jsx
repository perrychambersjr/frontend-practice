import React from 'react';
import IconMoon from '../assets/images/icon-moon.svg';
import IconSum from '../assets/images/icon-sun.svg';
import LogoLight from '../assets/images/logo-light-theme.svg';

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
        <img src={LogoLight} alt="icon" />
        <button>
            <img src={IconMoon} alt="darkmode toggle" />
        </button>
    </div>
  )
}

export default Header