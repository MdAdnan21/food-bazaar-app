import React, { useState } from "react";

const ToggleButton = ({ toggle1, toggle2 , onUpdate, isDisabled}) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleHandler = () => {
    setIsChecked(!isChecked)
    onUpdate({userType: isChecked ? "User" : "Admin"});
  };
  return (
    <label className={`inline-flex w-full mt-3 mb-6 items-center ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <input
        type="checkbox"
        value=""
        disabled={isDisabled}
        className="sr-only peer"
        checked={isChecked}
        onChange={toggleHandler}
      />
      <div
        className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none ${isDisabled && 'pointer-events-none'}  
          rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
          peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
          after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
          peer-checked:bg-default`}
      ></div>
      <span className={`ms-3 text-md font-medium  ${isDisabled && 'pointer-events-none text-gray-400'} ${isChecked && 'text-default'}`}>
        {isChecked ? toggle1 : toggle2}
      </span>
    </label>
  );
};

export default ToggleButton;
