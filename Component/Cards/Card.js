import React, { useState } from 'react';

const Card = ({ id, initialImageSrc, hoverImageSrc, price, title ,hoverText}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{'overflow':'hidden'}}>
      <div 
        className={`Card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          objectFit: 'cover',
          transition: 'transform 0.3s, filter 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
          
        }}
      >
        <img
          src={isHovered ? hoverImageSrc : initialImageSrc}
          alt="Product"
          className="card-image"
        />
        {isHovered && (
          <div className="hover-text">
            <p>{hoverText}</p>
          </div>
        )}
        <div className="card-details">
          <h2 className="title">{title}</h2>
          <p className="price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

