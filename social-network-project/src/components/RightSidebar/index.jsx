import {React, useState} from "react";

import { NavLink } from "react-router-dom";
import navLinks from "../../assets/navLinks";
import userIcon from "../../assets/images/user.svg"
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const LeftSidebar = () => {
    const [navWidth, setNavWidth] = useState([]);

    const openNav = () => {
      setNavWidth({
          navwidth: '260px'
      });
  }

  const closeNav = () => {
      setNavWidth({
          navwidth: '30px'
      });
  }
  return (
        <div className="r-sidebar">
          <div className="r-sidebarRow">
            <img class="user-avatar" src={userIcon} alt="User icon"/>
            <h4>Username</h4>
          </div>
          {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className="r-sidebarRow" key={index}
                >
                  <div className="icon-container">
                    <FontAwesomeIcon
                    icon={item.icon}
                    color="var(--primary)"
                    className="nav-icons"
                    /> 
                  </div>
                  <div>
                    <h4>{item.display}</h4>
                  </div>
                </NavLink>
            ))}

          <div className="r-sidebarRow">
            <span className="material-icons"> expand_more </span>
            <h4>More</h4>
          </div>
        </div>
    // <div classNameName="sidebar" style={{ width: navWidth.navwidth }}>
    //   <div classNameName="sidebar__top">
    //     <h2>
    //       <span onClick={closeNav}>
    //       </span>{" "}
    //       bus-tickets
    //     </h2>
    //   </div>

    //   <div classNameName="sidebar__content">
    //     <div classNameName="menu">
    //       <ul classNameName="nav__list">
    //         {navLinks.map((item, index) => (
    //           <li classNameName="nav__item" key={index}>
    //             <NavLink
    //               to={item.path}
    //               classNameName={(navclassName) =>
    //                 navclassName.isActive ? "nav__active nav__link" : "nav__link"
    //               }
    //             >
    //               <FontAwesomeIcon
    //               icon={item.icom}
    //               color="var(--primary)"
    //               classNameName="icon"
    //               />  

    //               {item.display}
    //             </NavLink>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <div classNameName="sidebar__bottom">
    //       <span>
    //         <i className="ri-logout-circle-r-line"></i> Logout
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LeftSidebar;
