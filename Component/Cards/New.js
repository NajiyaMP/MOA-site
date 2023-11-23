import React from 'react';
import Card from './Card';

const products = [
  { id: 1, initialImageSrc: 'https://i.postimg.cc/wT6WGfV2/metro-4.jpg', hoverImageSrc: 'https://i.postimg.cc/RFJF9LLb/metro-4-2.jpg', price: 23.99, title: 'Double Coat' },
  { id: 2, initialImageSrc: 'https://i.postimg.cc/kM0FPVw4/metro-10.jpg', hoverImageSrc: 'https://i.postimg.cc/grFKg1Xm/product-8-2.jpg', price: 19.99, title: 'Quilted hood' },
  { id: 3, initialImageSrc: 'https://i.postimg.cc/W3qWSGWm/metro-3.jpg', hoverImageSrc: 'https://i.postimg.cc/TPpCYj68/metro-3-2.jpg', price: 50.34, title: 'sandals' },
  { id: 5, initialImageSrc: 'https://i.postimg.cc/FFDdGMSZ/product-10.jpg', hoverImageSrc: 'https://i.postimg.cc/NfZ0zBj1/product-10-2.jpg', price: 76.99, title: 'Bags' },
  { id: 6, initialImageSrc: 'https://i.postimg.cc/zBf5fcfz/metro-11.jpg', hoverImageSrc: 'https://i.postimg.cc/c4LYSxW2/metro-2-2.jpg', price: 19.99, title: 'sweatshirt'},
  { id: 7, initialImageSrc: 'https://i.postimg.cc/6QqtWPq9/metro-8.jpg', hoverImageSrc: 'https://i.postimg.cc/hGW1gkpm/metro-8-2.jpg', price: 19.99, title: 'sweater' },
  { id: 8, initialImageSrc: 'https://i.postimg.cc/nVgs6vdj/product-5.jpg', hoverImageSrc: 'https://i.postimg.cc/mrmkVMzr/product-5-2.jpg', price: 19.99, title: 'denim coat' },
  { id: 4, initialImageSrc: 'https://i.postimg.cc/KYjgMFQw/product-9-2.jpg', hoverImageSrc: 'https://i.postimg.cc/TPpCYj68/metro-3-2.jpg', price: 19.99, title: 'point heels' },


  
];

const New = () => {
  return (

    <div className="main-container">
      <h1 className="head-style">New Arrivals  <span className='span-style'>sale off </span>  <span className='span-style'>best seller</span></h1>
      <div className="row" style={{'width': '100%'}}>
        {products.map(product => (
          <div key={product.id} className="col-md-3">
            <Card
              id={product.id}
              initialImageSrc={product.initialImageSrc}
              hoverImageSrc={product.hoverImageSrc}
              price={product.price}
              title={product.title}
            />
          </div>
        ))}
      </div>
      <div>
        <button className='b-style'>view All products</button>
      </div>
    </div>
  );
};

export default New;