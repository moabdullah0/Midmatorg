import LineStyleIcon from "@mui/icons-material/LineStyle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MobiledataOffIcon from "@mui/icons-material/MobiledataOff";
import EarbudsOutlinedIcon from "@mui/icons-material/EarbudsOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

const SecondNav = () => {
  return (
    <div className="border-b-2">
      <div className="flex">
        <a className="flex flex-row cursor-pointer mx-2 text-green-600 border-b-2 border-solid border-green-600">
          <div>
            <LineStyleIcon />
          </div>
          <h5>Dashboard</h5>
        </a>
        <a className="flex flex-row cursor-pointer mx-2 hover:text-green-600">
          <div>
            <MobiledataOffIcon />
          </div>
          <h5>Logical framework</h5>
        </a>
        <a className="flex flex-row cursor-pointer mx-3 hover:text-green-600">
          <div>
            <LocalActivityIcon />
          </div>
          <h5>Activities</h5>
        </a>
        <a className="flex flex-row cursor-pointer  mx-3 hover:text-green-600 ">
          <div>
            <EarbudsOutlinedIcon />
          </div>
          <h5>Budget</h5>
        </a>
        <a className="flex flex-row cursor-pointer mx-3 hover:text-green-600">
          <div>
            <ErrorOutlineOutlinedIcon />
          </div>
          <h5>Risckes</h5>
        </a>
        <a className="flex flex-row cursor-pointer hover:text-green-600">
          <div>
            <BusinessCenterOutlinedIcon />
          </div>
          <h5>Purches Order</h5>
        </a>
      </div>
    </div>
  );
};

export default SecondNav;
