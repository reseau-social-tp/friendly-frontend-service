import {React, useState} from "react";

import { NavLink } from "react-router-dom";
// import navLinks from "../assets/navLinks";
import "./style.css";

const Sidebar = () => {
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
    <div className="sidebar" style={{ width: navWidth.navwidth }}>
      <div className="sidebar__top">
        <h2>
          <span onClick={closeNav}>
          </span>{" "}
          bus-tickets
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {/* {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))} */}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span>
            <i class="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
