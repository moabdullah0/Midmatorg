
import { useTheme } from "@mui/material/styles";
import MiniDrawer from "./components/Dashboard/DashboardHome";
import Maintest from "./MainTest/Maintest";

function App() {
  const theme = useTheme();

  return (
    <>
      <MiniDrawer />
      
      <Maintest theme={theme} />
   
      
    </>
  );
}

export default App;
