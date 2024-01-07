

import { Box } from '@mui/material';
import CustomDrawerHeader from '../components/Dashboard/Navbar/DrawerNavbar';
import SecondNav from '../components/Dashboard/Navbar/SecondNav';
import Main from '../components/Dashboard/Main/Main';
import {  Theme } from "@mui/material/styles";
interface Themes{
    theme:Theme
  }
const Maintest = ({theme}:Themes) => {
  return (
    <div className='px-10' >
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <CustomDrawerHeader theme={theme}/>
        <SecondNav />
        <Main />
      </Box>
    </div>
  )
}

export default Maintest
