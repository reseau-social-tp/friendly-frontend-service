import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
  MicOutlined,
  VideoFileOutlined

} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../UserImage";
import WidgetWrapper from "../WidgetWrapper";
import { useState, useEffect } from "react";
import imageCompression from 'browser-image-compression';
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setPosts } from "state";

const MyPostWidget = ({ user, isProfile}) => {

  // const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [message, setMessage] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const userId = user._id;
  
  // const { _id } = useSelector((state) => state.user);
  // const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const primary = "var(--primary)";
  const secondary = "var(--secondary)";

  
  const compressImage = async function(image){
    console.log(image);
    setImage(image);
    const imageFile = image
    const option = {
        maxSizeMB:0.05,
        maxWidthOrHeight:1000
    }
    try {
        const compressedFile = await imageCompression(imageFile, option)
        var reader = new FileReader()
        reader.readAsDataURL(compressedFile)
        reader.onload = () =>{
            console.log(reader.result);
            setImageData(reader.result)
            // setValue({...values,image: reader.result})
        }
        reader.onerror = error => {
            console.log("Error: ", error);
          };
    } catch (error) {
            console.log(error);
    }   
}

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("posterId", userId);
    formData.append("message", message);
    formData.append("image", imageData);

    // const response = await fetch(`http://localhost:5001/api`, {
    const response = await fetch(`https://friendly-post-service.onrender.com/api`, {
      method: "POST",
      // headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const post = await response.json();
    console.log(post);
    // dispatch(setPosts({ posts }));
    setImage(null);
    setMessage("");
    setIsPosting(false)
    // getPosts()
  };

  // const getPosts = async () => {
  //   const response = await fetch("http://localhost:5001/api", {
  //     // const response = await fetch("https://friendly-post-service.onrender.com/api", {
  //     method: "GET",
  //     // headers: { Authorization: `Bearer ${token}` },
  //   });
  //   const data = await response.json();
  //   // dispatch(setPosts({ posts: data }));
  // };

  // useEffect(() => {
  //   getPosts();

  // }, []);
  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <Link to={`/profile/${user._id}`} style={{textDecoration:"none"}}>
          <UserImage image={user.avatar} />
        </Link>
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          sx={{
            width: "100%",
            backgroundColor: "var(--secondary-diluted)",
            color:"var(--black)",
            borderRadius: "1.5rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${secondary}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => compressImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed var(--secondary)`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p style={{color:"var(--primary)"}}>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography sx={{color:"black"}}>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {imageData && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>

        {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25rem"  backgroundColor="rgb(223, 223, 223)" width="7rem" height="2rem" borderRadius="5rem" style={{justifyContent:"center"}} onClick={() => setIsImage(!isImage)}
                sx={{ color: "black", "&:hover": { cursor: "pointer", color: primary } }}>
              <ImageOutlined/>
              <Typography>Image</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem" backgroundColor="rgb(223, 223, 223)" width="7rem" height="2rem" borderRadius="5rem" style={{justifyContent:"center"}}
                sx={{ color: "black", "&:hover": { cursor: "pointer", color: primary } }}>
              <VideoFileOutlined />
              <Typography>Video</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem"  backgroundColor="rgb(223, 223, 223)" width="7rem" height="2rem" borderRadius="5rem" style={{justifyContent:"center"}}
                sx={{ color: "black", "&:hover": { cursor: "pointer", color: primary } }}>
              <MicOutlined />
              <Typography>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <>
            <FlexBetween gap="0.25rem"  backgroundColor="rgb(223, 223, 223)" width="4rem" height="2rem" borderRadius="5rem" style={{justifyContent:"center"}} onClick={() => setIsImage(!isImage)}
                sx={{ color: "black", "&:hover": { cursor: "pointer", color: primary } }}>
              <ImageOutlined/>
              <Typography>Img.</Typography>
            </FlexBetween>
            
            <FlexBetween gap="0.25rem"  backgroundColor="rgb(223, 223, 223)" width="4rem" height="2rem" borderRadius="5rem" style={{justifyContent:"center"}}
                sx={{ color: "black", "&:hover": { cursor: "pointer", color: primary } }}>
              <VideoFileOutlined/>
              <Typography>Vid.</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem"  backgroundColor="rgb(223, 223, 223)" width="4rem" height="2rem" borderRadius="5rem" style={{justifyContent:"center"}}
                sx={{ color: "black", "&:hover": { cursor: "pointer", color: primary } }}>
              <MicOutlined/>
              <Typography>Aud.</Typography>
            </FlexBetween>
          </>
        )}

        <Button
          disabled={!message}
          onClick={() => {
            setIsPosting(true)
            handlePost()
          }}
          style={{
            color: "white",
            backgroundColor: "var(--primary)",
            borderRadius: "3rem",
            width:"5rem",
            cursor:"pointer"
          }}
        >
          {isPosting ?
          <Spinner size="sm"/>
          : <span>POST</span>}
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
