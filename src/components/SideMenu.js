import React, { useState } from "react";
import { Close } from "../utils/Icons";
import Login from "./Login";
import Signup from "./Signup";

const SideMenu = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-full transition-all ${isOpen ? "z-40" : "-z-1 pointer-events-none"}`}
        onClick={handleOverlayClick}
      />
        <div
          className={`fixed top-0 right-0 h-full w-[100%] mobile:w-[50%]  tablet:w-[30%] duration-700 bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
        <div className="m-5 mx-[7%]">
          <button
            onClick={onClose}
          >
            <Close style={'cursor-pointer p-3 hover:text-[#fe8b00] transition duration-300 transform hover:scale-105 border-gray-200 border-1 shadow-lg rounded-lg'} />
          </button>
          {isLogin ? (
            <Login onSwitch={() => setIsLogin(!isLogin)} />
          ) : (
            <Signup onSwitch={() => setIsLogin(!isLogin)} />
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
