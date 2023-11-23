import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Modals = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    'https://i.postimg.cc/Wzs6CchH/shop-instra-1.jpg' ,
    'https://i.postimg.cc/XY9qGG29/shop-instra-2.jpg',
    'https://i.postimg.cc/k4LDRQdF/shop-instra-3.jpg',
    'https://i.postimg.cc/QxT1mM4d/shop-instra-4.jpg',
    'https://i.postimg.cc/Nfq7WTrH/shop-instra-6.jpg',
    'https://i.postimg.cc/ZY36FRDK/shop-instra-5.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Show
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body style={{ padding: '0',height:'24rem'}}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image}  style={{ width: '100%', height: 'auto' }} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default Modals;
