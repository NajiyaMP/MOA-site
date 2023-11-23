import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav,Dropdown } from 'react-bootstrap';
import Slidebar from './Slidebar';

const Navigationbar = () => {
  return (
    
  <div className='container-nav'>
    <Navbar className='sticky' bg="light" expand="lg">
      <Navbar.Brand href="#">
      <img src='https://i.postimg.cc/K8w7BSxq/moa-dubai.png' style={{'width':'150px','padding':'21px','margin-left':'1rem'}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='navbar_colaps'>
        <Nav className="justify-content-center" style={{'position':'relative','left':'5rem','gap':'1rem'}}>
          <Nav.Link  as={Link} to="/" className="d-flex align-items-center" style={{'flex-direction': 'column'}}>
          <strong  className='custom-strong-style '>HOME</strong>
          </Nav.Link>
          <Nav.Link   as={Link} to="/arrival" className="d-flex align-items-center"  style={{'flex-direction': 'column'}}>
            <strong className='custom-strong-style '>NEW ARRIVALS</strong>
          </Nav.Link>
          <Nav.Link  as={Link} to="/shop" className="d-flex align-items-center"  style={{'flex-direction': 'column'}} >
            <strong className='custom-strong-style '>SHOP</strong>
          </Nav.Link>
          <Nav.Item as={Dropdown} className="d-flex align-items-center" style={{ flexDirection: 'column' }}>
              <Dropdown.Toggle as={Nav.Link}><strong className='custom-strong-style '>COLLECTIONS</strong></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/collct1" style={{'backgroundColor':'black','color':'grey'}}>COLLECTIONS 01</Dropdown.Item>
                <Dropdown.Item  as={Link} to="/collct2" style={{'backgroundColor':'black','color':'grey'}}>COLLECTIONS 02</Dropdown.Item>
              </Dropdown.Menu>
          </Nav.Item>
          <Nav.Link  as={Link} to="/insta" className="d-flex align-items-center"  style={{'flex-direction': 'column'}}>
            <strong className='custom-strong-style '>INSTAGRAM SHOP</strong>
          </Nav.Link>
          <Nav.Link href="/store" className="d-flex align-items-center"  style={{'flex-direction': 'column'}}>
            <strong className='custom-strong-style '>STORE</strong>
          </Nav.Link>
          <Nav.Link href="infl" className="d-flex align-items-center"  style={{'flex-direction': 'column'}}>
            <strong className='custom-strong-style '>INFLUENCER</strong>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/login">
            <strong style={{'font-size': '23px', 'font-weight': '400'}}>Log in</strong>
          </Nav.Link>
          <Nav.Link><Slidebar/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    
  </div>
  );
};

export default Navigationbar;
