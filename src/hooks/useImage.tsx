import React from "react";

const useImage = () => {
  const getImage = (imageUrl: string, id?: number) => {
    if (id) return `${imageUrl}?v=${id}`;

    return imageUrl;
  };

  return { getImage };
};

export default useImage;
