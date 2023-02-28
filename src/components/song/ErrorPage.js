import Layout from "../layout/Layout";
import classes from "./ErrorPage.module.css";
const ErrorPage = (props) => {
  return (
    <Layout>
      <div className={classes.error}>
        <div>{props.error}</div>
        <div className={classes.errorResponse}>connection problem</div>
      </div>
 
    </Layout>
  );
};
export default ErrorPage;
