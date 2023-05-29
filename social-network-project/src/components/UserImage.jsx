import { Box } from "@mui/material";

const UserImage = ({ image, size = "3rem" }) => {
  return (
    <Box>
      <img
        class="user-avatar"
        style={{ objectFit: "cover", width: size }}
        alt="user"
        src={image}
      />
    </Box>
  );
};

export default UserImage;
