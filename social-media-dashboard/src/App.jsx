import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FollowerList from './components/FollowerList'
import Header from './components/Header'
import OverviewList from './components/OverviewList'
import './index.css'
import viteLogo from '/vite.svg'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark'? 'light' : 'dark');
  }

  return (
    <>
      <div className="font-normal">
        <p>{theme}</p>
        <div className="max-w-screen-xl mx-auto">
          <main>
            <Header setTheme={setTheme} theme={theme}/>
            <FollowerList />
            <OverviewList />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
