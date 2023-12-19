import { Box } from '@mui/material'
import { green } from "@mui/material/colors";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
import EarbudsOutlinedIcon from '@mui/icons-material/EarbudsOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

const SecondNav = () => {
  return (
    <Box position={'relative'} top={'-6%'} display={'flex'} width={'100%'} borderColor={'black'} borderBottom={'solid'}>
    <Box paddingRight={'3px'} borderBottom={'solid'} color={green[400]}><LineStyleIcon/></Box><Box paddingRight={'30px'} borderBottom={'solid'} color={green[400]}>Dashboard</Box>
    <Box paddingRight={'3px'} ><MobiledataOffIcon/></Box>  <Box paddingRight={'30px'} >Logical framework</Box>
   
    <Box paddingRight={'3px'} ><LocalActivityIcon/></Box>  <Box paddingRight={'30px'} >Activities</Box>
    <Box paddingRight={'3px'} ><EarbudsOutlinedIcon/></Box> <Box paddingRight={'30px'}>Budget</Box>
    <Box paddingRight={'3px'} ><ErrorOutlineOutlinedIcon/></Box> <Box paddingRight={'30px'}>Risckes</Box>
    <Box paddingRight={'3px'} ><BusinessCenterOutlinedIcon/></Box> <Box paddingRight={'30px'}>Purches Order</Box>
    </Box>
  )
}

export default SecondNav
