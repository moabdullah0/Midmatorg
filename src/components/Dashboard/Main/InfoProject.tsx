import { Box, Typography } from '@mui/material'
import {  grey, yellow } from "@mui/material/colors"
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const InfoProject = () => {
return (
<Box display={'flex'} alignItems={'center'}>
    <Box display={'flex'} alignItems={'center'} fontWeight={'2px'}>
        <Typography paragraph fontSize={'10px'} paddingLeft={'10px'}>
            Project Document :
        </Typography>
        <Typography paragraph fontSize={'10px'} marginLeft={'10px'} bgcolor={yellow[200]} display={'flex'}
            justifyContent={'center'} alignItems={'center'} color={grey[700]}>
            download <Box marginLeft={'4px'} fontSize={'-10px'} bgcolor={yellow[200]}>
                <CloudUploadOutlinedIcon />
            </Box>
        </Typography>

    </Box>
    <Box display={'flex'} paddingLeft={'10px'}>
        <Typography paragraph fontSize={'10px'} paddingLeft={'10px'}>
            Doners :
        </Typography>
        <Typography paragraph fontSize={'10px'} marginLeft={'10px'} bgcolor={yellow[200]} display={'flex'}
            justifyContent={'center'} alignItems={'center'}>
            COVS
        </Typography>

    </Box>
    <Box display={'flex'} paddingLeft={'10px'}>
        <Typography paragraph fontSize={'10px'} paddingLeft={'10px'}>
            Project Code :
        </Typography>
        <Typography paragraph fontSize={'10px'} marginLeft={'10px'} bgcolor={yellow[200]} display={'flex'}
            justifyContent={'center'} alignItems={'center'}>
            Moo165
        </Typography>

    </Box>
</Box>
)
}

export default InfoProject
