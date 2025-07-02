import React from 'react';
import iconDown from '../assets/images/icon-down.svg';
import iconUp from '../assets/images/icon-up.svg';

const OverviewCard = ({key, icon, metric, count, trend, trendCount}) => {
  return (
    <div className="bg-gray-200 dark:bg-slate-900 h-30 rounded-lg cursor-pointer shadow-lg">
      <div className="flex flex-row justify-between items-center p-4">
        <h3 className="text-gray-500 font-bold">{metric}</h3>
        <img src={icon} alt="icon" className="mr-4"/>
      </div>
      <div className="flex flex-row justify-between items-center p-4">
        <h2 className="text-3xl font-bold items-center dark:text-white">{count}</h2>
        <div className="flex flex-row justify-end mr-4 gap-2">
          <img src={trend === "up" ? iconUp : iconDown} alt="trend" className="h-2 w-3 m-2" />
          <p className={`${trend === "up" ? 'text-green-500' : 'text-red-600'} font-bold text-l`}>{trendCount}</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard