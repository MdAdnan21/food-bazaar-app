import React from 'react';

const RestaurantMenuSkeleton = () => {
  return (
    <div className="text-center mt-[3%] mb-[5%] mx-[5%]">
      <div className="my-3 p-5 flex flex-wrap justify-between w-10/12 tablet:8/12 desktop:w-7/12 mx-auto shadow-lg rounded-lg">
        <div className="m-5 text-left flex flex-col w-1/2">
          <div className="w-3/4 h-10 shimmer flex-shrink-0 rounded-lg my-3 bg-gray-300"></div>
          <div className="mt-1 mb-2 pt-[1px] pb-[2px] px-[6px] w-16 h-10 shimmer flex-shrink-0 rounded-lg bg-gray-300"></div>
          <div className="w-3/4 h-5 bg-gray-300 my-2 shimmer flex-shrink-0 rounded-lg mb-3"></div>
          <div className="w-3/4 h-5 bg-gray-300 my-2 shimmer flex-shrink-0 rounded-lg mb-3"></div>
          <div className="w-3/4 h-5 bg-gray-300 my-2 shimmer flex-shrink-0 rounded-lg mb-3"></div>
        </div>
        <div className="m-5 w-56 h-56">
          <div className="w-full h-full object-cover rounded-lg shimmer bg-gray-300"></div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className=" w-10/12 tablet:8/12 desktop:w-7/12 mx-auto flex flex-col p-5">
            <div className="mb-5 h-10 bg-gray-300  shimmer rounded-lg"></div>
            <div className="flex flex-wrap lg:flex-nowrap">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="w-full lg:w-1/4 p-2">
                  <div className="h-40 bg-gray-300 shimmer rounded-lg mb-2"></div>
                  <div className='h-1 my-5 bg-gray-300 shimmer'></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuSkeleton;