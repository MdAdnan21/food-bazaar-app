import React from 'react';

const Spinner = ({ message }) => {
  return (
    <div className="flex items-center min-h-16">
      <div className="spinner mr-2"></div>
      <span className='text-lg font-medium px-2 py-4'>{message}</span>
    </div>
  );
};

export default Spinner