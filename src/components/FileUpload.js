import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { DOMAIN } from "../utils/constants";
import Spinner from './Spinner'
import { useSignupData } from "../hooks/useUser";
import useImageUpload from "../hooks/useImageUpload";

const FileUpload = ({isDisabled}) => {
  const fileInputRef = useRef(null);
  const { imageId, isLoading, uploadImage, deleteImage } = useImageUpload();
  const [signupData, updateSignup] = useSignupData();

  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    
    const { success, data } = await uploadImage(file);
    if (success) {
    //   console.log(data);
        updateSignup({imageId : data?.imageId})
    }

  } 


  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const removeFile = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateSignup({imageId : null})
    const { success } = await deleteImage();
    if (success) {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  if(isLoading){
    return <Spinner message={imageId ? "Deleting" : "Uploading"} />
  }

  return (
    <div>
      {imageId ? (
        <span className="flex min-h-16 px-3 py-4 border-2 border-white items-center text-default font-medium">
          {imageId.length > 13 ? imageId.slice(0, 13) + "..." : imageId}
          <FaTimes
            className="mx-2 text-red-500 cursor-pointer"
            onClick={removeFile}
          />
        </span>
      ) : (
        <div className="min-h-16">
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
