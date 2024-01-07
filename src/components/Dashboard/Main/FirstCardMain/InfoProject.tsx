import { Box, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const InfoProject = () => {
  return (
    <Box display={{ xs: "flex", md: "block" }} alignItems={"center"}>
      {/* Project Document */}
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        fontWeight={"2px"}
        mb={{ xs: 1, md: 0 }}
      >
        <Typography paragraph fontSize={"10px"} paddingLeft={"10px"}>
          Project Document :
        </Typography>
        <Typography
          paragraph
          fontSize={"10px"}
          marginLeft={{ xs: 0, md: "10px" }}
          bgcolor={yellow[200]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={grey[700]}
        >
          download
          <Box marginLeft={"4px"} fontSize={"-10px"} bgcolor={yellow[200]}>
            <CloudUploadOutlinedIcon />
          </Box>
        </Typography>
      </Box>

      {/* Doners */}
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        paddingLeft={{ xs: 0, md: "10px" }}
        alignItems={"center"}
        mb={{ xs: 1, md: 0 }}
      >
        <Typography paragraph fontSize={"10px"} paddingLeft={"10px"}>
          Doners :
        </Typography>
        <Typography
          paragraph
          fontSize={"10px"}
          marginLeft={{ xs: 0, md: "10px" }}
          bgcolor={yellow[200]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          COVS
        </Typography>
      </Box>

      {/* Project Code */}
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        paddingLeft={{ xs: 0, md: "10px" }}
        alignItems={"center"}
      >
        <Typography paragraph fontSize={"10px"} paddingLeft={"10px"}>
          Project Code :
        </Typography>
        <Typography
          paragraph
          fontSize={"10px"}
          marginLeft={{ xs: 0, md: "10px" }}
          bgcolor={yellow[200]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Moo165
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoProject;
