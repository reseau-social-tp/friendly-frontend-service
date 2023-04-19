import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "var(--shadow-1)"
}));

export default WidgetWrapper;
