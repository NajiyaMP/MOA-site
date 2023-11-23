import React from 'react'
import Navigationbar from '../Navigationbar';
import Contact from '../Contact';

import Footer from '../Footer';


const Collct1 = () => {
  return (
    <div>
      <Navigationbar/>
      <div className="containeri">
        <div><Contact/></div>
      </div>
        <div style={{'background-color': '#b77593','color': 'white','height': '20rem','margin-top':' 7rem'}}>
            <div style={{'textAlign':'center','position': 'relative','top': '9rem'}}>
                <h1>Women Collection</h1>
                <h6>Shop collection</h6>
            </div>
        </div>
        <div className="grid-container">
            <div  className="item1">
                <img  className="item01" src='https://i.postimg.cc/157ZD7tF/collection-13.jpg' alt='img' style={{'width':'500px','height':'53rem'}}/>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/SNxnyP3Y/collection-16.jpg' alt='img'/>
             </div>

            <div  className='item-container'>
              <img className="item2" src='https://i.postimg.cc/QdZJYhHZ/collection-12.jpg' alt='img'/>
            </div>  

            <div className='item-container'  >
              <img className="item2" src='https://i.postimg.cc/d1g5qdtL/collection-15.jpg' alt='img'/>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/D0K1jcwd/collection-11.jpg' alt='img'/>
            </div>
        </div>
        <div class="itemm3">
          <Footer/>
        </div>
      
    </div>
  )
}

export default Collct1