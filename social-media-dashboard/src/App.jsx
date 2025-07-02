import { useState } from 'react'
import FollowerList from './components/FollowerList'
import Header from './components/Header'
import OverviewList from './components/OverviewList'
import './index.css'

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className=" bg-white dark:bg-gray-800 min-h-screen font-normal transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto">
          <main>
            <Header setTheme={setTheme} theme={theme} />
            <FollowerList />
            <OverviewList />
          </main>
        </div>
      </div>
    </div>
    </>
  )
}

export default App 
