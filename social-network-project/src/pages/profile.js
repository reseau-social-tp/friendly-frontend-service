import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import WidgetWrapper from '../components/WidgetWrapper';
import {
    Edit,
  } from "@mui/icons-material";
import profile from "../assets/images/toko.jpg"

import "../styles/profile.css"

// React modules style
import 'react-toastify/dist/ReactToastify.css';
import ContainerC from '../components/Container';
import ProfilePic from '../components/Setting/ProfilePicture';
import ProfileInfo from '../components/Setting/ProfileInformations';
import { Box, useMediaQuery } from '@mui/material';
import MyPostWidget from '../components/widgets/MyPostWidget';
import PostsWidget from '../components/widgets/PostsWidget';
function MyProfile(props) {
    
    const user = JSON.parse(localStorage.getItem("user"))
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    // States for registration

    const [image, setImage] = useState('');
    
     const generateError = (err) =>
     toast.error(err, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "colored",
     })
     const generateSuccess = (msg) =>
     toast.success(msg, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "colored",
     })


    return (
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={0}
            sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "100vw", height: "100%"}}
        >
            <Box className='setting-container'>
                <div className='setting-content'>
                    <div className='setting-banner'>
                        <ContainerC component={<div className='setting-profile'>
                            <img src={profile} alt='profile pic' className='profile-picture'/> 
                        </div>} formToDisplay={<ProfilePic/>} heading="Profile Picture"/>
                    </div>
                    <div className='setting-info'>
                        <ContainerC component={<div className='edit'><Edit sx={{color:"gray", fontSize:"2.5rem", border:"0px solid white", borderRadius:"50%"}}/>
                        </div>} formToDisplay={<ProfileInfo/>} heading="Personal Information"/>      
                    </div>
                    <div className='infos'>
                        <h1>{user.username}</h1>
                        <h3>12 friends</h3>
                    </div>
                </div>
                <ToastContainer/>
            </Box>

            <Box 
                width="80vw"
                padding={isNonMobileScreens ? "1rem 1.5%" : "1rem 5%"}
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-evenly">
            
            <Box height="70vh"
                flexBasis={isNonMobileScreens ? "30%" : undefined}  
                sx={isNonMobileScreens ? {width:"25vw"}:{display:"none"}}
                backgroundColor="red"     
            >

            </Box>

            <Box flexBasis={isNonMobileScreens ? "50%" : undefined}
            >
                <MyPostWidget picturePath={profile} />
                <PostsWidget userId={user._id} />
            </Box>
        </Box>
        </Box>
    )
}

export default MyProfile
