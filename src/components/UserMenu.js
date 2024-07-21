import React from 'react';
import { useLoadingUser } from '../hooks/useUser';
import RestaurantCardSkeleton from '../skeletons/RestaurantCardSkeleton';

const UserMenu = ({ userData }) => {
  const handleLogout = () => {
    // Implement logout logic here
  };

  const { loadingUserData } = useLoadingUser()

  if(loadingUserData){
    return <RestaurantCardSkeleton />
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome, {userData?.user?.name}!</h2>
      <p className="text-sm mb-4">Email: {userData?.user?.email}</p>
      {/* Add more user-specific details as needed */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Switch Account
      </button>
    </div>
  );
};

export default UserMenu;
