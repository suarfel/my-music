import classes from "./SongItem.module.css";
import {FaCaretSquareRight } from "react-icons/fa";

const SongItem = () => {
  return <div className={classes.tracks}>
    <div className={classes.songGenre}>Pop</div>
    <div className={classes.songTitle}>Don't Start Now</div>
    <div className={classes.songSinger}>Dua Lipa</div>
    <div className={classes.songDuration}>3:03</div>
    <div className={classes.songPlayIcon}>
        <FaCaretSquareRight />
    </div>
  </div>;
};
export default SongItem;
