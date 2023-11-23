import React from 'react'
import Navigationbar from '../Navigationbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';
import Contact from '../Contact';

import Modals from './Modals';


const Insta = () => {
  return (
    <div>
      <Navigationbar/>
      <div className="containeri">
        <div><Contact/></div>
      </div>

      <div  style={{'background-color': '#ffc107','color': 'white','height': '20rem','margin-top': '7rem'}} >
        <div style={{'textAlign':'center','position': 'relative','top': '9rem'}}>
          <h1>Shop instagram</h1>
          <h6>Home<span> New Arrivals</span></h6>
        </div>
      </div >
      <div className="gridz-container">
        
        <div className='grids' >
          <div  className="grid-item" >
            <div className='hl'></div>
            <img className='imgg' src="https://i.postimg.cc/Wzs6CchH/shop-instra-1.jpg" alt='ji' />
            <div className="text_grid">
              <h4 className='hoverr-text'>Image 1 <br></br>#Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <Button>
                <Modals/>
              </Button>
            </div>
          </div>
        </div>
        

        <div className='grids' >
          <div  className="grid-item">
            <div className='hl'></div>
            <img  className="imgg" src="https://i.postimg.cc/XY9qGG29/shop-instra-2.jpg" alt='ji' />
            <div className="text_grid">
              <h4 className='hoverr-text'>Image 2 <br></br>#Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <Button>
                <Modals/>
              </Button>
            </div>
          </div>
        </div>

        <div className='grids' >
          <div  className="grid-item">
            <div className='hl'></div>
            <img  className="imgg" src="https://i.postimg.cc/k4LDRQdF/shop-instra-3.jpg" alt='ji' />
            <div className="text_grid">
              <h4 className='hoverr-text'>Image 3 <br></br>#Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <Button>
                <Modals/>
              </Button>
            </div>
          </div>
        </div>

        <div className='grids' >
          <div  className="grid-item" style={{'marginTop':'-4rem' }}>
            <div className='hl'></div>
            <img  className="imgg" src="https://i.postimg.cc/QxT1mM4d/shop-instra-4.jpg" alt='ji' />
            <div className="text_grid">
              <h4 className='hoverr-text'>Image 4 <br></br>#Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <Button>
                <Modals/>
              </Button>
            </div>
          </div>
        </div>

        <div className='grids' >
          <div  className="grid-item" style={{'marginTop':'0rem'}}>
            <div className='hl'></div>
            <img  className="imgg" src="https://i.postimg.cc/Nfq7WTrH/shop-instra-6.jpg" alt='ji' />
            <div className="text_grid">
              <h4 className='hoverr-text'>Image 5 <br></br>#Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <Button>
                <Modals/>
              </Button>
            </div>
          </div>
        </div>

        <div className='grids' >
          <div  className="grid-item" style={{'marginTop':'-4rem'}}>
            <div className='hl'></div>
            <img  className="imgg" src="https://i.postimg.cc/ZY36FRDK/shop-instra-5.jpg" alt='ji' />
            <div className="text_grid">
              <h4 className='hoverr-text'>Image 6 <br></br>#Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
              <Button>
                <Modals/>
              </Button>
            </div>
          </div>
        </div>
      </div> 
      
      <div className="itemm3">
          <Footer/>
      </div>

    </div>
  )
}

export default Insta