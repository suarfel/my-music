import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { deleteSong } from "../../hooks/api";
import useHttp from "../../hooks/user-http";
import Layout from "../layout/Layout";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./SongDetail.module.css";
const SongDetail = (props) => {
  const navigate = useNavigate();
  const {sendRequest,status} = useHttp(deleteSong);

  useEffect(() => {
    if (status === "completed"){
      navigate('/songs');
    }
  });
  
 
  return (
    <Layout>
      {status === "pending" && <LoadingSpinner />}
      {!(status === "pending")  && 
      <div className={classes.songDetail}>
        <div className={classes.songDetailDesciption}>
          <div className={classes.songDetailTitle}>
            <div>Title</div>
            <div className={classes.detailDescription}>{props.title}</div>
          </div>
          <div className={classes.songDetailTitle}>
            <div>Singer</div>
            <div className={classes.detailDescription}>{props.singer}</div>
          </div>
          <div className={classes.songDetailTitle}>
            <div>Genre</div>
            <div className={classes.detailDescription}>{props.genre}</div>
          </div>
          <div className={classes.songDetailTitle}>
            <div>Duration</div>
            <div className={classes.detailDescription}>{props.duration}</div>
          </div>
        </div>
        <div className={classes.deleteButton} >
           <button id={props.id} onClick={() =>  sendRequest(props.id)}>Delete Song </button>
        </div>
      </div>}
    </Layout>
  );
};
export default SongDetail;
