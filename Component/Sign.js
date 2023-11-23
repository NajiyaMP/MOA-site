import React from 'react';
import {Row,Col} from 'react-bootstrap';

const Sign = () => {
  return (
    <div style={{'background-color':'rgb(250, 247, 247)','marginTop':'7rem','height':'17rem'}}>
        <Row style={{'marginRight':'0px','marginLeft':'0px'}}>
            <Col md={4}>
                <div style={{'display':'block','text-align': 'center','padding-top':'5rem'}}>
                    <h2>Sign Up & Save</h2>
                    <h5>Sale up to 20% off for your next purchase in this month!</h5>
                </div>
                
            </Col>
            <Col md={4}>
                <div >
                    <input type="email" placeholder="your email address..." style={{'display':'block','text-align': 'center','width': '24rem','padding-top':'5rem','margin-left': '5rem','padding': '23px','border': 'aliceblue','margin-top':'6rem'}}/>
                </div>
            </Col>
            <Col md={4}>
                <div >
                    <button style={{'display':'block','text-align': 'center','padding-top':'5rem','padding': '23px','border': 'aliceblue','margin-top':'6rem','backgroundColor':'white','margin-left': '14rem'}}><b className='subsc'>SUBSCRIBE</b></button>
                </div>
            </Col>


        </Row>

    </div>
  )
}

export default Sign