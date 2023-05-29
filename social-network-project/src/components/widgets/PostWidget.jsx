import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  ShareSharp,
  ChatBubble
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme, useMediaQuery, colors } from "@mui/material";
import FlexBetween from "../FlexBetween";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useEffect, useState } from "react";
import _ from "lodash";
import "../../styles/postWidget.css"
// import { useDispatch, useSelector } from "react-redux";
// import { setPost } from "state";


import img from "../../assets/images/user_default.png"
import img2 from "../../assets/images/network-1.jpg"
import { Spinner } from "react-bootstrap";
import PostBoxPlaceholder from "../potentialPost";
const PostWidget = ({
  postId,
  postUserId,
  image,
  message,
  comments,
}) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"))
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [isComments, setIsComments] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [post, setPost] = useState({});
  const [color, setColor] = useState("");
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.token);
  // const loggedInUserId = useSelector((state) => state.user._id);
  // const isLiked = Boolean(likes[loggedInUserId]);

  const main = "black";
  const primary = "var(--primary)";
  const secondary = "var(--secondary)";
  const colors =['chocolate', "indigo","purple","darkblue","green","crimson","olive"]

  const patchLike = async () => {
    if (isLiked) {
      const response = await fetch(`https://friendly-post-service.onrender.com/api/unlike-post/${postId}`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },	
        body: JSON.stringify({ userId: loggedUser._id }),
      });
      const res = await response.json();
      console.log(res);
      // setIsLiked(false)
    }
    else{
      const response = await fetch(`https://friendly-post-service.onrender.com/api/like-post/${postId}`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },	
        body: JSON.stringify({ userId: loggedUser._id }),
      });
      const res = await response.json();
      console.log(res);
    }
    getPost()
  };
  
  const getPost = async () => {
    const response = await fetch(`https://friendly-post-service.onrender.com/api/${postId}`, {
      method: "GET",
      // headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPost(data.post);
    if (data.post.likers.includes(loggedUser._id)) {
        setIsLiked(true)
    }
    // dispatch(setPosts({ posts: data }));
    setIsLiking(false)
  };
  const randomColor = () => {
    var item = colors[Math.floor(Math.random()*colors.length)];
    return item
  };

  
  
  useEffect(() => {
    getPost();
  }, [0]);

  return (
    _.isEmpty(post)  ?
    <PostBoxPlaceholder/>:
    <WidgetWrapper 
    m="2rem 0"
  >
    <Friend
      friendId={postUserId}
      userPicturePath={img2}
    />
    {image[0] !== "null" ?
    (
      <>
        <Typography color={main} sx={{ mt: "1rem", p:"0.2rem 0.8rem",  borderLeft:"3px dashed gray",textAlign:"start" }}>
          {message}
        </Typography>
        <div style={{width:"100%",height:"20rem",display:"flex", margin:"0.3rem 0",justifyContent:"center", alignItems:"center"}}>
          <img
            width= "100%"
            height= "300rem"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem", 
            objectFit: "cover" }}
            src={image[0]}
          />
        </div>
      </>
    )
    : (
      <div onClick={() => {
            var c = randomColor()
              setColor(c)
          }} className="no-image-post" style={{width:"100%",height:"20rem", backgroundColor:color,display:"flex", margin:"1rem 0",justifyContent:"center", alignItems:"center"}}>
        <div>
          <p  style={{fontWeight: "700", fontSize:"30px", color:"white"}}>{message}</p>
        </div>
      </div>
    )}

    <FlexBetween mt="0.5rem" borderRight="3px dashed var(--primary)">
      <FlexBetween gap="2rem" margin="0 auto"  width={"95%"}>
        <FlexBetween gap="0.3rem">
          
        </FlexBetween>

        <FlexBetween gap="0.3rem">
        </FlexBetween>
        <FlexBetween>
          <IconButton 
          // onClick={patchLike}
          
          >
            <FavoriteOutlined sx={{ color: primary, marginRight:"0.5rem" }} />
            {
              isLiking?
              <Spinner size="sm"/>:
              <Typography>{post.likers.length}</Typography>
            }
          </IconButton>
          
          <IconButton onClick={() => setIsComments(!isComments)}>
            <ChatBubble sx={{ color: primary, marginRight:"0.5rem" }}/>
            <Typography>{comments.length}</Typography>
          </IconButton>
          {isShared?
          <IconButton>
            <ShareSharp sx={{ color: primary }}/>
          </IconButton>:
          <IconButton>
            <ShareOutlined />
          </IconButton>
          }
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>

    <FlexBetween mt="0.5rem"  borderLeft="3px dashed var(--secondary)">
      <FlexBetween gap="2rem" width={"60%"}>
        <FlexBetween gap="0.3rem">
          <IconButton 
          onClick={() => {
            setIsLiked(!isLiked)
            setIsLiking(true)
            patchLike()
          }}
            style={{padding:"0.2rem 0.5rem"}}
          >
            {isLiked ? (
              <>
                <FavoriteOutlined sx={{ color: secondary, marginRight:"0.3rem" }} />
                <Typography sx={{ color: secondary }}>Liked</Typography>
              </>
            ) : (
              <>
                <FavoriteBorderOutlined sx={{ marginRight:"0.3rem" }} />
                <Typography>Like</Typography>
              </>
            )}
          </IconButton>
        </FlexBetween>

        <FlexBetween gap="0.3rem">
          <IconButton onClick={() => setIsComments(!isComments)}
            style={{width:"100%", borderRadius:"1rem"}}>
            <ChatBubbleOutlineOutlined sx={{ marginRight:"0.3rem" }}/>
            <Typography>Comment</Typography>
          </IconButton>
        </FlexBetween>
        <FlexBetween>
          {isShared?
          <IconButton
          style={{width:"100%"}}>
            <ShareSharp sx={{ color: secondary, marginRight:"0.3rem" }}/>
            <Typography sx={{ color: secondary }}>Shared</Typography>
          </IconButton>:
          <IconButton>
            <ShareOutlined  sx={{ marginRight:"0.3rem" }}/>
            <Typography>Share</Typography>
          </IconButton>
          }
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
    {isComments && (
      <Box mt="0.5rem">
        {comments.map((comment, i) => (
          <Box key={`${"Essi"}-${i}`}>
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
