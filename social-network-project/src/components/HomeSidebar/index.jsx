import {React, useState} from "react";

import { NavLink } from "react-router-dom";
import navLinks from "../../assets/navLinks";
import userIcon from "../../assets/images/user_default.png"
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HomeSidebar = () => {
  return (
        <div className="sidebar">
          <div className="sidebarRow">
            <img class="user-avatar" src={userIcon} alt="User icon"/>
            <h4>Username</h4>
          </div>
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
        </div>
  );
};

export default HomeSidebar;
