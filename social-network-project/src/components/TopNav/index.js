import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from "../../assets/images/logo2.png"
import userIcon from "../../assets/images/user.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faPlayCircle,
    faRectangleList,
    faUsers,
    faSearch,
    faCommenting,
    faBell,
    faFlag,
    faShop,
} from '@fortawesome/free-solid-svg-icons'

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
                
                <Link to="/home" className="header-option active nav-links" >
                    <FontAwesomeIcon
                    icon={faHome}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </Link>
                <Link to="/home" class="header-option">
                    <FontAwesomeIcon
                    icon={faPlayCircle}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </Link>
                <Link to="/home" class="header-option">
                    <FontAwesomeIcon
                    icon={faShop}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </Link>
                <Link to="/groups" class="header-option">
                    <FontAwesomeIcon
                    icon={faUsers}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </Link>
                <Link to="/home" class="header-option">
                    <FontAwesomeIcon
                    icon={faFlag}
                    color="var(--primary)"
                    className="nav-icon option"
                    /> 
                </Link>
            </div>

            <div class="header-right">
                <Link to="/" className="nav-links friends" >
                    <span>Meet friends</span>
                </Link>
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
    )
}

export default TopNav;