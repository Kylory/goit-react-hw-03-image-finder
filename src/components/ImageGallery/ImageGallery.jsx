import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery" onClick={openModal}>
      <ImageGalleryItem images={images} />
    </ul>
  );
};

export default ImageGallery;
