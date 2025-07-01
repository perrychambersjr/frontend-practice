import { useState } from 'react'
import CardList from './components/CardList'
import FilterTabs from './components/FilterTabs'
import Header from './components/Header'
import './index.css'

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark'? 'light' : 'dark');
  }

  return (
    // dark:bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] dark:from-[#040918] dark:to-[#091540]
    <div className={`${theme} && "dark" | "light"`}>
      <div className="min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540]">
        <div className=" mx-auto pt-8 pb-8 px-4 sm:px-8 md:px-20 lg:px-30">
          <Header themeHandler={toggleTheme} theme={theme}/>
          <main className="">
            <CardList theme={theme}/>
          </main>
        </div>
      </div>
    </div>

  )
}

export default App
