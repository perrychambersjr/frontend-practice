import React from 'react';

const Header = ({setTheme, theme}) => {
  const handleToggle = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  }

  return (
    <header className="pt-4 md:flex md:flex-row items-center justify-between mb-4">
        <div className="pb-3 border-b-2 md:pb-0 md:border-none">
            <h1 className="font-bold text-xl">Social Media Dashboard</h1>
            <p className="pl-0">Total Followers: 23,004</p>
        </div>

        {/* Theme switch */}
        <div className="py-3 flex items-center justify-between md:py-0 md:space-x-2">
            <p className="font-bold">Dark mode</p>
            <label className="theme-switch">
                <input type="checkbox" id="theme-toggle" onChange={handleToggle} checked={theme === 'dark'}/>
                <span className="slider"></span>
            </label>
        </div>
    </header>
  )
}

export default Header