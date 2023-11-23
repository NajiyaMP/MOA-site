import React from 'react'
import Navigationbar from '../Navigationbar';
import Footer from '../Footer';
import Contact from '../Contact';



const Infl = () => {
  return (
    <div>
      <Navigationbar/>
      <div className="containeri">
        <div><Contact/></div>
      </div>
        <div  className='divimg' style={{'color': 'white','height': '20rem'}}>
        <div style={{'textAlign':'center','position': 'relative','top': '9rem'}}>
          <h1>INFLUENCER</h1>
          <h6>Home<span>Store</span></h6>
        </div>
        </div>
        <div className="grid-container">
            <div  className="item1">
                <img  className="item01" src='https://i.postimg.cc/hjczYF1w/collection-2.jpg' alt='img' style={{'width':'500px','height':'32rem'}}/>
                <h1 className='ji'>women blazer</h1>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/XvcXdH6g/collection-3.jpg' alt='img'/>
              <h4 className='hover-text'>Bag collections</h4>
             </div>

            <div  className='item-container'>
              <img className="item2" src='https://i.postimg.cc/DzFwvr44/collection-4.jpg' alt='img'/>
              <h4 className='hover-text'>men collections</h4>
            </div>  

            <div className='item-container'  >
              <img className="item2" src='https://i.postimg.cc/NFT0GpDT/collection-5.jpg' alt='img'/>
              <h4 className='hover-text'>men collections</h4>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/VvTXpG6C/collection-6.jpg' alt='img'/>
              <h4 className='hover-text'>childrens collections</h4>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Infl