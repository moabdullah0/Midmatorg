import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AppBarTypography = styled(Typography)({
  color: "black", // Text color
  fontFamily: "-moz-initial",
  fontWeight: "bold",
});
const ChiledBarTypography = styled(Typography)({
  color: "black", // Text color
  fontFamily: "-moz-initial",
});

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <AppBarTypography marginTop={"20px"} variant="h6" noWrap>
         
        </AppBarTypography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box marginTop={"20px"} color="black">
            <NotificationsActiveIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              marginLeft: "10px",
              color: "black",
              flexDirection: "row",
            }}
          >
            <Box margin={"10px"}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
              />
            </Box>
            <Box margin={"10px"}>
              <AppBarTypography noWrap>’Mohamad Alibrahim</AppBarTypography>
              <ChiledBarTypography>Project officer</ChiledBarTypography>
            </Box>
            <Box marginTop={"20px"}>
              <ExpandMoreIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      
    </>
  );
};

export default Navbar;
