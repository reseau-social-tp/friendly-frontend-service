import { Box } from "@mui/material";
import img from "../assets/images/toko.jpg"

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={img}
      />
    </Box>
  );
};

export default UserImage;
