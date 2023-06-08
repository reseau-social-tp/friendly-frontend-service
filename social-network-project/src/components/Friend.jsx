import { Menu, MoreVert, PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,  } from "react-router-dom";
import { useEffect, useState } from "react";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { Spinner } from "react-bootstrap";
import _ from "lodash";
import FriendBoxPlaceholder from "./potentialFriend";

import { formatDate } from "../utils";
import ContainerC from "./Container";
import ProfilePic from "./Setting/ProfilePicture";
import PostAction from "./Setting/PostActions";
const Friend = ({ friendId, isProfile, postId, postImage, createdAt }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const [followings, setFollowings] = useState([]);
  const [isFollowings, setIsFollowings] = useState(false);
  const [date, setDate] = useState("");
  
    const [friend, setFriend] = useState({});
    const [isFriend, setIsFriend] = useState(false);
    const [users, setUsers] = useState([]);
    
    // const isFriend = friends.find((friend) => friend._id === friendId);

    const primary = "var(--primary)";
    const secondary = "var(--secondary)";
    const secondaryDiluted = "var(--secondary-diluted)";
  
    const follow = async (id) => {

      const response = await fetch(`http://localhost:5000/api/user/${id}/follow`, {
        // const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}/follow`, {
      method: "PATCH",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },	

      // Fields that to be updated are passed
      body: JSON.stringify({
          _id: user._id
      })
      // headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      // setUsers(data.users);
      // dispatch(setPosts({ posts: data }));
      getUsers()
      setIsFollowings(false)
  };
  
    const getFriend = async () => {
      if (user._id !== friendId) {
        for (let index = 0; index < user.following.length; index++) {
          if (user.following[index]._id === friendId) {
              setIsFriend(true)
              setFriend(user.following[index])
            } 
        }
      }else{
        setFriend(user)
      }
    }

    const getUsers = async () => {
      const response = await fetch(`http://localhost:5000/api/users/${user._id}`, {
      // const response = await fetch(`https://social-network-auth-service.onrender.com/api/users/${user._id}`, {
      method: "GET"
      // headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUsers(data.users);
      getFriend()
      
      
      const res = await fetch(`http://localhost:5000/api/user/${user._id}`, {
        // const res = await fetch(`https://social-network-auth-service.onrender.com/api/user/${user._id}`, {
        method: "GET"
    // headers: { Authorization: `Bearer ${token}` },
    });
    const data2 = await res.json();
    localStorage.setItem("user", JSON.stringify(data2.user))

    var array = []
    for (let index = 0; index < data2.user.following.length; index++) {
        array.push(data2.user.following[index]._id);
    }
    
    setFollowings(array)
      // dispatch(setPosts({ posts: data }));
  };
  const unFollow = async (id) => {
    const response = await fetch(`http://localhost:5000/api/user/${id}/unfollow`, {
      // const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}/unfollow`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },	
        
        body: JSON.stringify({
          _id: user._id
        })
      });
      const data = await response.json();
      console.log(data)
      getUsers()
      setIsFollowings(false)
    };
    const getDate = async () => {
        setDate(formatDate(Date.parse(createdAt)))
    };
      
      useEffect(() => {
        getFriend();
        
        if (!(_.isEmpty(friend))){
          getUsers();
          getDate()
        }

      }, [friend]);
  return (
    _.isEmpty(friend)  ?
    <FriendBoxPlaceholder/>:
    <FlexBetween>
      <FlexBetween gap="1rem">     
        <Link to={`/profile/${friend._id}`} style={{textDecoration:"none"}}>
          <UserImage image={friend.avatar}/>
        </Link>
        
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color="black"
            variant="h7"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: primary,
                cursor: "pointer",
              },
            }}
          >
            {friend.username}
          </Typography>
          <Typography color={primary} fontSize="0.75rem">
            {date}
          </Typography>
        </Box>
      </FlexBetween>

      { isProfile && user._id === friend._id?
        (
          <ContainerC component={<IconButton
            onClick={() => {
              // setIsFollowings(true)
              // unFollow(friendId)
            }}
            sx={{ backgroundColor: secondaryDiluted, p: "0.6rem" }}>
          
            <MoreVert sx={{ color: secondary }} />
          </IconButton>} formToDisplay={<PostAction image={postImage} postId={postId}/>} heading="Post actions"/>
          ):
        (isFollowings?
        <Spinner size="sm"/>:
        isFriend?
          <IconButton
            onClick={() => {
              setIsFollowings(true)
              unFollow(friendId)
            }}
            sx={{ backgroundColor: secondaryDiluted, p: "0.6rem" }}>
          
            <PersonRemoveOutlined sx={{ color: primary }} />
          </IconButton>
           : 
           <IconButton
             onClick={() => {
              setIsFollowings(true)
              follow(friendId)
            
             }}
             sx={{ backgroundColor: secondaryDiluted, p: "0.6rem" }}>
           
             <PersonAddOutlined sx={{ color: secondary }} />
           </IconButton>
        )
      }
    </FlexBetween>
  );
};

export default Friend;
