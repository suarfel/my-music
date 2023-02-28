import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../components/song/ErrorPage";
import NoSongsFound from "../components/song/NoSongsFound";
import SongDetail from "../components/song/SongDetail";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllSongs } from "../hooks/api";
import useHttp from "../hooks/user-http";

const PlaySong = () => {
  const params = useParams();
  const { sendRequest, status, data, error } = useHttp(getAllSongs, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return <LoadingSpinner />;
  }
  if (error) {
    return  <ErrorPage />;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    return <NoSongsFound />;
  }
  const song = data.find((song) => params.songId === song.id);
  if (!song) {
    return <NoSongsFound />;
  }
  return (
    <SongDetail
      title={song.title}
      genre={song.genre}
      id={song.id}
      singer={song.singer}
      duration={song.duration}
    />
  );
};
export default PlaySong;
