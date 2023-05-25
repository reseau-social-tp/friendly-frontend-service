import {React, Outlet, Link} from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../navbar"
import "./style.css"
const Layout = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  
  return (
    <Box
      sx={{backgroundColor:"var(--secondary-diluted)"}}>
      <Navbar />
      <Box
        width="100%"
        // height="200vh"
        gap="0.5rem"
        justifyContent="center"
        sx={{position:"relative"}}
      >        
        <Outlet/>
      </Box>
    </Box>
  );
};

export default Layout;
