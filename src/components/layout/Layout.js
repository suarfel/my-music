import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <React.Fragment>
        <MainNavigation />
        <div className={classes.main}>{props.children}</div>
        </React.Fragment>
    );
}
export default Layout