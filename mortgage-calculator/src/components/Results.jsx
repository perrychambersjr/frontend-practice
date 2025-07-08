import React from 'react';
import { useMortgageContext } from '../context/MortgageContext';

const Results = () => {
    const { results } = useMortgageContext();

  return (
    <div>Results</div>
  )
}

export default Results