// src/components/Signup.js

import React from 'react';

const Signup = ({ onSwitch }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold my-2">Sign Up</h2>
      <p className="text-sm font-normal mb-3 relative">
        or <span className="text-default absolute right-2 cursor-pointer text-md font-medium  underline-animation px-3 py-1" onClick={onSwitch}>Login Now!</span>
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" />
        </div>
        <button className="shadow-lg bg-[#fe8b00] text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform">
            Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
