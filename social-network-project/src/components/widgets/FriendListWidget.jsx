import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFriends } from "state";
import img from "../../assets/images/toko.jpg"

const FriendListWidget = ({ userId }) => {
  // const dispatch = useDispatch();
  // const { palette } = useTheme();
  // const token = useSelector((state) => state.token);
  const friends = [
    {_id:1,name:"Cardilax" },
    {_id:2,name:"Luther" },
    {_id:3,name:"Adams" },
    {_id:4,name:"Cyrille" },
    {_id:5,name:"Walter" },
    {_id:6,name:"Jordan" },
    {_id:7,name:"Beerus" },]

  // const getFriends = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/users/${userId}/friends`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setFriends({ friends: data }));
  // };

  // useEffect(() => {
  //   getFriends();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={"black"}
        backgroundColor={"var(--secondary-diluted)"}
        borderRadius={"5rem"}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friends
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.name}`}
            subtitle={"friend"}
            userPicturePath={img}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
