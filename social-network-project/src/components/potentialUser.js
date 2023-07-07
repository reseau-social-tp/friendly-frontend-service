import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";

import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import { Spinner } from 'react-bootstrap';
import "../styles/users.css"

const UserBox = ({ user, list, getUsers }) => {
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    const [loading, setLoading] = useState(false);
    
    const follow = async (id) => {
        // const response = await fetch(`http://localhost:5000/api/user/${id}/follow`, {
        const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}/follow`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },	
            body: JSON.stringify({
                _id: loggedUser._id
            })
            });
        const data = await response.json();
        console.log(data)

        getUsers()
        setLoading(false)
    };
    const unFollow = async (id) => {
        // const response = await fetch(`http://localhost:5000/api/user/${id}/unfollow`, {
        const response = await fetch(`https://social-network-auth-service.onrender.com/api/user/${id}/unfollow`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },	

            body: JSON.stringify({
                _id: loggedUser._id
            })
            });
        const data = await response.json();
        getUsers()
        setLoading(false)
    };
    return(
        <div className="user-item">
            <img src={user.avatar} alt='profile' className='user-img'/>
            <Typography margin="0.5rem 0" >{user.username}</Typography>
            <div className="user-buttons">
                {
                list.includes(user._id) ? (
                    loading ? <Spinner size="sm"/>:
                        <Button variant="danger" style={{width:"100%",margin:"0.1rem 0"}} onClick={() => {
                        setLoading(true)
                        unFollow(user._id)
                    } }>Un Follow</Button>)
                :
                    (
                    loading? <Spinner size="sm"/>:<Button variant="outline-primary" style={{width:"100%",margin:"0.1rem 0"}} onClick={() => {
                        setLoading(true)
                        follow(user._id)
                } }>Follow</Button>)
                }
            
            </div>
        </div>
    )
}

const UserBoxPlaceholder = ({
  count = 1
}) =>
  _.range(count).map((index) => (
    <div key={index} className="user-item">
        <Skeleton  className="user-img" width={"100%"} height={"10rem"}/>
        <Skeleton width={"70%"}/>
        <div className="user-button">
            <Skeleton width={"100%"} height={"3rem"}/>
        </div>
    </div>
  ));

UserBox.Placeholder = UserBoxPlaceholder;

export default UserBox;
