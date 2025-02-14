import React from "react";
import { useLoadingUser, useShowSideMenu, useUserData } from "../hooks/useUser";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";
import { DEFAULT_PROFILE, DOMAIN } from "../utils/constants";
import { AdminSetting, Setting, User } from "../utils/Icons";
import UserMenuSkeleton from "../skeletons/UserMenuSkeleton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toastConfig";

const UserMenu = ({ userData }) => {
  const { setShowSideMenu } = useShowSideMenu();
  const { logout } = useUserData();
  const nevigate = useNavigate();

  const handleLogout = () => {
    showToast("Logout successful!");
    logout();
    setTimeout(() => {
      setShowSideMenu(false);
      nevigate("/");
    }, 300);
  };

  const { loadingUserData } = useLoadingUser();

  if (loadingUserData) {
    return <UserMenuSkeleton />;
  }

  return (
    <div className="flex flex-col p-4 rounded-lg my-3">
      <div className="flex items-center flex-col-reverse justify-between mb-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mt-2">Welcome!</h2>
          <h2 className="text-xl font-bold mb-1">{userData?.name}</h2>
          <p className="text-sm font-medium mt-2">Email: {userData?.email}</p>
        </div>
        <div className="ml-4">
          <img
            // src={userData?.imageId ? DOMAIN + '/api/uploads/' + userData?.imageId : DEFAULT_PROFILE}
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            alt="User"
            className="w-32 h-32 object-cover rounded-full shadow-lg border-gray-300 border-2"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="mx-5 flex flex-col w-9/12 ">
          <Link
            to="/profile"
            className="px-6 py-2 my-2 font-semibold rounded-lg shadow-md text-black text-lg cursor-pointer hover:text-white transition duration-300 transform hover:bg-default hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform"
          >
            <User style={"mr-2"} />
            <span>Profile</span>
          </Link>
          <Link
            to="/settings"
            className="px-6 py-2 my-2 font-semibold rounded-lg shadow-md text-black text-lg cursor-pointer hover:bg-default hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform"
          >
            <Setting style={"mr-2"} />
            <span>Settings</span>
          </Link>
          {userData?.userType === "Admin" && (
            <>
              <Link
                to="/admin"
                className="px-6 py-2 my-2 font-semibold rounded-lg shadow-md text-black text-lg cursor-pointer hover:bg-default hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform"
              >
                <User style={"mr-2"} />
                <span>Admin Dashboard</span>
              </Link>
              <Link
                to="/manageUsers"
                className="px-6 py-2 font-semibold my-2 rounded-lg shadow-md text-black text-lg cursor-pointer hover:bg-default hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform"
              >
                <AdminSetting style={"mr-2"} />
                <span>Manage Users</span>
              </Link>
            </>
          )}
          <button
            onClick={handleLogout}
            className="my-5 mx-1 w-1/2 text-lg shadow-lg bg-[#fe8b00] text-white font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
