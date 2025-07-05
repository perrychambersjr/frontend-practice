import NumberFlow from '@number-flow/react';
import React from 'react';

const StatCard = ({ background, text, value, color }) => {
  return (
    <div>
        <div className={`flex flex-row justify-center rounded-lg ${color}`}>
            <div className="flex flex-col justify-center items-start px-4 h-40 w-60">
                <NumberFlow value={value} className="font-semibold text-6xl will-change-scroll"/>
                <p className="text-xl pt-4">{text}</p>
            </div>
            <img src={background} alt="" className="" />
        </div>
    </div>
  )
}

export default StatCard


