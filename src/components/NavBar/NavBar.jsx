

import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography ,IconButton} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <MenuBookIcon />         

            </Typography>
           
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
          
          >
            
            <Tab LinkComponent={NavLink} to="/" label="Home" />
            <Tab LinkComponent={NavLink} to="/contacts/add" label="Add Details" />
            <Tab LinkComponent={NavLink} to="/contacts/list" label="View Details" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

