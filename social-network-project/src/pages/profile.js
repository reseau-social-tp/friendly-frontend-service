import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import WidgetWrapper from '../components/WidgetWrapper';
import {
    Edit,
  } from "@mui/icons-material";

import _ from "lodash";
import "../styles/profile.css"

// React modules style
import 'react-toastify/dist/ReactToastify.css';
import ContainerC from '../components/Container';
import ProfilePic from '../components/Setting/ProfilePicture';
import ProfileInfo from '../components/Setting/ProfileInformations';
import { Box, useMediaQuery } from '@mui/material';
import MyPostWidget from "../components/widgets/MyPostWidget";
import PostsWidget from '../components/widgets/PostsWidget';
import { Spinner } from 'react-bootstrap';

function MyProfile({match}) {
    
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    // States for registration

    const [image, setImage] = useState('');
    const [user, setUser] = useState({});
    
    const {id} = useParams();

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

     const getUser = async () => {
        const response = await fetch(
          `https://social-network-auth-service.onrender.com/api/user/${id}`,
          {
            method: "GET"
          }
        );
        const data = await response.json();
        setUser(data.user)
      };
     
    useEffect(() => {
        getUser();
    }, []);

    return (
        _.isEmpty(user)  ?
        <Spinner/>:
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={0}
            sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "100vw", height: "100%"}}
        >
            <Box className='setting-container'>
                <div className='setting-content'>
                    <div className='setting-banner' style={{backgroundImage: `url(${user.banner})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
                        <ContainerC component={<div className='setting-profile'>
                            <img src={user.avatar} alt='profile pic' className='profile-picture'/> 
                        </div>} formToDisplay={<ProfilePic/>} heading="Profile Picture"/>
                    </div>
                    <div className='setting-info'>
                        <ContainerC component={<div className='edit'><Edit sx={{color:"gray", fontSize:"2.5rem", border:"0px solid white", borderRadius:"50%"}}/>
                        </div>} formToDisplay={<ProfileInfo/>} heading="Personal Information"/>      
                    </div>
                    <div className='infos'>
                        <h1>{user.username}</h1>
                        <h3>{user.followers.length} followers - {user.following.length} Following</h3>
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
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                {
                    user._id !== loggedUser._id ? 
                    <></>:
                    <MyPostWidget/>
                }
                <PostsWidget user={user} isProfile={true} />
            </Box>
        </Box>
        </Box>
    )
}

export default MyProfile
