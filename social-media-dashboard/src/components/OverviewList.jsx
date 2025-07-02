import React from 'react'
import Overview from '../data/Overview'
import OverviewCard from './OverviewCard'

const OverviewList = () => {
  return (
    <div classname="mt-6">
      <h3 className="dark:text-white font-bold tracking-widest text-2xl">Overview - Today</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {Overview.map((data, index) => (
          <OverviewCard
            key={data.index}
            icon={data.icon}
            metric={data.metric}
            count={data.count}
            trend={data.trend}
            trendCount={data.trendCount}
          />
        ))}
      </div>
    </div>
  )
}

export default OverviewList