import _ from "lodash";
import Skeleton from "react-loading-skeleton";

import { Box, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import "../styles/users.css"
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";

const PostBoxPlaceholder = ({
  count = 1
}) =>
  _.range(count).map((index) => (
    <WidgetWrapper 
      m="2rem 0"
    >
        <FlexBetween>
            <FlexBetween gap="1rem">
                <Skeleton circle width={"55px"} height={"55px"}/>
                <Box>
                    <Skeleton width={"10rem"}/>
                    <Skeleton width={"20rem"}/>
                </Box>
            </FlexBetween>
            <Skeleton circle width={"35px"} height={"35px"}/>
        </FlexBetween>
        <Skeleton width={"100%"}/>
        <Skeleton width={"100%"} height={"15rem"}/>

      <FlexBetween mt="0.5rem">
        <FlexBetween gap="2rem">
          <FlexBetween gap="0.3rem">
            <Skeleton width={"10rem"}/>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <Skeleton width={"10rem"}/>
          </FlexBetween>

          <FlexBetween>
            <Skeleton width={"10rem"}/>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
      
    </WidgetWrapper>
  ));

export default PostBoxPlaceholder;
