import React, { useState } from 'react';
import { Hidden, Menu, MenuItem } from '@mui/material';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SecondNavData from '../../../../data/SecondNavData';
interface SecondNavLink {
  icon: React.ReactNode;
  title: string;
}

const SecondNav: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="border-b-2">
      <div className="flex">
        {/* Render all links for larger screens */}
        <Hidden smDown>
          {SecondNavData.map((link: SecondNavLink, index: number) => (
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
        </Hidden>

        {/* Render a menu icon for smaller screens */}
        <Hidden mdUp>
          {/* Open the menu on click */}
          <a
            className="flex flex-row cursor-pointer mx-2 hover:text-green-400"
            onClick={handleClick}
          >
            <div>{/* Menu icon, e.g., hamburger icon */}</div>
            <h5><FormatListBulletedIcon/></h5>
          </a>

          {/* Mobile menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {SecondNavData.map((link: SecondNavLink, index: number) => (
              <MenuItem key={index} onClick={handleClose}>
                <div className="flex flex-row cursor-pointer mx-2 hover:text-green-400">
                  <div>{link.icon}</div>
                  <h5>{link.title}</h5>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </Hidden>
      </div>
    </div>
  );
};

export default SecondNav;
