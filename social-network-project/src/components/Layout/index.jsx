import {React, Outlet, Link} from "react-router-dom";
import TopNav from "../TopNav"
const Layout = () => {

  return (
    <div className="layout">
      <TopNav/>
      <div>Regret</div>
      <div className="main">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
