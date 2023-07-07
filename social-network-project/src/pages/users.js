import '../styles/users.css';
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";
import userDefault from "../assets/images/user_default.png"

import HomeSidebar from "../components/HomeSidebar";
import 'react-loading-skeleton/dist/skeleton.css'
import UserBox from '../components/potentialUser';

export default function Users(props) {
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const [users, setUsers] = useState([]);
    const [followings, setFollowings] = useState([]);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const getUsers = async () => {
        // const response = await fetch(`http://localhost:5000/api/users/${loggedUser._id}`, {
        const response = await fetch(`https://social-network-auth-service.onrender.com/api/users/${loggedUser._id}`, {
        method: "GET"
        // headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUsers(data.users);
        
        // const res = await fetch(`http://localhost:5000/api/user/${loggedUser._id}`, {
            const res = await fetch(`https://social-network-auth-service.onrender.com/api/user/${loggedUser._id}`, {
            method: "GET"
        // headers: { Authorization: `Bearer ${token}` },
        });
        const data2 = await res.json();
        localStorage.setItem("user", JSON.stringify(data2.user))

        var array = []
        for (let index = 0; index < data2.user.following.length; index++) {
            array.push(data2.user.following[index]._id);
        }
        
        console.log(array)
        setFollowings(array)
        setIsLoading(false)
        // dispatch(setPosts({ posts: data }));
    };
  
    useEffect(() => {
        setIsLoading(true)
        getUsers();
    }, []);

    return (
        <Box 
        width="100%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        sx={{ position:"relative"}}>
            
            <Box
                height="80vh"
                flexBasis={isNonMobileScreens ? "26%" : undefined}  
                sx={isNonMobileScreens ? {position:"fixed", width:"25vw"}:{display:"none"}}
            >
                <HomeSidebar/>
                {/* <UserWidget userId={_id} picturePath={toko} /> */}
            </Box>
            <Box height="80vh"
                flexBasis={isNonMobileScreens ? "26%" : undefined}  
                sx={isNonMobileScreens ? {width:"25vw"}:{display:"none"}}     
            ></Box>

            <Box flexBasis={isNonMobileScreens ? "74%" : undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
                sx={isNonMobileScreens ? {width:"75vw"}:{width:"100vw"}}
                // height= {isNonMobileScreens? "100%": "100vh"}
            >
                <Box 
                margin={isNonMobileScreens ? "1rem 1.5%" : "0 5%"}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography 
                        backgroundColor="var(--primary-diluted)"
                        width="80%"
                        fontSize="2rem"
                        padding="0.2rem 1rem">You can know...</Typography>
                    <Box
                        width="90%"
                        height="90%"
                        className="users-container">
                            {
                                isLoading ?
                                <UserBox.Placeholder count={9}/>:
                                users.map((user) => (
                                    <UserBox user={user} list={followings} getUsers={getUsers}/>
                                ))

                            }
                        
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}
