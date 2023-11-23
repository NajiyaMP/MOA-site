import React from 'react';
import { Row,Col } from 'react-bootstrap';
import  ScrollUpButton from './Bars/Scrollbutton';






const Footer = () => {
  return (
    <div className='footer'>
        <ScrollUpButton/>

        <Row style={{'padding':'0px','margin':'7rem 0rem 0rem 0rem'}}>
            <Col md={4} style={{'dislay':'block','text-align':'center','padding':'3rem'}}>
                <h4><strong>T O R O</strong></h4>
                <p style={{'color':'#777777'}}>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptar</p>
                <div  style={{}}>
                    <img src="https://st.redbus.in/web/images/layout/social_facebook_new.svg"/>
                    <img src="https://st.redbus.in/web/images/layout/social_linkedin_new.svg"/>
                    <img src="https://st.redbus.in/web/images/layout/social_twitter_new.svg"/>
                    <img src="https://st.redbus.in/web/images/layout/social_instagram_new.svg"/>
                </div> 
            </Col>
            <Col md={2} style={{'dislay':'block'}}>
                <h5><b>Company Link</b></h5>
                <div className='ft-style'>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>about us</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>Contact us</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>FAQ</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>our team</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>privacy</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}> blog</h6>
                </div>
            </Col>
            <Col md={2} style={{'dislay':'block'}}>
            <h5><b>userful Link</b></h5>
                <div className='ft-style'>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>Guides and Articles</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>Customer Reviews</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>Coupon</h6>
                <h6 style={{'color':'#777777','lineHeight':'2rem'}}>military discount</h6>
                </div>
            </Col>
            <Col md={4}>
            <h5><b>Contact info</b></h5>
            <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>Monday - Friday: 9:00 - 19:00</span><br></br>

            <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>info@example.com</span><br></br>

            <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>(+612) 2531 5600</span><br></br>

            <img src=" "/> <span style={{'color':'#777777','lineHeight':'3rem'}}>PO Box 1622 Colins Street West Victoria 8077 Australia</span>




            </Col>

                
        </Row>
            <h6 style={{'display':'block','textAlign':'center','margin-top':'3rem','color':'#777777'}}>Ⓒ 2021  All rights reserved</h6>
        
    </div>
  )
}

export default Footer