import Layout from "../layout/Layout";
import classes from "./SongForm.module.css";
const SongForm = () => {
  return (
    <Layout>
      <form onSubmit className={classes.newSong}>
        <h1>Add New Song</h1> 
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text " id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="singer">Singer</label>
          <br />
          <input type="text" id="singer" />
        </div>
        <div className={classes.control}>
          <label htmlFor="genre">Genre</label>
          <br />
          <input type="text" id="genre" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <br />
          <input type="text" id="description" />
        </div>
        <div className={classes.addSong}>
        <button>Add Song</button>
        </div>
      </form>
    </Layout>
  );
};

export default SongForm;
