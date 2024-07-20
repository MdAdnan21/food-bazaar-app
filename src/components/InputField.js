import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Eye, EyeSlash } from "../utils/Icons";

const InputField = ({ type, label, value, onUpdate, isDisabled }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input 
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isDisabled && 'cursor-not-allowed'}`} 
        type={type}
        value={value}
        disabled={isDisabled}
        onChange={(e) => onUpdate(e.target.value)}
      />
    </div>
  );
};

export default InputField;
