import React, { useContext } from 'react';
import { useTextContext } from '../context/TextContext';

const Filters = () => {
  const { toggleExcludeSpaces, excludeSpaces, toggleCharLimit, useCharLimit, setCharLimit, charLimit, approxReadingTime } = useTextContext();

  const handleChange = (e) => {
    const val = Number(e.target.value);
    if(!isNaN(val))
      setCharLimit(val);
  }
  
  return (
    <div className="flex flex-row justify-between mt-4">
      <div>
        <input type="checkbox" className="w-4 h-4 mx-2 text-purple-400 accent-purple-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={toggleExcludeSpaces} checked={excludeSpaces}/>
        <label className="dark:text-white text-lg font-semibold" htmlFor="excludeSpaces">Exclude Spaces</label>
      </div>
      <div>
        <input type="checkbox" className="w-4 h-4 mx-2 text-purple-400 accent-purple-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={toggleCharLimit} checked={useCharLimit} />
        <label className="dark:text-white text-lg font-semibold" htmlFor="charLimit">Set Character Limit</label>
        <input
          type="text"
          id="numCharLimit"
            className={`dark:text-white border border-gray-500 rounded-lg mx-2 px-2 py-1 transition-all duration-500 ease-in-out transform w-20
            ${useCharLimit
              ? 'opacity-100 scale-100 max-h-20'
              : 'opacity-0 scale-95 max-h-0 pointer-events-none overflow-hidden'}
          `}
          value={charLimit}
          onChange={handleChange}
          min={0}
        />

      </div>
        <p className="dark:text-white">Approx. Reading Time <span>{approxReadingTime}</span> minute</p>
    </div>
  )
}

export default Filters