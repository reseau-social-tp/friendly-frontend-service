import {React, Outlet, Link} from "react-router-dom";
import Sidebar from "../Sidebar";
import TopNav from "../TopNav"
import "./style.css"
const Layout = () => {

  return (
    <div className="layout">
      <TopNav/>
      <div className="main">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
