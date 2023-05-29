import '../styles/home.css';
import { Box, useMediaQuery } from "@mui/material";

import MyPostWidget from "../components/widgets/MyPostWidget";
import PostsWidget from "../components/widgets/PostsWidget";
import AdvertWidget from "../components/widgets/AdvertWidget";
import RelatedToListWidget from "../components/widgets/RelatedToListWidget";
import HomeSidebar from "../components/HomeSidebar";
import { useEffect } from 'react';

export default function Home(props) {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    
    var user = JSON.parse(localStorage.getItem("user"))
    // console.log(user)
    
    useEffect(() => {
        // user = JSON.parse(localStorage.getItem("user"))
    }, []);
    return (
        <Box 
        width="100%"
        padding={isNonMobileScreens ? "1rem 1.5%" : "1rem 5%"}
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        sx={{backgroundColor:"var(--secondary-diluted)", position:"relative"}}>
            
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

            <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
                // height= {isNonMobileScreens? "100%": "100vh"}
            >
                <MyPostWidget/>
                <PostsWidget user={user} isProfile={false}/>
            </Box>

            {isNonMobileScreens && (
                <Box flexBasis="26%">
                    <AdvertWidget />
                    <Box m="2rem 0" />
                    <RelatedToListWidget list={user.followers} title={"Followers"}/>
                    <Box m="2rem 0" />
                    <RelatedToListWidget list={user.following} title={"Following"} />
                </Box>
            )}
        </Box>
    );
}
