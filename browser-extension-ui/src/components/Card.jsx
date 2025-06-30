import React, { useState } from 'react';

const Card = ({extension: {id, logo, name, description, isActive}}) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleActive = () => {
        setIsChecked(!isChecked)
    }

  return (
    <div className="bg-white p-4 rounded-2xl h-40 shadow-inner">
        <div className=" flex flex-row content-around justify-between items-start">
            <img src={logo}/>
            <div className="ml-3">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="font-thin text-gray-500 text-xs">{description}</p>
            </div>
        </div>
        <div className="flex flex-row h-15 content-around justify-between items-end-safe">
        <button className="border border-solid border-gray-800 rounded-full w-20 pt-1 pb-1 font-thin">
            Remove
        </button>
              {/* <button
                onClick={() => toggleActive(id)}
                className={`relative w-10 h-4 flex items-center rounded-full p-1 transition-colors ${isActive ? "bg-red-500" : "bg-gray-500"}`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${isActive ? "translate-x-6" : "translate-x-0 cursor-pointer" }`}
                />
            </button> */}
        </div>
    </div>
  )
}

export default Card