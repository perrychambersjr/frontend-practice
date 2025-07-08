import React from 'react'
import { MortgageContextProvider } from '../context/MortgageContext'
import Card from './Card'

const Layout = () => {
  return (
   <>
    <MortgageContextProvider>
        <Card />
    </MortgageContextProvider>
   </>
  )
}

export default Layout