import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import Navigationbar from '../Navigationbar';
import Footer from '../Footer';
import Pagination from './Pagination';
import Contact from '../Contact';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import{Row,Col} from 'react-bootstrap';



const Arrivals = () => {
  const page1Data = [
    { image: 'https://i.postimg.cc/hjbtNsSG/product-57.jpg' },
    { image: 'https://i.postimg.cc/15Y3xfZD/product-61.jpg' },
    { image: 'https://i.postimg.cc/G2cCTCCc/product-60.jpg' },
    { image: 'https://i.postimg.cc/MHvg1Zr8/product-53-2.jpg' },
    { image: 'https://i.postimg.cc/s2s8w40m/product-52-2.jpg' },
    { image: 'https://i.postimg.cc/tJKvP3xh/product-54.jpg' },
  ];
  const page2Data = [
    { image: 'https://i.postimg.cc/Wzs6CchH/shop-instra-1.jpg' },
    { image: 'https://i.postimg.cc/XY9qGG29/shop-instra-2.jpg' },
    { image: 'https://i.postimg.cc/k4LDRQdF/shop-instra-3.jpg' },
    { image: 'https://i.postimg.cc/QxT1mM4d/shop-instra-4.jpg' },
    { image: 'https://i.postimg.cc/Nfq7WTrH/shop-instra-6.jpg' },
    { image: 'https://i.postimg.cc/ZY36FRDK/shop-instra-5.jpg' },
  ];
  const page3Data = [
    { image: 'https://i.postimg.cc/XvcXdH6g/collection-3.jpg' },
    { image: 'https://i.postimg.cc/DzFwvr44/collection-4.jpg' },
    { image: 'https://i.postimg.cc/NFT0GpDT/collection-5.jpg' },
    { image: 'https://i.postimg.cc/QxT1mM4d/shop-instra-4.jpg' },
    { image: 'https://i.postimg.cc/VvTXpG6C/collection-6.jpg' },
    { image: 'https://i.postimg.cc/vZFHLBg6/banner-8.jpg' },
  ];

  const allData = [...page1Data, ...page2Data,...page3Data]; // Combine both page data arrays
  
  const [isPanelOpen, setPanelOpen] = useState(false);
  
  const togglePanel = () => {
    $("#panel").slideToggle("slow");
    setPanelOpen(!isPanelOpen);
  };
  
  return (
    <div>
      <Navigationbar/>
      <div className="containeri">
        <div><Contact/></div>
      </div>
      <div className='container-new'>
        <div style={{'textAlign':'center','position': 'relative','top': '9rem'}}>
          <h1>New Arrivals</h1>
          <h6>Home<span>New Arrivals</span></h6>
        </div>
      </div>
      <div class="gridd-container">
         <div class="itemm1" style={{'margin-top':'-7rem'}}>
        
          <h3><b>Categories</b></h3>
          <h5>MODEST(0)</h5><br></br>
          <h5>MOA(6)</h5><br></br>
          <h5>OTHER ABAYAS(0)</h5>
          <img src="https://i.postimg.cc/Pr0vWLcS/sidebar-banner.jpg" alt='ul'style={{'width':'20rem'}}/> 


        </div>
        <div class="itemm2">
          <div style={{'position':'absolute','right':'1rem','margin-top':'-7rem'}}> 
            <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="40" float="right" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16" >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="3zz0"  float="right" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16" style={{'margin-left':'1rem'}}>
              <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
              <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
            </svg>

            <button
                style={{ 'border': 'none', 'backgroundColor': 'transparent', 'color': 'black',"width":'12rem'}}
                id="flip" onClick={togglePanel}
            >
                Filter
            </button>              
            
            
            
            <DropdownButton title="Sort by" style={{'float':'inline-end', 'border': 'none', 'backgroundColor': 'transparent' }}>
              <Dropdown.Item className='dpd'>Default sorting</Dropdown.Item>
              <Dropdown.Item className='dpd'>sort by popularity</Dropdown.Item>
              <Dropdown.Item className='dpd' >sort by average rating</Dropdown.Item>
              <Dropdown.Item className='dpd'>sort by latest</Dropdown.Item>
              <Dropdown.Item className='dpd'>sort by-Price - High to Low</Dropdown.Item>
              <Dropdown.Item className='dpd'>sort by-Price - low to High </Dropdown.Item>
            </DropdownButton> 
            
          </div>
          
          <div class="gridy-container">
            <div class="gridzy-item">
                {/* {filterVisible && ( */}
                {/* <div className={`filter-options ${filterVisible ? 'slide-in' : 'slide-out'}`}>     */}
                <div id="panel" style={{ display: isPanelOpen ? 'block' : 'none' }}>
                <Row>
                    <Col md={3}>
                      <h4>Price</h4>
                      <h6>$0.00-$20.00</h6>
                      <h6>$20.00-$40.00</h6>
                      <h6>$30.00-$50.00</h6>
                      <h6>$30.00-$50.00</h6>

                    </Col>
                    <Col md={3}>
                      <h4>Size</h4>
                      <h6>Full size</h6>
                      <h6>Medium</h6>
                      <h6>XL</h6>
                      <h6>XXL</h6>
                    </Col>
                    <Col md={3}>
                      <h4>Color</h4>
                      <h6>Blue</h6>
                      <h6>Orange</h6>
                      <h6>Red</h6>
                      <h6>Yellow</h6>
                    </Col>
                    <Col md={3}>
                      <h4>Brands</h4>
                      <h6>Aure</h6>
                      <h6>Mango</h6>
                      <h6>Zara</h6>
                      <h6>Draven</h6>
                      <h6>Valentino</h6>
                    </Col>
                  </Row>

                </div>
               
                {/* </div> */}
              {/* )} */}
            
              <Pagination data={allData} itemsPerPage={6} />
            </div>  
          </div> 
        </div>  
        
        <div class="itemm3">
          <Footer/>
        </div>
      </div>
    </div>
  );
};
// 
export default Arrivals;
