import _ from "lodash";
import Skeleton from "react-loading-skeleton";

import { Box, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import "../styles/users.css"
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";

const ProfileBoxPlaceholder = ({
  count = 1
}) =>
  _.range(count).map((index) => (      
      <Box className='setting-container' key={index}>
        <div className='setting-content'>                
            <Skeleton width="50rem" height={"15rem"}/>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"start", width:"100%", padding:"0 5rem"}}>
              <Skeleton circle width={"15rem"} height={"15rem"}/>
              <Skeleton width={"20rem"} height={"5rem"}/>

            </div>
        </div>
      </Box>        
  ));

export default ProfileBoxPlaceholder;

