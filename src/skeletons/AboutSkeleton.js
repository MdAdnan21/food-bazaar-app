import React from "react";

const AboutPageSkeleton = () => {
  return (
    <div className="flex lg:flex-row w-full items-center bg-gradient-to-r from-primary to-secondary px-8 min-h-screen">
      {/* Left Content Skeleton */}
      <div className="w-full lg:w-1/2 text-center lg:text-left px-4 flex flex-col items-center lg:items-start">
        <div className="h-16 w-3/4 bg-gray-300 shimmer my-4"></div>
        <div className="h-8 w-2/3 bg-gray-300 shimmer my-3"></div>
        <div className="h-6 w-2/4 bg-gray-300 shimmer my-3"></div>
        <div className="h-6 w-3/4 bg-gray-300 shimmer my-3"></div>
        <div className="h-12 w-2/4 bg-gray-300 shimmer my-6 rounded-full"></div>
      </div>

      {/* Right Image Skeleton */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 mt-8 lg:mt-0">
        <div className="w-full lg:w-4/5 h-[300px] bg-gray-300 shimmer rounded-3xl"></div>
      </div>
    </div>
  );
};

export default AboutPageSkeleton;
