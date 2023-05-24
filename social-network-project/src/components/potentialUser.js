import _ from "lodash";
import Skeleton from "react-loading-skeleton";

import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import "../styles/users.css"
const UserBox = ({ user, pic, list, followMethod, unFollowMethod }) => (
    <div className="user-item">
        <img src={pic} alt='profile' className='user-img'/>
        <Typography margin="0.5rem 0" >{user.username}</Typography>
        <div className="user-buttons">
            {
            list.includes(user._id) ?
                <Button variant="danger" style={{width:"100%",margin:"0.1rem 0"}} onClick={() => {
                    unFollowMethod(user._id)
                    console.log(list)
            } }>Un Follow</Button>:
                <Button variant="outline-primary" style={{width:"100%",margin:"0.1rem 0"}} onClick={() => {
                    followMethod(user._id)
            } }>Follow</Button>
            }
        
        </div>
    </div>
);

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
