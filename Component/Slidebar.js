import React, { useState } from 'react';

const Slidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="app-container">
    
        <div className={`sidebar w3-sidebar w3-bar-block w3-collapse ${sidebarVisible ? 'visible' : ''}`}>
            <button className="bustyle" onClick={toggleSidebar}>
            &times;
            </button><br></br>
        
            <div>
                <button className="bustyle">About Toro</button><br></br>
                <button className="bustyle">Help center</button><br></br>
                <button className="bustyle">collection</button><br></br>
                <button className="bustyle">Blog</button><br></br>
                <button className="bustyle">New look</button><br></br>
                <div className='bustyle'>
                    <img src="https://i.postimg.cc/rwbRxThp/payments.png" /><br>
                    </br>
                    <p  style={{'color':'#777777'}}>
                        Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi aliquet, sit amet fermentum justo dapibus.
                    </p>
                    <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>Monday - Friday: 9:00 - 19:00</span><br></br>
                    <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>info@example.com</span><br></br>
                    <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>(+612) 2531 5600</span><br></br>
                    <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>PO Box 1622 Colins Street West Victoria 8077 Australia</span>

            </div>
            
        
        
            </div>
        </div>

      <div className={`content  ${sidebarVisible ? 'content-shifted' : ''}`}>
        <div className="w3-teal">
          {/* <button className="bi bi-justify-left">&#9776;</button> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-justify-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"   onClick={toggleSidebar}/>
          </svg>
          
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
