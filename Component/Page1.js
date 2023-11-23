import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const Page1 = () => {
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleButton1Click = () => {
    setShowImage1(true);
    setShowImage2(false);
    setShowImage3(false);
    setIsActive(true);
  };

  const handleButton2Click = () => {
    setShowImage1(false);
    setShowImage2(true);
    setShowImage3(false);
    setIsActive(false);
  };

  const handleButton3Click = () => {
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(true);
    setIsActive(false);
  };

  return (
    <div>
      <Row style={{'marginRight':'0px','marginLeft':'0px'}}>
        <Col md={6}>
          {showImage1 && (
            <div>
                <div >
                    <img  className='fade-in' src="https://i.postimg.cc/VkQLCD29/slider-hm4-position-1.png" alt='img' style={{'position': 'absolute','left': '9.5%','top': '3rem','width':'37rem', 'z-index': '1'}}/>
                </div>
                <div >
                    <img className='slide-bottom' src='https://i.postimg.cc/Znv49dcD/slider-hm4-position-2.png'  alt='img' style={{'position': 'absolute','left': '0%','top': '24rem', 'width':'43rem','height':'31rem','z-index': '2'}}/>
                </div>
                <div>
                    <img className='slide-bottom' src='https://i.postimg.cc/GhYTV8CQ/slider-hm4-position-3.png' alt='img' style={{'position': 'absolute','left': '17.5%','top':'6rem','height':'49rem', 'z-index': '3'}}/>
                </div>
            </div>
          )}
        </Col>
        <Col md={6}>
          {showImage1 && (
            <div id='one'>
                <h4 className='subtxt'>#Woman Dresses</h4>
                <h1 className='main'>Satin Dress</h1>
                <h6 className='subtxtt'> shop now 
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
                </span></h6>
            </div>
          )}
        </Col>
      </Row>
      <Row style={{'marginRight':'0px','marginLeft':'0px'}}>
        <Col md={12}>
          {showImage2 && (
            <div className='second'>
                
            <Col md={6}>
                <h3 className='textstyle'># Man Blazers</h3>
                <h1  className='txtstyle' >Limited Edition Beaded Dress</h1>
                <h6  className='textstylee'>shop now
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
                </span>
                </h6>
            </Col>
            </div>
          )}
        </Col>
      </Row>
      <Row style={{'marginRight':'0px','marginLeft':'0px'}}>
        <Col md={6}>
            {showImage3 && (
                <div style={{'margin-top':'5rem','padding-left':'8rem'}}>
                    <img  className='slide-bottom' src='https://i.postimg.cc/XJR7kLp0/slider-hm4-position-5.png' alt='img' />
                </div>
                )}
        </Col>
        <Col md={6}>
            {showImage3 && (
                <div >
                    <h4 className='subtxt'>#Man shirt</h4>
                    <h1 className='main'>Oxford Shirt</h1>
                    <h6 className='subtxtt'>shop now
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                    </span>
                    </h6>
                </div>
            )}
        </Col> 
                    
    
      </Row>
      <div style={{'position':'absolute','bottom':'14rem','left':'79rem'}}>
        <button className={`button ${isActive ? 'active' : ''}`} id='img1' onClick={handleButton1Click}><b>01</b></button><br></br>
        <button className='button' id='two' onClick={handleButton2Click}><b>02</b></button><br></br>
        <button className='button' id='three' onClick={handleButton3Click}><b>03</b></button><br></br>
      </div>
    </div>
  );
};

export default Page1;