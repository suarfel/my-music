import Layout from "../layout/Layout";
import SongItem from "./SongItem";
import classes from "./SongList.module.css";
const SONGS = [
  {
    title: "Don't Start Now ",
    singer: "Dua Lipa",
    genre: "POP",
    duration: "5:07",
  },
  {
    title: "Failing",
    singer: "Travor Daniel",
    genre: "REGGE",
    duration: "2:06",
  },
  {
    title: "Heartless",
    singer: "The Weekend",
    genre: "POP",
    duration: "5:45",
  },
  {
    title: "Don't Start Now ",
    singer: "Dua Lipa",
    genre: "POP",
    duration: "5:07",
  },
  {
    title: "Failing",
    singer: "Travor Daniel",
    genre: "REGGE",
    duration: "2:06",
  },
  {
    title: "Heartless",
    singer: "The Weekend",
    genre: "POP",
    duration: "5:45",
  },
  {
    title: "Don't Start Now ",
    singer: "Dua Lipa",
    genre: "POP",
    duration: "5:07",
  },
  {
    title: "Failing",
    singer: "Travor Daniel",
    genre: "REGGE",
    duration: "2:06",
  },
  {
    title: "Heartless",
    singer: "The Weekend",
    genre: "POP",
    duration: "5:45",
  },
  {
    title: "Don't Start Now ",
    singer: "Dua Lipa",
    genre: "POP",
    duration: "5:07",
  },
  {
    title: "Failing",
    singer: "Travor Daniel",
    genre: "REGGE",
    duration: "2:06",
  },
  {
    title: "Heartless",
    singer: "The Weekend",
    genre: "POP",
    duration: "5:45",
  },
  {
    title: "Don't Start Now ",
    singer: "Dua Lipa",
    genre: "POP",
    duration: "5:07",
  },
  {
    title: "Failing",
    singer: "Travor Daniel",
    genre: "REGGE",
    duration: "2:06",
  },
  {
    title: "Heartless",
    singer: "The Weekend",
    genre: "POP",
    duration: "5:45",
  },
  {
    title: "Don't Start Now ",
    singer: "Dua Lipa",
    genre: "POP",
    duration: "5:07",
  },
  {
    title: "Failing",
    singer: "Travor Daniel",
    genre: "REGGE",
    duration: "2:06",
  },
  {
    title: "Heartless",
    singer: "The Weekend",
    genre: "POP",
    duration: "5:45",
  },
];
const SongList = () => {
  const songs = SONGS.map((song) => {
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
