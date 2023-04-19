import { Typography } from "@mui/material";
import FlexBetween from "../FlexBetween";
import WidgetWrapper from "../WidgetWrapper";
import img from "../../assets/images/team.jpg"

const AdvertWidget = () => {
  const dark = "black";

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">About us</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={img}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <Typography color={"gray"} m="0.5rem 0">
        We are a very dynamic team, having a high vision of innovation and much much fun. Here is a cool social media where you can meet new people. Have a nice navigation. For any issue or approval, <a href="mailto:nessipjunior@gmail.com" style={{textDecoration:"none"}}>contact us</a>
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
