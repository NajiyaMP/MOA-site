import React from 'react';
import {Row,Col} from 'react-bootstrap';

const Latest = () => {
  return (
    <div>
        <div>
            <h1 style={{'display':'block','text-align': 'center','padding-top':'5rem','font-size':'4rem'}}>Latest post</h1>
        </div>
        <Row style={{'marginRight':'0px','marginLeft':'0px'}}>
            <Col md={6} className='col'>
                <img src="https://i.postimg.cc/CKNvZfps/blog-1.jpg"/>
                <button className='button'>
                    <strong style={{"fontFamily":'none',}}>Mix & Match - Fall Neutrals</strong>
                </button>
                <button className='button'>
                    <h6>December 5, 2023 By Joe Doe Photography, Technology</h6>
                </button>
                <p style={{'color':'#777777'}}>All the rumors have finally died down and many skeptics have tightened their lips, the iPod does support video format now on…</p>
                <button className='button'><h6>READ MORE</h6></button>

            </Col>
            <Col md={6} className='col'>
            <img src="https://i.postimg.cc/SQXwPDh0/blog-2.jpg"/>
            <button className='button'>
                    <strong style={{"fontFamily":'none',}}>Mix & Match - Fall Neutrals</strong>
                </button>
                <button className='button'>
                    <h6>December 5, 2023 By Joe Doe Photography, Technology</h6>
                </button>
                <p style={{'color':'#777777'}}>All the rumors have finally died down and many skeptics have tightened their lips, the iPod does support video format now on…</p>
                <button className='button'>
                    <h6>READ MORE</h6></button>
                
            </Col>
        </Row>
    </div>
  )
}

export default Latest;