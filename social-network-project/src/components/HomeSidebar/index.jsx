import {React, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'

import { NavLink } from "react-router-dom";
import navLinks from "../../assets/navLinks";
import userIcon from "../../assets/images/user_default.png"
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HomeSidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  const navigate = useNavigate()
  // useEffect(() => {
  //     const verify = async () => {
  //         if (!localStorage.getItem("user")){
  //           navigate('/log-in')
  //         }
  //     }
  //     verify();
  // }, [navigate])

  const logout = () => {
    localStorage.removeItem("user")
  }

  return (
      
        <div className="sidebar">
          <Link to={`/profile/${user._id}`} style={{textDecoration:"none"}}>
            <div className="sidebarRow" onClick={() => navigate("/profile")}>
              <img class="user-avatar" src={user.avatar} alt="User icon"/>
              <h4 style={{fontSize:"1.5rem"}}>{user.username}</h4>
            </div>
          </Link>
          {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className="sidebarRow" key={index}
                >
                  <div className="icon-container">
                    <FontAwesomeIcon
                    icon={item.icon}
                    color={item.color}
                    className="nav-icons"
                    /> 
                  </div>
                  <div>
                    <h4>{item.display}</h4>
                  </div>
                </NavLink>
            ))}
                <NavLink
                  to={"/log-in"}
                  className="sidebarRow"
                  onClick={() => logout()}
                >
                  <div className="icon-container">
                    <FontAwesomeIcon
                    icon={faDoorOpen}
                    color={"blue"}
                    className="nav-icons"
                    /> 
                  </div>
                  <div>
                    <h4>Log Out</h4>
                  </div>
                </NavLink>
        </div>
  );
};

export default HomeSidebar;
