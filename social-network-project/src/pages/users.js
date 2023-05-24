import '../styles/users.css';
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";
import userDefault from "../assets/images/user_default.png"

import UserWidget from "../components/widgets/UserWidget";
import MyPostWidget from "../components/widgets/MyPostWidget";
import PostsWidget from "../components/widgets/PostsWidget";
import AdvertWidget from "../components/widgets/AdvertWidget";
import RelatedToListWidget from "../components/widgets/RelatedToListWidget";
import HomeSidebar from "../components/HomeSidebar";
import WidgetWrapper from '../components/WidgetWrapper';
import { Button } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
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
        const response = await fetch(`http://localhost:5000/api/users/`, {
            // const response = await fetch("https://social-network-auth-service.onrender.com/users", {
        method: "GET"
        // headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        console.log(data.users)
        console.log(loggedUser.username)
        setUsers(data.users);

        var array = []
        for (let index = 0; index < data.users.length; index++) {
            if (data.users[index]._id === loggedUser._id) {
                localStorage.setItem("user", JSON.stringify(data.users[index]))
                for (let i = 0; i < data.users[index].following.length; i++) {
                    array.push(data.users[index].following[i]);
                    
                }
            }
            
        }
        setFollowings(array)
        setIsLoading(false)
        // dispatch(setPosts({ posts: data }));
    };
    const follow = async (id) => {
        const response = await fetch(`http://localhost:5000/api/user/${id}/follow`, {
            // const response = await fetch("https://social-network-auth-service.onrender.com/users", {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },	

        // Fields that to be updated are passed
        body: JSON.stringify({
            _id: loggedUser._id
        })
        // headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        console.log(data)
        // setUsers(data.users);
        // dispatch(setPosts({ posts: data }));
        getUsers()
        setIsFollowing(false)
    };
    const unFollow = async (id) => {
        const response = await fetch(`http://localhost:5000/api/user/${id}/unfollow`, {
            // const response = await fetch("https://social-network-auth-service.onrender.com/users", {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },	

        body: JSON.stringify({
            _id: loggedUser._id
        })
        });
        const data = await response.json();
        console.log(data)
        getUsers()
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
                                <UserBox.Placeholder count={20}/>:
                                users.map((user) => (
                                    <UserBox user={user} pic={userDefault} list={followings} followMethod={follow} unFollowMethod={unFollow}/>
                                    // <div className="user-item">
                                    //     <img src={userDefault} alt='profile' className='user-img'/>
                                    //     <Typography margin="0.5rem 0" >{user.username}</Typography>
                                    //     <div className="user-buttons">
                                    //         {
                                    //            followings.includes(user._id) ?
                                    //             <Button variant="danger" style={{width:"100%",margin:"0.1rem 0"}} onClick={() => {
                                    //             follow(user._id)
                                    //             const index = users.indexOf(user);
                                    //             console.log(followings)
                                    //             // if (index > -1) {
                                    //             //     var array = users 
                                    //             //     array.splice(index, 1)
                                    //             //     setUsers(array); 
                                    //             // }
                                    //         } }>Un Follow</Button>:
                                    //         <Button variant="outline-primary" style={{width:"100%",margin:"0.1rem 0"}} onClick={() => {
                                    //             setIsFollowing(true)
                                    //             follow(user._id)
                                    //         } }>
                                    //             {isFollowing ? 
                                    //             <CircularProgress/>:
                                    //             <>Follow</>}</Button>
                                    //         }
                                        
                                    //     </div>
                                    // </div>
                                ))

                            }
                        
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}
