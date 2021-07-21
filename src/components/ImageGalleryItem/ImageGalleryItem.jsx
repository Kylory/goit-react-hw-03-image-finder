import React from 'react';

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          className="ImageGalleryItem"
          key={id}
          large-image-url={largeImageURL}
        >
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
