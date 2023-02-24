import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import NavDrawer from "./NavDrawer";
const MainNavigation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDrawing, setIsDrawing] = useState(false);

  const setDimension = () => {
    setWidth(window.innerWidth);
  };

  const drawerHandler = () => {
    setIsDrawing(!isDrawing);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
  }, [width]);

  const vr = (
    <div className={classes.drawer}>
      <button className={classes.hamburger} onClick={drawerHandler}>
        <span className={classes.hamburgertop}></span>
        <span className={classes.hamburgermiddle}></span>
        <span className={classes.hamburgerbottom}></span>
      </button>
    </div>
  );

  const mainNav = (
    <header className={classes.header}>
      <div className={classes.logo}>
         My-Music
      </div>
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
    </header>
  );

  const minNav = (
    <header className={classes.header}>
      <div className={classes.logo}>
        My-Music
      </div>
      {vr}
    </header>
  );

  const hamNav = (
    // <header className={classes.header}>
    <div className={classes.hamNav}>
      <div className={classes.deleteHam}>{vr}</div> 
      <NavDrawer />
    </div>
    // </header>
  );

  return (
    <React.Fragment>
      {width > 650 && <div>{mainNav}</div>}
      {!isDrawing && width <= 650 && <div>{minNav}</div>}
      {isDrawing && width <= 650 && <div>{hamNav}</div>}
    </React.Fragment>
  );
};
export default MainNavigation;
