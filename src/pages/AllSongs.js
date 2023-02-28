import { useEffect } from "react";
import React from "react";
import SongList from "../components/song/SongList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllSongs } from "../hooks/api";
import useHttp from "../hooks/user-http";
import NoSongsFound from "../components/song/NoSongsFound";
import Layout from "../components/layout/Layout";
import ErrorPage from "../components/song/ErrorPage";

const AllSongs = () => {
  const {
    sendRequest,
    status,
    data: loadedSongs,
    error,
  } = useHttp(getAllSongs, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
        <LoadingSpinner />
    );
  }
  if (error) {
    return  <ErrorPage  error={error}/>;
  }
  if (status === "completed" && (!loadedSongs || loadedSongs.length === 0)) {
        return (<Layout><NoSongsFound /> </Layout>);
 
  }
  return (
    <React.Fragment>
      <SongList songs={loadedSongs} />
    </React.Fragment>
  );
};
export default AllSongs;
