import classes from "./SongItem.module.css";
import {FaCaretSquareRight } from "react-icons/fa";

const SongItem = (props) => {
  return <div className={classes.tracks}>
    <div className={classes.songGenre}>{props.genre}</div>
    <div className={classes.songTitle}>{props.title}</div>
    <div className={classes.songSinger}>{props.singer}</div>
    <div className={classes.songDuration}>{props.duration}</div>
    <div className={classes.songPlayIcon} >
        <FaCaretSquareRight  />
    </div>
  </div>;
};
export default SongItem;
