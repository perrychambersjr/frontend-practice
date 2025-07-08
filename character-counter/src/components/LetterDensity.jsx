import React, { useState } from 'react';
import { useTextContext } from '../context/TextContext';

const LetterDensity = () => {
  const { letterStats } = useTextContext();
  const [showAll, setShowAll] = useState(false);

  if (!letterStats || letterStats.length === 0) return <p className="dark:text-white">No letters found</p>;

  const lettersToShow = showAll ? letterStats : letterStats.slice(0, 5);

  return (
    <div className="space-y-2">
    <h1 className="text-3xl font-semibold dark:text-white">Letter Density</h1>
      {lettersToShow.map(({ letter, count, percentage }) => (
        <div key={letter} className="flex items-center space-x-3">
          <span className="w-6 text-lg dark:text-white">{letter.toUpperCase()}</span>
          <div className="flex-1 bg-gray-200 rounded overflow-hidden h-4">
            <div
              className="bg-purple-400 h-4 transition-width duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="w-20 text-right dark:text-white">
            {count} ({percentage.toFixed(2)}%)
          </span>
        </div>
      ))}

      {letterStats.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 dark:text-white hover:underline"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  );
};

export default LetterDensity;