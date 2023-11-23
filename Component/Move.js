import React from 'react'

const Move = () => {
  return (
    <div className='five'>
        <div className='basic'>
        <h2 style={{'padding-left':'4rem'}}>Basic Cotton sweater</h2>
        <h1 style={{'font-size': '9rem','font-family': 'math'}}>off 30% </h1>
        <div>
          <h1 className="mb-3" style={{'text-decoration':'line-through','padding-left':'4rem'}}> $99.99 <span style={{"color":'red','padding-left':'4rem','text-decoration':'none'}}>$39.99</span></h1> 
        </div>
        <button style={{"backgroundColor":'black','color':'white','border':'none','padding':'10px','margin-left':'10rem'}}>Shop Now</button>
        </div>
        

    </div>
  )
}

export default Move