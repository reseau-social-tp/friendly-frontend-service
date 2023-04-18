import {React, Outlet, Link} from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import TopNav from "../TopNav"
import Navbar from "../navbar"
import "./style.css"
import HomeSidebar from "../HomeSidebar";
const Layout = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    
    <Box
    sx={{backgroundColor:"var(--secondary-diluted)"}}>
      <Navbar />
      <Box
        width="100%"
        padding={isNonMobileScreens ? "1rem 1.5%" : "1rem 5%"}
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        sx={{backgroundColor:"var(--secondary-diluted)", position:"relative"}}
      >
        <Box
          height="80vh"
          flexBasis={isNonMobileScreens ? "26%" : undefined}  
          sx={isNonMobileScreens ? {position:"fixed", width:"25vw"}:{display:"none"}}
        >
            <HomeSidebar/>
            {/* <UserWidget userId={_id} picturePath={toko} /> */}
        </Box>
        
        <Outlet/>
      </Box>
    </Box>
    // <div className="layout">
    //   <Navbar/>
    //   <div className="main">
    //     <LeftSidebar/>
    //     <Outlet/>
    //     <RightSidebar/>
    //   </div>
    // </div>
  );
};

export default Layout;
