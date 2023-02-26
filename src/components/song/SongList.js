import Layout from "../layout/Layout";
import SongItem from "./SongItem";
import classes from "./SongList.module.css";
const SongList = (props) => {
  console.log(props.songs);
  const songs = props.songs.map((song) => {
    return (
      <SongItem
        key={Math.random().toString()}
        title={song.title}
        genre={song.genre}
        duration={song.duration}
        singer={song.singer}
      />
    );
  });
  return (
    <Layout>
      <div className={classes.mainPage}>
        <div className={classes.mainPageTitle}>POPULAR TRACKS</div>
        <div className={classes.songList}>{songs}</div>
      </div>
    </Layout>
  );
};
export default SongList;
