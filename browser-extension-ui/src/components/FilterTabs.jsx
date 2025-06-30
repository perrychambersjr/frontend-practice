import React from 'react'

const FilterTabs = () => {
  return (
    <div className="py-8 flex flex-row justify-between">
        <h1 className="font-bold text-xl">Extensions List</h1>
        <div className="flex flex-row justify-between">
            <button className=
            "border-2 border-gray-300 bg-white hover:bg-red-700 hover:text-white hover:border-none px-4 py-2 rounded-full mr-2">All</button>
            <button className=
            "border-2 border-gray-300 bg-white hover:bg-red-700 hover:text-white hover:border-none px-4 py-2 rounded-full mr-2">Active</button>
            <button className=
            "border-2 border-gray-300 bg-white hover:bg-red-700 hover:text-white hover:border-none px-4 py-2 rounded-full">Inactive</button>
        </div>
    </div>
  )
}

export default FilterTabs