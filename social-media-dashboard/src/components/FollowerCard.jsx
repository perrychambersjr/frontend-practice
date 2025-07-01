import React from 'react';
import iconDown from '../assets/images/icon-down.svg';
import iconUp from '../assets/images/icon-up.svg';

const FollowerCard = ({index, icon, name, followers, title, trend, trendCount, color}) => {
  const isGradient = color.startsWith("linear-gradient");

  return (
    <div className={`${isGradient ? "" : "border-t-4"} rounded-lg overflow-hidden shadow-lg cursor-pointer`}
      style={isGradient ? {borderTop: `4px solid transparent`, borderImage: `${color} 1`}
      : {borderTopColor: color }
    }>
      <div className="bg-gray-200 h-50 rounded flex flex-col justify-center items-center">
          <div className="flex items-center mb-4 gap-3">
            <img src={icon} alt="icon" className="h-4 w-4"/>
            <p className="font-bold text-l">{name}</p>
          </div>
          <h2 className="font-bold text-5xl mb-2">{followers}</h2>
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">{title}</p>
          <div className="flex flex-row justify-center gap-2">
            <img src={trend === "up" ? iconUp : iconDown} alt="trend" className="h-2 w-3 m-2"/>
            <p className={`${trend === "up" ? 'text-green-500' : 'text-red-600'} font-bold text-l`}>{trendCount} Today</p>
          </div>
      </div>
    </div>

  )
}

export default FollowerCard