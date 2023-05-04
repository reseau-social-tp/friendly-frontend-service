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
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPosts } from "state";

const MyPostWidget = ({ picturePath }) => {
  // const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  // const { _id } = useSelector((state) => state.user);
  // const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const primary = "var(--primary)";
  const secondary = "var(--secondary)";

  // const handlePost = async () => {
  //   const formData = new FormData();
  //   formData.append("userId", _id);
  //   formData.append("description", post);
  //   if (image) {
  //     formData.append("picture", image);
  //     formData.append("picturePath", image.name);
  //   }

  //   const response = await fetch(`http://localhost:3001/posts`, {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${token}` },
  //     body: formData,
  //   });
  //   const posts = await response.json();
  //   dispatch(setPosts({ posts }));
  //   setImage(null);
  //   setPost("");
  // };

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
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
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
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
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
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
          disabled={!post}
          // onClick={handlePost}
          style={{
            color: "white",
            backgroundColor: "var(--primary)",
            borderRadius: "3rem",
            width:"5rem",
            cursor:"pointer"
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
