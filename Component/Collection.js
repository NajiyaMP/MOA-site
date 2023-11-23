import React from 'react'

const Collection = () => {
  return (
    <div>
        <div>
            <h1 style={{'display':'block','textAlign':'center','font-size': '54px',' font-weight': '500','line-height': '106px','margin': '0 0 0px'}}>New Collections</h1>
            <h6 style={{'color':'#777777','display':'block','textAlign':'center'}}>Vestibulum felis odio, imperdiet eget</h6>
        </div>

        <div className="grid-container">
            <div  className="item1">
                <img  className="item01" src='https://i.postimg.cc/q79XBphX/banner-4.jpg' alt='img' style={{'width':'500px','height':'32rem'}}/>
                <h1 className='ji'>women blazer</h1>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/wjGzfGZs/banner-5.jpg' alt='img'/>
              <h4 className='hover-text'>Bag collections</h4>
             </div>

            <div  className='item-container'>
              <img className="item2" src='https://i.postimg.cc/4dXWzJPv/banner-6.jpg' alt='img'/>
              <h4 className='hover-text'>men collections</h4>
            </div>  

            <div className='item-container'  >
              <img className="item2" src='https://i.postimg.cc/13w19rz8/banner-7.jpg' alt='img'/>
              <h4 className='hover-text'>men collections</h4>
            </div>

            <div className='item-container' >
              <img className="item2" src='https://i.postimg.cc/vZFHLBg6/banner-8.jpg' alt='img'/>
              <h4 className='hover-text'>kids collections</h4>
            </div>
        </div>


    </div>
  )
}

export default Collection