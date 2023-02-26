import SongForm from "../components/song/SongForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/user-http";
import { addSong } from "../hooks/api";
import { useEffect } from "react";

const NewSong = () => {
  const { sendRequest, status } = useHttp(addSong);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/songs");
    }
  });

  const addSongHandler = (song) => {
    sendRequest(song);
  };
  return (
    <SongForm isLoading={status === "pending"} onAddSong={addSongHandler} />
  );
};
export default NewSong;
