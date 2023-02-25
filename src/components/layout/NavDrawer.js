import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavDrawer.module.css";
const NavDrawer = () => {
  return (
    <React.Fragment>
       <div className={classes.drawer}>
       <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/songs"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Songs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Song
            </NavLink>
          </li>
           
        </ul>
      </nav> 
      </div> 
    </React.Fragment>
  );
};

export default NavDrawer;
