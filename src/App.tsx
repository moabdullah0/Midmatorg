import { useTheme } from "@mui/material/styles";
import MiniDrawer from "./components/Dashboard/Layout/LayoutHome";
import Maintest from "./components/Dashboard/Home/Home";

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
