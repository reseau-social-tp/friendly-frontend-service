import {React, Outlet, Link} from "react-router-dom";
import { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../navbar"
import "./style.css"
import { ChatBubble, Message, MessageRounded, MessageSharp, MessageTwoTone } from "@mui/icons-material";
const Layout = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [toggle, setToggle] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  
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
        {
          isNonMobileScreens ?
          <div className="chat-box" style={toggle?{display:"flex"}:{display:"none"}}>
            <div className="list">
              <div className="title">
                <div>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center",width:"2rem", height:"2rem", borderRadius:"2rem", backgroundColor:"white"}}>
                    <img src={user.avatar} alt="Avatar" width={"30px"} height="30px" style={{borderRadius:"2rem"}}/>
                  </div>
                  <Typography className="heading">{user.username}</Typography>
                </div>
              </div>
              <div className="content">

              </div>
            </div>
            <div className="conversation">

            </div>
          </div>:
          <div className="chat-box-mobile" style={toggle?{display:"flex"}:{display:"none"}}>
            <div className="list">

            </div>
            <div className="conversation">

            </div>
          </div>
        }
        <div className="chat-toggle">
          <div className="toggle" onClick={() => setToggle(!toggle)}>
            <MessageSharp style={{fontSize:"0.5rem", width:"50%", height:"50%", color:"white"}}/>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Layout;
