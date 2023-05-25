import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useEffect } from "react";
import {
  faArrowDownLong,
  faArrowUpLong
} from '@fortawesome/free-solid-svg-icons'
import {useCollapse} from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { useDispatch, useSelector } from "react-redux";
// import { setFriends } from "state";
import img from "../../assets/images/toko.jpg"
import FlexBetween from "../FlexBetween";
import { KeyboardDoubleArrowDownOutlined, KeyboardDoubleArrowUpOutlined, KeyboardDoubleArrowUpRounded } from "@mui/icons-material";

const RelatedToListWidget = ({ list, title }) => {
  // const dispatch = useDispatch();
  // const { palette } = useTheme();
  // const token = useSelector((state) => state.token);

  
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();


  // const getFriends = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/users/${list}/friends`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setFriends({ friends: data }));
  // };

  // useEffect(() => {
  //   getFriends();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper
        >
      <FlexBetween 
        padding={"0 1rem"}
        sx={{cursor: "pointer"}}
        {...getToggleProps()}
        >
        <h4
          style={{cursor: "pointer", fontWeight: "500", fontSize:"1.5rem", position:"relative"}}
        >
          {title}<span style={{backgroundColor:"var(--secondary)",fontSize:"1rem", position:"absolute",right:"-15%",top:"-25%", borderRadius:"10rem", color:"white", padding:"0 0.3rem"}}>{list.length}</span>
        </h4>
        {
          isExpanded ?
          <KeyboardDoubleArrowUpOutlined color={"var(--secondary)"}/>:
          <KeyboardDoubleArrowDownOutlined color={"var(--secondary)"}/>
        }

      </FlexBetween>
      <Box display="flex" flexDirection="column" gap="1.5rem" {...getCollapseProps()}>
        {list.map((element) => (
          <Friend
            key={element._id}
            friendId={element._id}
            userPicturePath={img}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default RelatedToListWidget;
