import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  ShareSharp
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "../FlexBetween";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPost } from "state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [isComments, setIsComments] = useState(true);
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.token);
  // const loggedInUserId = useSelector((state) => state.user._id);
  // const isLiked = Boolean(likes[loggedInUserId]);
  const isLiked = true
  const isShared = true
  const likeCount = Object.keys(likes).length;

  const main = "black";
  const primary = "var(--primary)";
  const secondary = "var(--secondary)";

  // const patchLike = async () => {
  //   const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId: loggedInUserId }),
  //   });
  //   const updatedPost = await response.json();
  //   dispatch(setPost({ post: updatedPost }));
  // };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem", p:"0.2rem 0.8rem", borderRadius:"5rem", backgroundColor:"var(--secondary-diluted)",textAlign:"start" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={picturePath}
        />
      )}
      <FlexBetween mt="0.5rem">
        <FlexBetween gap="2rem">
          <FlexBetween gap="0.3rem">
            <IconButton 
            // onClick={patchLike}
            >
              {isLiked ? (
                <>
                  <FavoriteOutlined sx={{ color: primary }} />
                  <Typography sx={{ color: primary }}>Liked</Typography>
                </>
              ) : (
                <>
                  <FavoriteBorderOutlined />
                  <Typography>Like</Typography>
                </>
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
              <Typography>Comment</Typography>
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
          <FlexBetween>
            {isShared?
            <IconButton>
              <ShareSharp sx={{ color: primary }}/>
              <Typography sx={{ color: primary }}>Shared</Typography>
            </IconButton>:
            <IconButton>
              <ShareOutlined />
              <Typography>Share</Typography>
            </IconButton>
            }
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
