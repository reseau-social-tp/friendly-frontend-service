import {React, Outlet} from "react-router-dom";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faFaceSmile,
  faFaceLaugh,
  faRectangleList,
  faUsers,
  faSearch,
  faCommenting,
  faBell,
  faUser
} from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
          <Navbar sticky='top' expand="lg" className="navbar-back-layer" >
              <Container className="navbar-container">
                  <Navbar.Brand className="utility">
                      <div className="utility-items">
                              {/* <img src={Logo} alt="Logo" style={{height:"4rem"}} /> */}
                              
                              <FontAwesomeIcon
                                icon={faFacebook}
                                color="var(--primary)"
                                className="logo-icon"
                                />  
                                <div class="search-input">
                                    <FontAwesomeIcon
                                    icon={faSearch}
                                    color="var(--primary)"
                                    className="icon"
                                    />  
                                    <input type="text" placeholder="Search here..."/>
                                </div>
                      </div>
                  </Navbar.Brand>
                  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" style={{color:"white"}}/> */}
                  <Navbar.Collapse className='justify-content-end links-container' id="basic-navbar-nav">
                      <Nav className="me-auto nav-links-container">
                          <Navbar.Brand>
                            <Link to='/' className="nav-links">
                                <FontAwesomeIcon
                                icon={faHome}
                                color="var(--primary)"
                                className="nav-icon option"
                                /> 
                                <span>Home</span>
                            </Link>
                          </Navbar.Brand>
                          <Navbar.Brand>
                            <Link to='/obstetricale' className="nav-links">
                              <FontAwesomeIcon
                                icon={faFaceSmile}
                                color="var(--primary)"
                                className="nav-icon"
                                /> 
                                <span>Friends</span>
                            </Link>
                          </Navbar.Brand>
                          <Navbar.Brand>
                            <Link to='/pelvienne' className="nav-links">
                              <FontAwesomeIcon
                                icon={faUsers}
                                color="var(--primary)"
                                className="nav-icon"
                                /> 
                              <span>Groups</span>
                            </Link>
                          </Navbar.Brand>
                      </Nav>
                      <Nav className="me-auto option-links-container">
                          <Navbar.Brand>
                            <Link to='/' className="nav-links friends">
                                <span>Meet friends</span>
                            </Link>
                          </Navbar.Brand>
                          <Navbar.Brand>
                            <Link to='/' className="nav-links">
                                <FontAwesomeIcon
                                icon={faRectangleList}
                                color="var(--primary)"
                                className="nav-icon option"
                                /> 
                                {/* <span>Menu</span> */}
                            </Link>
                          </Navbar.Brand>
                          <Navbar.Brand>
                            <Link to='/obstetricale' className="nav-links">
                              <FontAwesomeIcon
                                icon={faCommenting}
                                color="var(--primary)"
                                className="nav-icon option"
                                /> 
                                {/* <span>Chat</span> */}
                            </Link>
                          </Navbar.Brand>
                          <Navbar.Brand>
                            <Link to='/pelvienne' className="nav-links">
                              <FontAwesomeIcon
                                icon={faBell}
                                color="var(--primary)"
                                className="nav-icon option"
                                /> 
                              {/* <span>Notification</span> */}
                            </Link>
                          </Navbar.Brand>
                          <Navbar.Brand>
                            <Link to='/pelvienne' className="nav-links">
                              <FontAwesomeIcon
                                icon={faUser}
                                color="var(--primary)"
                                className="nav-icon option"
                                /> 
                              {/* <span>Profile</span> */}
                            </Link>
                          </Navbar.Brand>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </div>
      <div>Regret</div>
      <div className="main">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
