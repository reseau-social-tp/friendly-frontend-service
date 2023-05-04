import React,{ useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import navLinks from "../../assets/navLinks";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  ChatSharp,
  Notifications,
  Menu,
  Close,

} from "@mui/icons-material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";
import logo from "../../assets/images/logo2.png"
import userIcon from "../../assets/images/user_default.png"
import "./style.css"

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const fullName = "NDANG ESSI Pierre Junior";

  return (
    <FlexBetween padding="1rem 6%" class="header" backgroundColor={"white"}>
      <FlexBetween gap="1.75rem" class="header-left">
        <Link><img src={logo} alt="Logo" className="logo-icon" style={{height:"2.5rem", padding:"0 1rem"}} /></Link>
        {isNonMobileScreens ?
          <FlexBetween
            borderRadius="0.5rem"
            gap="1rem"
            padding="0rem 0.5rem"
            marginLeft="1rem"
            backgroundColor="var(--secondary-diluted)"
          >
            <InputBase placeholder="Search on Friendly..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>:
          <FlexBetween
            borderRadius="0.5rem"
            gap="1rem"
            padding="0.5rem 0.5rem"
          >
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        }
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <>
          <FlexBetween gap="1.5rem" sx={{padding:"0 0.5rem"}}>
            <Typography 
              sx={{
                backgroundColor:"var(--secondary-diluted)",
                cursor:"pointer",
                padding: "0.4rem 0rem", 
                fontWeight: "bold",
                width: "7rem",
                borderRadius:"0.5rem"
              }}>Meet friends</Typography>
            <Link to="/home" >
                <FontAwesomeIcon
                icon={faHome}
                color="var(--primary)"
                className="nav-icon option"
                style={{ fontSize: "1.5rem", padding:"0.5rem" }} 
                /> 
            </Link>
            <ChatSharp style={{ fontSize: "3rem", color: "var(--primary)" }} className="nav-icon option"/>
            <Notifications style={{ fontSize: "3rem",color: "var(--primary)" }} className="nav-icon option"/>
            <FormControl variant="standard" value={fullName} 
              style={{display:"flex",flexDirection:"row"}}>
              
              <div class="profile-info">
                  <img class="user-avatar" src={userIcon} alt="User icon" width={"50px"}/>
              </div>
              <Select
                sx={{
                  backgroundColor: "white",
                  width: "50px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: "white",
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem>Log Out</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </>
      ) : (
        <FlexBetween gap="1rem">
          <ChatSharp sx={{ fontSize: "3rem", color: "var(--primary)" }} className="nav-icon option"/>
          <Notifications sx={{ fontSize: "3rem",color: "var(--primary)" }} className="nav-icon option"/>
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu />
          </IconButton>
        </FlexBetween>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={"white"}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="1rem"
          >
            {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className="navbarRow" key={index}
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
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
