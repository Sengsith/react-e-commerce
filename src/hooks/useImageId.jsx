import { useState, useEffect } from "react";

const useImageId = () => {
  // Don't forget to change media queries if needed
  const LOCAL_STORAGE_IMAGE_ID = "imageId";

  const getSavedValue = () => {
    return parseInt(sessionStorage.getItem(LOCAL_STORAGE_IMAGE_ID));
  };

  const [currentImageId, setCurrentImageId] = useState(getSavedValue() || 1);

  // Always check image id changes
  useEffect(() => {
    sessionStorage.removeItem(LOCAL_STORAGE_IMAGE_ID);
    sessionStorage.setItem(LOCAL_STORAGE_IMAGE_ID, currentImageId);
  }, [currentImageId]);

  return { currentImageId, setCurrentImageId };
};

export default useImageId;
