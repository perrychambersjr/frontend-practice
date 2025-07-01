import React from 'react';
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
//import Logo from '../assets/images/logo.svg'
import Logo from './Logo';

const Header = ({themeHandler, theme}) => {
  return (
    // <div className="flex justify-between p-3 rounded-xl bg-card bg-white shadow-sm mb-8">
    //     <img src={Logo} alt="logo" className="w-40 h-5" />
    //     <button className="cursor-pointer bg-gray-200 hover:bg-gray-400
    //     py-1 px-1 rounded inline-flex items-center">
    //         <img src={Moon} alt="moon" className="fill-current w-4 h-4"/>
    //     </button>
    // </div>

    <div>
        <header className="dark:bg-gray-800 dark:text-white bg-white max-w-[90rem] rounded-[1.25rem] px-4 py-3">
            <nav className="flex items-center justify-between">
                <Logo color={theme === 'dark' ? '#FFFFFF' : '#091540'}/>
                {/* <img src={Logo} alt="logo" /> */}
                <button onClick={themeHandler} 
                className="cursor-pointer bg-gray-200 dark:bg-gray-700 hover:bg-gray-400
                    py-1 px-1 rounded inline-flex items-center">
                <img src={theme === "dark" ? Sun : Moon} alt="moon" className="fill-current w-6 h-6"/>
            </button>
            </nav>
        </header>
    </div>

  )
}

export default Header