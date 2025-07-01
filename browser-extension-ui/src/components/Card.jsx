import React, { useState } from 'react';

const Card = ({extension: {id, logo, name, description }, isActive, theme, onToggle}) => {
  return (
    <div className="dark:bg-gray-800 bg-white p-4 rounded-2xl h-40 shadow-inner">
      <div className="flex flex-row content-around justify-between items-start">
        <img src={logo} />
        <div className="ml-3">
          <h1 className="dark:text-white font-bold text-xl">{name}</h1>
          <p className="dark:text-white font-thin text-gray-500 text-xs">{description}</p>
        </div>
      </div>
      <div className="flex flex-row h-15 content-around justify-between items-end-safe">
        <button className="dark:text-white dark:border-gray-300 border border-solid border-gray-800 rounded-full w-20 pt-1 pb-1 font-thin cursor-pointer">
          Remove
        </button>
        <label className="relative inline-block w-9 h-[18px]">
          <input
            type="checkbox"
            checked={isActive}
            onChange={onToggle}
            className="peer sr-only"
          />
          <span
            className="
              absolute inset-0 
              rounded-full 
              bg-gray-300
              transition-colors duration-100 ease-out 
              peer-checked:bg-red-700

              before:content-[''] 
              before:absolute 
              before:w-[12px] before:h-[12px] 
              before:left-[3px] before:bottom-[3px] 
              before:rounded-full 
              before:bg-white 
              before:border before:border-gray-800
              before:transition-transform before:duration-100 
              peer-checked:before:translate-x-[18px] 
              peer-checked:before:bg-white
            "
          />
        </label>
      </div>
    </div>
  )
}

export default Card