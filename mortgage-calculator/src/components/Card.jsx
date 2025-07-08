import React from 'react'
import CalculatorForm from './CalculatorForm'
import Results from './Results'

const Card = () => {
  return (
    <div className="flex justify-center align-center border-1 border-gray-800">
        <div className="flex flex-row justify-center">
            <CalculatorForm />
            <Results />
        </div>
    </div>
)}

export default Card