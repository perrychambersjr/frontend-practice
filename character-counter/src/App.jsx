import { useContext, useState } from 'react'

import Header from './components/Header'
import Layout from './components/Layout'
import TextArea from './components/TextArea'
import { themeContext, ThemeContextProvider } from './context/ThemeContext'
import './index.css'

function App() {
  const { theme } = useContext(themeContext);

  return (
    <>
    <ThemeContextProvider>
      <Layout />
    </ThemeContextProvider>
    </>
  )
}

export default App
