// src/components/Login.js

import React from 'react';
import InputField from './inputField';

const Login = ({ onSwitch }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold my-2">Login</h2>
      <p className="text-sm font-normal mb-3 relative">
        or <span className="text-default absolute right-4 cursor-pointer text-md font-medium  underline-animation px-5 py-1" onClick={onSwitch}>Create Account Now!</span>
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
        <button className="shadow-lg bg-[#fe8b00] text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform">
            Login
        </button>
      </form>
    </div>
  );
};

export default Login;
