import React from 'react';

const FilterTabs = ({ onFilterChange, currentFilter, theme }) => {
  return (
    <div className="py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-transparent">
      <h1 className="font-bold text-xl text-gray-900 dark:text-white">
        Extensions List
      </h1>
      <div className="flex flex-wrap space-x-0 md:space-x-2 gap-2">
        {['all', 'active', 'inactive'].map((tab) => {
          const isActive = currentFilter === tab;
          const baseClasses =
            'border border-gray-300 dark:border-gray-500 rounded-full px-4 py-2 transition-colors duration-150';
          const activeClasses = 'bg-red-700 text-white dark:bg-red-600';
          const inactiveClasses =
            'bg-transparent text-gray-800 dark:text-white hover:bg-red-700 hover:text-white hover:border-transparent';

          return (
            <button
              key={tab}
              onClick={() => onFilterChange(tab)}
              className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default FilterTabs