import { useState } from 'react';
import { DOMAIN } from '../utils/constants';

const useImageUpload = () => {
  const [imageId, setImageId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = async (file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${DOMAIN}/api/images/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setImageId(data?.imageId);
        return { success: true, data };
      } else {
        console.error('Upload failed:', data);
        return { success: false, error: data };
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false)
    }
  };

  const deleteImage = async () => {
    if (!imageId) return { success: false, error: 'No image ID' };

    setIsLoading(true);

    try {
      const response = await fetch(`${DOMAIN}/api/images/delete/${imageId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        setImageId(null);
        return { success: true, data };
      } else {
        console.error('Error deleting file');
        return { success: false, error: data };
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false)
    }
  };

  return { imageId, isLoading, uploadImage, deleteImage };
};

export default useImageUpload;
