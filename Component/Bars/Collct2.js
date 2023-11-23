import React from 'react'
import Navigationbar from '../Navigationbar';
import Contact from '../Contact';
import Footer from '../Footer';


const Collct2 = () => {
  return (
    <div>
      <Navigationbar/>
      <div className="containeri">
        <div><Contact/></div>
      </div>
        <div style={{'background-color': 'rgb(117 131 183)','color': 'white','height': '20rem','margin-top':' 7rem'}}>
            <div style={{'textAlign':'center','position': 'relative','top': '9rem'}}>
                <h1>Men Collection</h1>
                <h6>Shop collection</h6>
            </div>
        </div>
        <div className="grid-container">
            <div  className="item1">
                <img  className="item01" src='https://i.postimg.cc/XNtnh7dJ/collection-10.jpg' alt='img' style={{'width':'500px','height':'32rem'}}/>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/90ZKsVHR/collection-6.jpg' alt='img'/>
             </div>

            <div  className='item-container'>
              <img className="item2" src='https://i.postimg.cc/GhP6Qcj6/collection-7.jpg' alt='img'/>
            </div>  

            <div className='item-container'  >
              <img className="item2" src='https://i.postimg.cc/JnB2Bmn6/collection-8.jpg' alt='img'/>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/xTQ4qwS5/collection-9.jpg' alt='img'/>
            </div>
        </div>
        <div class="itemm3">
          <Footer/>
        </div>
      
    </div>
  )
}

export default Collct2