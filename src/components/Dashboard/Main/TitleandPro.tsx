import { Box } from "@mui/material";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";

const TitleandPro = () => {
  return (
    <div>
      <Box display={"flex"} justifyContent={"start"} flexDirection={"column"}>
        <Box position={"relative"} right={"45%"} fontStyle={"revert-layer"}>
          <small>Project name</small>
        </Box>

        <Box
          position={"relative"}
          right={"0%"}
          display={"flex"}
          justifyContent={"start"}
          fontSize={"20px"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <ForwardOutlinedIcon />
            <Box marginLeft={1}>
              community Cohesion as a Driver for Sustainable Development
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TitleandPro;
