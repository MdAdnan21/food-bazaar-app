// FloatingLabelInput.jsx
import React, { useState } from 'react';

const InputField = ({ label, type = 'text', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value !== '');
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="relative mt-4">
      <input
        type={type}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        id="floating-input"
        className={`peer block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${isFocused || value ? 'pt-5' : 'pt-3'} border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300`}
        {...props}
      />
      <label
        htmlFor="floating-input"
        className={`absolute top-0 left-0 px-3 text-gray-500 transition-all duration-300 transform -translate-y-1/2 scale-75 origin-top-left ${isFocused || value ? 'text-blue-500' : 'text-gray-500'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
