import React from 'react'
import OverviewCard from './OverviewCard'

const OverviewList = () => {
  return (
    <div>
      <h3>Overview - Today</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard />
      </div>
    </div>
  )
}

export default OverviewList