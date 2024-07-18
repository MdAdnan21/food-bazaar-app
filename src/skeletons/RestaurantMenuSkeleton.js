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
          <div key={index} className=" w-10/12 tablet:8/12 desktop:w-7/12 mx-auto flex flex-col my-5">
            <div className="mb-5 h-12 bg-gray-300  shimmer rounded-lg"></div>
            <div className="flex flex-wrap lg:flex-nowrap shadow-lg my-5">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="w-full lg:w-1/4 p-5">
                  <div className="px-2 py-3 mx-3 border-gray-300 border-b flex flex-wrap justify-center">
                    <div className="mobile:w-9/12 flex flex-col justify-between h-full">
                        <div className="flex items-center">
                        <div className="py-2 text-md font-semibold w-2/4 h-6 shimmer bg-gray-300 rounded"></div>
                        </div>
                        <div className="font-medium w-1/6 h-6 shimmer bg-gray-300 rounded my-2"></div>
                        <div>
                            <div className="text-sm text-gray-500 py-3 w-full h-5 shimmer bg-gray-300 rounded"></div>
                            <div className="text-sm text-gray-500 pb-3 w-full h-5 shimmer bg-gray-300 rounded"></div>
                        </div>
                    </div>
                    <div className="mobile:w-3/12 relative flex items-end justify-center">
                        <div className="absolute my-3">
                        <div className="flex items-center bg-white shadow-lg rounded-lg font-semibold text-md text-green-600">
                            <div className="py-1 px-7 shimmer bg-gray-300 rounded-lg"></div>
                        </div>
                        </div>
                        <div className="w-40 h-40">
                        <div className="w-full h-full shimmer rounded-lg bg-gray-300"></div>
                        </div>
                    </div>
                    </div>
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