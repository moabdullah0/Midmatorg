import LineStyleIcon from "@mui/icons-material/LineStyle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MobiledataOffIcon from "@mui/icons-material/MobiledataOff";
import EarbudsOutlinedIcon from "@mui/icons-material/EarbudsOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

const SecondNav = () => {
  const Links = [
    { title: "Dashboard", icon: <LineStyleIcon /> },
    { title: "Logical framework", icon: <MobiledataOffIcon /> },
    { title: "Budget", icon: <EarbudsOutlinedIcon /> },
    { title: "Activities", icon: <LocalActivityIcon /> },
    { title: "Risckes", icon: <ErrorOutlineOutlinedIcon /> },
    { title: "Purches Order", icon: <BusinessCenterOutlinedIcon /> },
  ];

  return (
    <div className="border-b-2">
      <div className="flex">
        {Links.map((link, index) => (
          <a
            key={index}
            className={`flex flex-row cursor-pointer mx-2 hover:text-green-400 ${
              index === 0 ? 'text-green-600 border-b-2 border-green-600' : ''
            }`}
          >
            <div>{link.icon}</div>
            <h5>{link.title}</h5>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SecondNav;
