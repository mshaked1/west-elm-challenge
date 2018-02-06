import React from 'react';
import './Thumbnails.css';

const Thumbnails = ({ selectedThumbnail, images, thumbnailClick }) => (
  <div className="Thumbnails">
    {images.map((image, index) => (
      <div key={index} onClick={() => thumbnailClick(image.letter, index)}>
        <img
          className={`${selectedThumbnail.url === image.letter ? 'selected' : ''}`}
          src={image.thumb}
          alt='apron'
        />
      </div>
    ))}
  </div>
)

export default Thumbnails;