import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { _id } = useSelector((state) => state.user);
  // const token = useSelector((state) => state.token);
  // const friends = useSelector((state) => state.user.friends);
  const friends = [
    {_id:1,name:"Cardilax" },
    {_id:2,name:"Luther" },
    {_id:3,name:"Adams" },
    {_id:4,name:"Cyrille" },
    {_id:5,name:"Walter" },
    {_id:6,name:"Jordan" },
    {_id:7,name:"Beerus" },]

  const primary = "var(--primary)";
  const secondary = "var(--secondary)";
  const secondaryDiluted = "var(--secondary-diluted)";

  const isFriend = friends.find((friend) => friend._id === friendId);

  // const patchFriend = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/users/${_id}/${friendId}`,
  //     {
  //       method: "PATCH",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setFriends({ friends: data }));
  // };

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
            {name}
          </Typography>
          <Typography color={primary} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        // onClick={() => patchFriend()}
        sx={{ backgroundColor: secondaryDiluted, p: "0.6rem" }}
        >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: "red" }} />
        ) : (
          <PersonAddOutlined sx={{ color: primary }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
