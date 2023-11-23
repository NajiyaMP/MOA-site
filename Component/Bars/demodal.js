// Modals.js
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageModal = ({ show, handleClose, images, currentSlide, id }) => {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Body style={{ padding: '0', height: '24rem' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                style={{ width: '100%', height: 'auto' }}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
