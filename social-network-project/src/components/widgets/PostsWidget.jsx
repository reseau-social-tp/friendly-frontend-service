import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPosts } from "state";
import PostWidget from "./PostWidget";
import img from "../../assets/images/user_default.png"
import img2 from "../../assets/images/network-1.jpg"

const PostsWidget = ({ userId, isProfile = false }) => {
  // const dispatch = useDispatch();
  const posts = [
    {
      _id:1,
      userId:1,
      name:"A",
      description:"ASASASAS",
      location:"Yaounde",
      picturePath:img2,
      userPicturePath:img2,
      likes:20,
      comments:["Hi man","Ustanak","Hello nigga","Chipmunk"]
    },
    {
      _id:2,
      userId:2,
      name:"A",
      description:"Here in town",
      location:"Douala",
      picturePath:img2,
      userPicturePath:img2,
      likes:1120,
      comments:[],
    },
    
  ]
  // const posts = useSelector((state) => state.posts);
  // const token = useSelector((state) => state.token);

  // const getPosts = async () => {
  //   const response = await fetch("http://localhost:3001/posts", {
  //     method: "GET",
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   const data = await response.json();
  //   dispatch(setPosts({ posts: data }));
  // };

  // const getUserPosts = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/posts/${userId}/posts`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setPosts({ posts: data }));
  // };

  // useEffect(() => {
  //   if (isProfile) {
  //     getUserPosts();
  //   } else {
  //     getPosts();
  //   }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          name,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${name}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
