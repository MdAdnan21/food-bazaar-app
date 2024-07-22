import React from 'react';

const UserMenuSkeleton = () => {
  return (
    <div className="flex flex-col p-4 rounded-lg my-3">
      <div className="flex items-center flex-col-reverse justify-between mb-4">
        <div className="text-center flex-1">
          <div className="w-56 h-8 bg-gray-300 shimmer rounded-lg mx-auto mt-5 mb-3"></div>
          <div className="w-48 h-7 bg-gray-300 shimmer rounded-lg mx-auto mb-3"></div>
          <div className="w-56 h-5 bg-gray-300 shimmer rounded-lg mx-auto mt-3"></div>
        </div>
        <div className="ml-4 flex-1">
          <div className="w-32 h-32 bg-gray-300 shimmer rounded-full mx-auto"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-2">
        <div className="mx-5 flex flex-col w-9/12 ">
          <div className="px-6 py-5 my-2 font-semibold rounded-lg shadow-md bg-gray-300 shimmer text-black text-lg cursor-pointer"></div>
          <div className="px-6 py-5 my-2 font-semibold rounded-lg shadow-md bg-gray-300 shimmer text-black text-lg cursor-pointer"></div>
          <button className="my-5 mx-1 w-1/2 h-10 text-lg shadow-lg bg-gray-300 shimmer text-white font-semibold px-4 py-2 rounded-md"></button>
        </div>
      </div>
    </div>
  );
};

export default UserMenuSkeleton;
