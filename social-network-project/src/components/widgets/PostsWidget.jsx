import { useEffect, useState } from "react";
import PostBoxPlaceholder from "../potentialPost";
// import { useDispatch, useSelector } from "react-redux";
// import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  // const dispatch = useDispatch();
  // const posts = [
  //   {
  //     _id:1,
  //     userId:1,
  //     name:"A",
  //     description:"ASASASAS",
  //     location:"Yaounde",
  //     picturePath:img2,
  //     userPicturePath:img2,
  //     likes:20,
  //     comments:["Hi man","Ustanak","Hello nigga","Chipmunk"]
  //   },
  //   {
  //     _id:2,
  //     userId:2,
  //     name:"A",
  //     description:"Here in town",
  //     location:"Douala",
  //     picturePath:img2,
  //     userPicturePath:img2,
  //     likes:1120,
  //     comments:[],
  //   },
    
  // ]
  // const posts = useSelector((state) => state.posts);
  // const token = useSelector((state) => state.token);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    const response = await fetch("https://friendly-post-service.onrender.com/api", {
      method: "GET",
      // headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data);
    setIsLoading(false);
    // dispatch(setPosts({ posts: data }));
  };

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

  useEffect(() => {
    setIsLoading(true)
    if (isProfile) {
      // getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    {isLoading ? (
        <PostBoxPlaceholder count={5}/>
      ):(
        posts.map(
          ({
            _id,
            posterId,
            pictures,
            message,
            comments,
          }) => (
            <PostWidget
              postId={_id}
              postUserId={posterId}
              image={pictures}
              message={message}
              comments={comments}
            />
          )
        )
    )

    }
      
    </>
  );
};

export default PostsWidget;
