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
import { Box, Typography, useMediaQuery } from '@mui/material';
import MyPostWidget from "../components/widgets/MyPostWidget";
import PostsWidget from '../components/widgets/PostsWidget';
import ProfileBoxPlaceholder from '../components/potentialProfile';
import PostBoxPlaceholder from '../components/potentialPost';
import Skeleton from 'react-loading-skeleton';
import RelatedToListWidget from '../components/widgets/RelatedToListWidget';

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
        const response = await fetch(`http://localhost:5000/api/user/${id}`,
        // const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}`,
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
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={0}
            sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "100vw", height: "100%"}}
        >
            <ProfileBoxPlaceholder />

        </Box>:
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={0}
            sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", width: "100vw", height: "100%"}}
        >
            <Box className='setting-container'>
                <div className='setting-content'>
                    <div className='setting-banner' style={{backgroundImage: `url(${user.banner})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
                        <div className='setting-profile'>
                            <img src={user.avatar} alt='profile pic' className='profile-picture'/> 
                        </div>
                    </div>
                    <div className='setting-info'>
                        <ContainerC component={<div className='edit'><Edit sx={{color:"gray", fontSize:"2.5rem", border:"0px solid white", borderRadius:"50%"}}/>
                        </div>} formToDisplay={<ProfileInfo user={user}/>} heading="Personal Information"/>      
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
            
            <Box height="100vh"
                flexBasis={isNonMobileScreens ? "40%" : undefined}  
                sx={isNonMobileScreens ? {display:"flex"}:{display:"none"}}
                borderRadius={"1rem"}
                flexDirection="column"
                justifyContent={"start"}
                alignItems={"center"}
                padding={"0.5rem"}
            >
            <Box 
                height="30vh"
                width="90%"
            >
                <Typography 
                    width="100%"
                    margin="1rem 0"
                    backgroundColor="var(--secondary)"
                    textAlign="center"
                    color="white">About me</Typography>
                <table style={{width:"100%"}}>
                    <tr>
                        <td><Typography color="var(--secondary)">Name</Typography></td>
                        <td><Typography>{user.fullname}</Typography></td>
                    </tr>
                    <tr>
                        <td><Typography color="var(--secondary)">Email</Typography></td>
                        <td><Typography>{user.email}</Typography></td>
                    </tr>
                    <tr>
                        <td><Typography color="var(--secondary)">Phone</Typography></td>
                        <td><Typography>{user.mobile}</Typography></td>
                    </tr>
                    <tr>
                        <td><Typography color="var(--secondary)">Adresse</Typography></td>
                        <td><Typography>{user.address}</Typography></td>
                    </tr>
                    <tr>
                        <td><Typography color="var(--secondary)">Website</Typography></td>
                        <td><Typography>{user.website}</Typography></td>
                    </tr>
                    <tr>
                        <td><Typography color="var(--secondary)">Gender</Typography></td>
                        <td><Typography>{user.gender}</Typography></td>
                    </tr>
                    
                </table>


            </Box>
            <Box m="2rem 0" />
            <RelatedToListWidget list={user.followers} title={"My Followers"}/>
            <Box m="2rem 0" />
            <RelatedToListWidget list={user.following} title={"My Following"} />
    
            </Box>

            <Box flexBasis={isNonMobileScreens ? "50%" : undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                {
                    user._id !== loggedUser._id ? 
                    <></>:
                    <MyPostWidget user={user} isProfile={true}/>
                }
                <PostsWidget user={user} isProfile={true} />
            </Box>
            </Box>
        </Box>
    )
}

export default MyProfile
