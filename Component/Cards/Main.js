import React, { useRef } from 'react';import Mains from './Mains';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'react-bootstrap';
// import Card from './Card';

const products = [
  { id: 1, initialImageSrc: 'https://i.postimg.cc/wT6WGfV2/metro-4.jpg', hoverImageSrc: 'https://i.postimg.cc/RFJF9LLb/metro-4-2.jpg', price: 67.99, title: 'coat' },
  { id: 2, initialImageSrc: 'https://i.postimg.cc/kM0FPVw4/metro-10.jpg', hoverImageSrc: 'https://i.postimg.cc/grFKg1Xm/product-8-2.jpg', price: 34.99, title: 'tshirt' },
  { id: 3, initialImageSrc: 'https://i.postimg.cc/W3qWSGWm/metro-3.jpg', hoverImageSrc: 'https://i.postimg.cc/TPpCYj68/metro-3-2.jpg', price: 45.99, title: 'chappals' },
  { id: 8, initialImageSrc: 'https://i.postimg.cc/nVgs6vdj/product-5.jpg', hoverImageSrc: 'https://i.postimg.cc/mrmkVMzr/product-5-2.jpg', price: 78.99, title: 'sleevs' },
  { id: 4, initialImageSrc: 'https://i.postimg.cc/KYjgMFQw/product-9-2.jpg', hoverImageSrc: 'https://i.postimg.cc/TPpCYj68/metro-3-2.jpg', price: 83.99, title: 'heels' },
  { id: 5, initialImageSrc: 'https://i.postimg.cc/FFDdGMSZ/product-10.jpg', hoverImageSrc: 'https://i.postimg.cc/NfZ0zBj1/product-10-2.jpg', price: 63.99, title: 'bags' },
  { id: 6, initialImageSrc: 'https://i.postimg.cc/zBf5fcfz/metro-11.jpg', hoverImageSrc: 'https://i.postimg.cc/c4LYSxW2/metro-2-2.jpg', price: 50.99, title: 'overcoat' },
  { id: 7, initialImageSrc: 'https://i.postimg.cc/6QqtWPq9/metro-8.jpg', hoverImageSrc: 'https://i.postimg.cc/hGW1gkpm/metro-8-2.jpg', price: 32.99, title: 'jacket' },


  
];

const Main = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (

  <div className="card-wrapper" style={{'overflow':'hidden'}}>
    <h1 className="head-style"> Featured Products</h1>
    <Slider {...settings} ref={sliderRef}>
      {products.map(product => (
        <div key={product.id}>
          <Mains
            id={product.id}
            initialImageSrc={product.initialImageSrc}
            hoverImageSrc={product.hoverImageSrc}
            price={product.price}
            title={product.title}
          />
        </div>
      ))}
    </Slider>
    <div style={{'margin-left': '38rem'}}>
    {/* <Button className="previous round" onClick={goToPrev}>
       &#8249;
    </Button> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-skip-start-circle" viewBox="0 0 16 16" onClick={goToPrev}>
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M10.229 5.055a.5.5 0 0 0-.52.038L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.271-.445z"/>
    </svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-skip-end-circle" viewBox="0 0 16 16" onClick={goToNext}>
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038L9.5 7.028V5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V8.972l-2.71 1.935A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
    </svg>
    {/* <Button className="next round" onClick={goToNext} >
        &#8250;
    </Button> */}
  
    </div>
  </div>
);
};

export default Main;