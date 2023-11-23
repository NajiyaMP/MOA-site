import React from 'react';
import Navigationbar from './Navigationbar';
import Page1 from './Page1';
import Collection from './Collection';
import Main from './Cards/Main';
import New from './Cards/New';
import Move from './Move';
import Latest from './Latest';
import Sign from './Sign';
import Footer from './Footer';
import Contact from './Contact';


const Home = () => {
    return (
      
        <div>
            <div className='container-one'>
              <Navigationbar/>
            </div>
            <div className="containeri">
              <div><Contact/></div>
            </div>
            <div className='container-two' style={{marginTop:'6rem'}}>
              <Page1/>
            </div>
            <div className='container-three'>
              <Collection/>
            </div>
            <div  className='container-three'>
              <Main/>
            </div>
            <div className='container-four'>
              <New/>
            </div>
            <div className='container-five'>
              <Move/>
            </div>
            <div className='container-six'>
              <Latest/>
            </div>
            <div className='container-seven'>
              <Sign/>
            </div>
            <div className='container-seven'>
              <Footer/>
            </div> 
          
          
        </div>
    )
  }
  
  export default Home;