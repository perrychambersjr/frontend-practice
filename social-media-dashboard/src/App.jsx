import { createContext, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import FollowerList from './components/FollowerList'
import Header from './components/Header'
import OverviewList from './components/OverviewList'
import './index.css'
import viteLogo from '/vite.svg'

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark'? 'light' : 'dark');
  }

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} && "dark" | "light" font-normal bg-white dark:bg-gray-900 `}>
        <div className="max-w-screen-xl mx-auto">
          <main>
            <Header setTheme={setTheme} theme={theme}/>
            <FollowerList />
            <OverviewList />
          </main>
        </div>
      </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
