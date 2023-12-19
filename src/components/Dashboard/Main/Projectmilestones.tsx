import { Box, Card, CardContent, Typography } from '@mui/material'
import {  yellow } from '@mui/material/colors'
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import TimeLine from './TimeLine';

const Projectmilestones = () => {
  return (
    <div>
      <Card>
        <CardContent>
            <Box display={'flex'} justifyContent={'space-between'} fontSize={'15px'} >
                <Box>
                Project milestones
                </Box>
                <Box display={'flex'} fontSize={'5px'} alignItems={'center'}>
                   <Typography marginRight={'50px'} bgcolor={yellow[200]} fontSize={'10px'}>
                    Start date : 23/11/2023
                   </Typography>
                   <Typography marginRight={'30px'} bgcolor={yellow[200]} fontSize={'10px'}>
                    End date : 23/11/2023
                   </Typography>
                   <Box fontSize={'1px'}  >
                    
                   <ControlPointOutlinedIcon/>
                   <RemoveCircleOutlineOutlinedIcon/>
                   <MouseOutlinedIcon/>
                   <FormatListBulletedOutlinedIcon/>
                   </Box>
                </Box>
            </Box>
           <div >
<TimeLine/>
           </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Projectmilestones
