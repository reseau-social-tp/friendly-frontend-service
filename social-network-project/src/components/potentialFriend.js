import _ from "lodash";
import Skeleton from "react-loading-skeleton";

import { Box, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import "../styles/users.css"
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";

const FriendBoxPlaceholder = ({
  count = 1
}) =>
  _.range(count).map((index) => (
    <FlexBetween>
        <FlexBetween gap="1rem">
            <Skeleton circle width={"45px"} height={"45px"}/>
            <Box>
                <Skeleton width={"3rem"}/>
                <Skeleton width={"7rem"}/>
            </Box>
        </FlexBetween>
        <Skeleton circle width={"25px"} height={"25px"}/>
    </FlexBetween>
  ));

export default FriendBoxPlaceholder;
