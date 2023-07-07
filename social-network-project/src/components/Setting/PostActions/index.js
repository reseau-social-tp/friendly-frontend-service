import {React, useState} from 'react';
import profile from "../../../assets/images/logo.png"
import {
    Edit,
    Delete,
    DoneOutlineOutlined
  } from "@mui/icons-material";

import "./style.css"
import { Spinner } from 'react-bootstrap';

export const PostAction
 = ({image, postId}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [deleted, setDeleted] = useState(false);
    
  const deletePost = async () => {
    var response = {}
    // response = await fetch(`http://localhost:5001/api/${postId}`, {
    response = await fetch(`https://friendly-post-service.onrender.com/api/${postId}`, {
    method: "DELETE",
    // headers: { Authorization: `Bearer ${token}` },
    });
    

    const data = await response.json();
    console.log(data);
    setIsLoading(false);
    setDeleted(true);
  };

    return (
        <div className='post-actions-container'>
            <div className='set-post'>
                <img src={image} alt='profile pic' className='post-picture'/>
            </div>
            <div className='set-post-options'>
                <div className='edit-option'>
                    <Edit sx={{fontSize:"2rem"}}/>
                    <span>Edit</span>
                </div>

                {
                    
                    deleted ?
                    <>
                    <DoneOutlineOutlined sx={{fontSize:"2rem"}}/>
                    </>:
                    <div className='delete-option' onClick={() => {
                        setIsLoading(true);
                        deletePost();
                    }}>
                    {
                        isLoading ?
                        <Spinner size="sm"/>  :
                        <>
                            <Delete sx={{fontSize:"2rem"}}/>
                            <span>Delete</span>
                        </>
                        }
                    </div>
                }

            </div>
        </div>

    );
};
export default PostAction
;
