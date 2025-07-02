import { useState } from 'react'
import BgDark from './assets/images/bg-dark-theme.png'
import BgLight from './assets/images/bg-light-theme.png'
import Header from './components/Header'
import TextArea from './components/TextArea'
import './index.css'

function App() {

  return (
    <>
    <div style={{ backgroundImage: `url(${BgLight})` }}>
      <div className="bg-cover bg-center min-h-screen font-normal ml-30 mr-30 mt-5">
        <Header />
        <main>
          <h1 className="mr-60 ml-60 text-6xl font-semibold text-center">Analyze your text in real-time.</h1>

          <TextArea />
        </main>
      </div>
    </div>
    </>
  )
}

export default App
