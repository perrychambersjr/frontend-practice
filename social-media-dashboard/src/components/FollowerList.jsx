import React from 'react';
import Followers from '../data/Followers';
import FollowerCard from './FollowerCard';

const FollowerList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
      {Followers.map((follower, index) => (
          <FollowerCard 
                key={index}
                icon={follower.icon}
                name={follower.name}
                followers={follower.followers}
                title={follower.title}
                trend={follower.trend}
                trendCount={follower.trendCount}
                color={follower.color}
            />
        ))}
    </div>
  )
}

export default FollowerList