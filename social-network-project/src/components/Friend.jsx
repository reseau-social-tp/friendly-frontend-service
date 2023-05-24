import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate,  } from "react-router-dom";
import { useEffect, useState } from "react";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
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
  
  
    const getFriend = async () => {
      const response = await fetch(
        `http://localhost:5000/api/user/${friendId}`,
        {
          method: "GET"
        }
      );
      const data = await response.json();
      console.log(data.user);
      setFriend(data.user)
      
      var array = []
      for (let index = 0; index < user.following.length; index++) {
          if (user.following[index]._id === friend._id) {
              setIsFriend(true)
          } 
      }
    };
    
    
    const getUsers = async () => {
      const response = await fetch(`http://localhost:5000/api/users/`, {
          // const response = await fetch("https://social-network-auth-service.onrender.com/users", {
      method: "GET"
      // headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUsers(data.users);
      getFriend()
      // dispatch(setPosts({ posts: data }));
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
          _id: user._id
      })
      });
      const data = await response.json();
      console.log(data)
      getUsers()
  };

  useEffect(() => {
    getFriend();
  }, []);
  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
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
            {friend.updatedAt}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        // onClick={() => patchFriend()}
        sx={{ backgroundColor: secondaryDiluted, p: "0.6rem" }}
        >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primary }} onClick={() => unFollow(friendId)}/>
        ) : (
          <PersonAddOutlined sx={{ color: secondary }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
