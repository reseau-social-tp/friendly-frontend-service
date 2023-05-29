import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
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
const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const [followings, setFollowings] = useState([]);
  const [isFollowings, setIsFollowings] = useState(false);
  const [date, setDate] = useState("");
  // const { _id } = useSelector((state) => state.user);
  // const token = useSelector((state) => state.token);
  // const friends = useSelector((state) => state.user.friends);
  
    const [friend, setFriend] = useState({});
    const [isFriend, setIsFriend] = useState(false);
    const [users, setUsers] = useState([]);
    
    // const isFriend = friends.find((friend) => friend._id === friendId);

    const primary = "var(--primary)";
    const secondary = "var(--secondary)";
    const secondaryDiluted = "var(--secondary-diluted)";
  
    const follow = async (id) => {
      const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}/follow`, {
          // const response = await fetch("https://social-network-auth-service.onrender.com/users", {
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
      const response = await fetch(
        `https://social-network-auth-service.onrender.com/api/user/${friendId}`,
        {
          method: "GET"
        }
      );
      const data = await response.json();
      setFriend(data.user)
      
      var array = []
      for (let index = 0; index < user.following.length; index++) {
          if (user.following[index]._id === friend._id) {
              setIsFriend(true)
          } 
      }
    };

    const getUsers = async () => {
      // const response = await fetch(`http://localhost:5000/api/users/`, {
      const response = await fetch(`https://social-network-auth-service.onrender.com/api/users/${user._id}`, {
      method: "GET"
      // headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUsers(data.users);
      getFriend()
      var array = []
        for (let index = 0; index < data.users.length; index++) {
            if (data.users[index]._id === user._id) {
                localStorage.setItem("user", JSON.stringify(data.users[index]))
                for (let i = 0; i < data.users[index].following.length; i++) {
                    array.push(data.users[index].following[i]);
                    
                }
            }
            
        }
        setFollowings(array)
      // dispatch(setPosts({ posts: data }));
  };
  const unFollow = async (id) => {
    // const response = await fetch(`http://localhost:5000/api/user/${id}/unfollow`, {
      const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}/unfollow`, {
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
      if (!(_.isEmpty(friend))){
        // console.log(friend.createdAt)
        setDate(formatDate(Date.parse(friend.createdAt)))
        

      }
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
      {
        isFollowings?
        <Spinner size="sm"/>:
        <IconButton
          // onClick={() => patchFriend()}
          sx={{ backgroundColor: secondaryDiluted, p: "0.6rem" }}
          >
          {followings.includes(friendId)? (
            <PersonRemoveOutlined sx={{ color: primary }} onClick={() => {
              setIsFollowings(true)
              unFollow(friendId)
            }}/>
          ) : (
            <PersonAddOutlined sx={{ color: secondary }} onClick={() => {
              setIsFollowings(true)
              follow(friendId)
            }}/>
          )}
        </IconButton>
      }
    </FlexBetween>
  );
};

export default Friend;
