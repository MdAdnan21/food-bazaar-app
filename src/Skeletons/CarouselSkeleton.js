import React from "react";

const CarouselSkeleton = ({type}) => {
  return (
    <div className="my-2 mr-[4%] overflow-x-scroll no-scrollbar">
      <div className="flex justify-between">
        <div className="flex w-1/3 flex-row h-10 shimmer flex-shrink-0 rounded-lg my-5 bg-gray-300"></div>
        <div className="flex items-center">
            <div className="w-12 h-12 rounded-full shimmer flex-shrink-0 bg-gray-300 mx-3"></div>
            <div className="w-12 h-12 rounded-full shimmer flex-shrink-0 bg-gray-300"></div>
        </div>
      </div> 
      <div className="flex">
        {Array.from({ length: 20 }).map((_, index) => (
            // <div key={index} className="w-40 h-40 bg-gray-300 m-5 rounded-lg shimmer flex-shrink-0"></div>
            <div  key={index} className="">
            {type === 'Dish' ? (
              <div className="w-40 h-40 bg-gray-300 m-5 rounded-full shimmer flex-shrink-0"></div>
            ) : (
              <div className="flex flex-col mx-5 w-72 rounded-lg">
                <div className="h-32 bg-gray-300 my-3 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                <div className="flex justify-between">
                    <div className="w-3/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                    <div className="w-5/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                </div>
                <div className="h-5 bg-gray-300 my-2 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                <div className="flex justify-between">
                  <div className="w-4/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                  <div className="w-4/12 h-5 bg-gray-300 my-1 mx-5 rounded-lg shimmer flex-shrink-0"></div>
                </div>
              </div>) 
            }
            </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSkeleton;
