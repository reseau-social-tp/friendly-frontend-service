import '../styles/home.css';
import { Box, useMediaQuery } from "@mui/material";
import toko from "../assets/images/toko.jpg"
import pat from "../assets/images/pat.jpg"
import parfait from "../assets/images/parfait.jpg"
import {
    faThumbsUp,
    faMessage,
    faShare,
    faVideoCamera,
    faPhotoVideo,
    faFaceLaughBeam
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserWidget from "../components/widgets/UserWidget";
import MyPostWidget from "../components/widgets/MyPostWidget";
import PostsWidget from "../components/widgets/PostsWidget";
import AdvertWidget from "../components/widgets/AdvertWidget";
import FriendListWidget from "../components/widgets/FriendListWidget";

export default function Home(props) {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const _id = "123MD"

    return (
        <>
            <Box
            
            height="80vh"
            flexBasis={isNonMobileScreens ? "26%" : undefined}  
            sx={isNonMobileScreens ? {width:"25vw"}:{display:"none"}}     
            >
            </Box>
            <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
            >
            <MyPostWidget picturePath={pat} />
            <PostsWidget userId={_id} />
            </Box>
            {isNonMobileScreens && (
            <Box flexBasis="26%">
                <AdvertWidget />
                <Box m="2rem 0" />
                <FriendListWidget userId={_id} />
            </Box>
            )}
        </>
    );
}
