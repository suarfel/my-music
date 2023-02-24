import MainNavigation from "./MainNavigation";
import React from "react";
import classes from "./Layout.module.css";
const Layout = (props) => {
    return (
        <React.Fragment>
        <MainNavigation />
        <div className={classes.main}>{props.children}</div>
        </React.Fragment>
    );
}
export default Layout