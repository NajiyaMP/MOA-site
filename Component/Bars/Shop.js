import React from 'react'
import Navigationbar from '../Navigationbar';
import Footer from '../Footer';
import Contact from '../Contact';



const Shop = () => {
  return (
    <div>
      <Navigationbar/>
      <div className="containeri">
        <div><Contact/></div>
      </div>
      <div style={{'background-color': 'rgb(22 116 255 / 25%)','color': 'white','height': '20rem','margin-top':' 7rem'}}>
        <div style={{'textAlign':'center','position': 'relative','top': '9rem'}}>
          <h1>Shop instagram</h1>
          <h6>Home<span>Shop instagram</span></h6>
        </div>
      </div>
      <div class="gridd-container">
         <div class="itemm1">
          <h3><b>Categories</b></h3>
          <h5>MODEST          (0)</h5><br></br>
          <h5>MOA             (6)</h5><br></br>
          <h5>OTHER ABAYAS    (0)</h5>


        </div>
        <div class="itemm2">
             <img src="https://i.postimg.cc/g2XS0kJF/feature-collection-2.jpg"/>
        </div>  
        <div class="itemm3">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Shop