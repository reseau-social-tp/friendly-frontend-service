import {React, Outlet, Link} from "react-router-dom";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopNav from "../TopNav"
import "./style.css"
const Layout = () => {

  return (
    <div className="layout">
      <TopNav/>
      <div className="main">
        <LeftSidebar/>
        <Outlet/>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default Layout;
