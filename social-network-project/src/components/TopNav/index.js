import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap';
import "./style.css"
import logo from "../../assets/images/logo2.png"
import userIcon from "../../assets/images/user.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faFaceSmile,
    faPlayCircle,
    faFaceLaugh,
    faRectangleList,
    faUsers,
    faSearch,
    faCommenting,
    faBell,
    faUser,
    faFlag,
    faShop
} from '@fortawesome/free-solid-svg-icons'
import "./style.css"

const TopNav = () => {
    // let user = ''
    // if (localStorage.getItem('recho')) {
    //     user = JSON.parse(localStorage.getItem('recho'))
    // }
    // console.log(user);
    // const logout2 = () => {
    //     logout()
    // }
    return (
        <div class="header">
            <div class="header-left">
                <img src={logo} alt="Logo" className="logo-icon" style={{height:"3rem"}} />
                <div class="header-input">
                    <FontAwesomeIcon
                    icon={faSearch}
                    color="var(--primary)"
                    className="icon"
                    />  
                <input type="text" placeholder="Search on Friendly..." />
                </div>
            </div>

            <div class="header-middle">
                <div class="header-option active">
                    <FontAwesomeIcon
                    icon={faHome}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </div>
                <div class="header-option">
                    <FontAwesomeIcon
                    icon={faPlayCircle}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </div>
                <div class="header-option">
                    <FontAwesomeIcon
                    icon={faShop}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </div>
                <div class="header-option">
                    <FontAwesomeIcon
                    icon={faUsers}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </div>
                <div class="header-option">
                    <FontAwesomeIcon
                    icon={faFlag}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </div>
            </div>

            <div class="header-right">
                <FontAwesomeIcon
                icon={faRectangleList}
                color="var(--primary)"
                className="nav-icon option"
                /> 
                <FontAwesomeIcon
                icon={faCommenting}
                color="var(--primary)"
                className="nav-icon option"
                /> 
                <FontAwesomeIcon
                icon={faBell}
                color="var(--primary)"
                className="nav-icon option"/>
                <div class="profile-info">
                    <img class="user-avatar" src={userIcon} alt="User icon"/>
                </div>
            </div>
            </div>
    //     <div className="navbar">
    //         <Navbar sticky='top' expand="md" className="navbar-back-layer" >
    //             <Container className="navbar-container">
    //                 <Navbar.Brand className="utility">
    //                     <div className="utility-items">
    //                             <img src={logo} alt="Logo" className="logo-icon" style={{height:"3rem"}} />
                                
    //                             {/* <FontAwesomeIcon
    //                             icon={faFacebook}
    //                             color="var(--primary)"
    //                             className="logo-icon"
    //                             />   */}
    //                             <div class="search-input">
    //                                 <FontAwesomeIcon
    //                                 icon={faSearch}
    //                                 color="var(--primary)"
    //                                 className="icon"
    //                                 />  
    //                                 <input type="text" placeholder="Search on Friendly"/>
    //                             </div>
    //                     </div>
    //                 </Navbar.Brand>
    //                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark"/>
    //                 <Navbar.Collapse className='justify-content-end links-container'  id="basic-navbar-nav">
    //                     <Nav className="me-auto nav-links-container">

    //                         <div ></div>
    //                         <Nav.Link href="/home" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faHome}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                             <span>Home</span>
    //                       </Nav.Link>
    //                       <Nav.Link href="/home" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faFaceSmile}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                             <span>Friends</span>
    //                       </Nav.Link>
    //                       <Nav.Link href="/home" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faPlayCircle}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                             <span>Streaming</span>
    //                       </Nav.Link>
    //                       <Nav.Link href="/home" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faUsers}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                             <span>Groups</span>
    //                       </Nav.Link>
    //                   </Nav>
    //                   <Nav className="option-links-container">
    //                       <Nav.Link href="/" className="nav-links friends" >
    //                           <span>Meet friends</span>
    //                       </Nav.Link>
    //                       <Nav.Link href="/" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faRectangleList}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                       </Nav.Link>
    //                       <Nav.Link href="/" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faCommenting}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                       </Nav.Link>
    //                       <Nav.Link href="/" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faBell}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                       </Nav.Link>
    //                       <Nav.Link href="/" className="nav-links">
    //                             <FontAwesomeIcon
    //                             icon={faUser}
    //                             color="var(--primary)"
    //                             className="nav-icon option"
    //                             /> 
    //                       </Nav.Link>
    //                   </Nav>
    //               </Navbar.Collapse>
    //           </Container>
    //       </Navbar>
    //   </div>
    )
}

export default TopNav;