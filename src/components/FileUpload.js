import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

const FileUpload = ({isDisabled, onUpdate}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    onUpdate({profileImg: file})
    setFileName(file.name);
  };
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const removeFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return (
    <div>
      {fileName ? (
        <span className="flex px-3 py-4 border-2 border-white items-center text-default font-medium">
          {fileName.length > 13 ? fileName.slice(0, 13) + "..." : fileName}
          <FaTimes
            className="mx-2 text-red-500 cursor-pointer"
            onClick={removeFile}
          />
        </span>
      ) : (
        <div className="">
          <button
            onClick={handleClick}
            className={`text-default my-2 border-2 px-3 py-2 rounded-lg font-medium border-default 
            whitespace-nowrap ${isDisabled ? 'cursor-not-allowed' : 'hover:bg-gray-100 hover:border-default'}`}
          >
            Upload Image
          </button>
          <input
            disabled={isDisabled}
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
