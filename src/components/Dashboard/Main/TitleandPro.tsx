import { Box } from '@mui/material'
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';

const TitleandPro = () => {
return (
<div>
    <Box display={'flex'} justifyContent={'start'} flexDirection={'column'}>
        <Box position={'relative'} right={'45%'} fontStyle={'revert-layer'}>
            <small>
                Project name
            </small>
        </Box>

        <Box position={'relative'} right={'0%'} display={'flex'} justifyContent={'start'} fontSize={'20px'}>
            <Box width={'50px'} marginTop={'5px'}>
                <ForwardOutlinedIcon />
            </Box>

            <Box>community Cohession as a Driver for Sustainable Development </Box>
        </Box>


    </Box>

</div>
)
}

export default TitleandPro
