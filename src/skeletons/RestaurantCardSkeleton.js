
import React from 'react'

const RestaurantCardSkeleton = () => {
  return (
    <div className="">
       <div className="flex w-1/3 h-10 shimmer flex-shrink-0 rounded-lg my-5 bg-gray-300"></div>
        <div className='flex flex-wrap'>
          {Array.from({ length: 8 }).map((_, index) => (
              // <div key={index} className="w-40 h-40 bg-gray-300 m-5 rounded-lg shimmer flex-shrink-0"></div>
              <div key={index} className="flex flex-col my-2 w-80 rounded-lg">
                <div className="h-32 bg-gray-300 my-3 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                <div className="flex">
                    <div className="w-3/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                    <div className="w-6/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                </div>
                <div className="h-5 bg-gray-300 my-2 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                <div className="flex justify-between">
                  <div className="w-4/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                  <div className="w-4/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                </div>
              </div>
          ))}
        </div>
      </div>
  )
}

export default RestaurantCardSkeleton