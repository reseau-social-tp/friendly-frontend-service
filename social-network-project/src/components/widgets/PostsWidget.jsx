import { useEffect, useState } from "react";
import axios from "axios";
import PostBoxPlaceholder from "../potentialPost";
// import { useDispatch, useSelector } from "react-redux";
// import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ user, isProfile }) => {
  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const getPosts = async () => {
    var response = {}
    if (isProfile){
      console.log(user)
      response = await fetch(`http://localhost:5001/api/user/${user._id}`, {
        // response = await fetch(`https://friendly-post-service.onrender.com/api/user/${user._id}`, {
      method: "GET",
      // headers: { Authorization: `Bearer ${token}` },
      });
    }

    else{
      var followingsList = []
      for (let index = 0; index < user.following.length; index++) {
        const element = user.following[index]._id;
        followingsList.push(element)
      }
      
      response = await fetch(`http://localhost:5001/api/${followingsList}`, {
        // response = await fetch(`https://friendly-post-service.onrender.com/api/${followingsList}`, {
        method: "GET"
        // headers: { Authorization: `Bearer ${token}` },
      });
    }
    const data = await response.json();
    setPosts(data.posts);
    setIsLoading(false);
    // dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    setIsLoading(true)
      getPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    {isLoading ? (
        <PostBoxPlaceholder count={2}/>
      ):(
        posts.map(
          ({
            _id,
            posterId,
            pictures,
            message,
            comments,
            likers,
            createdAt,

          }) => (
            <PostWidget
              postId={_id}
              postUserId={posterId}
              image={pictures}
              message={message}
              comments={comments}
              likers={likers}
              createdAt={createdAt}
              isProfile={isProfile}
            />
          )
        )
    )

    }
      
    </>
  );
};

export default PostsWidget;
