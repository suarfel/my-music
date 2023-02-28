import UserForm from "../../hooks/userInput";
import Layout from "../layout/Layout";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./SongForm.module.css";
const SongForm = (props) => {
  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    valueBlurHandler: titleBlurHandler,
    reset: titleReset,
    enteredValueIsValid: titleIsValid,
    hasError: titleError,
  } = UserForm((enteredValue) => enteredValue.trim().length > 0);
  const {
    enteredValue: enteredSinger,
    valueBlurHandler: singerBlurHandler,
    valueChangeHandler: singerChangeHandler,
    reset: singerReset,
    enteredValueIsValid: singerIsValid,
    hasError: singerError,
  } = UserForm((enteredValue) => enteredValue.trim().length > 0);

  const {
    enteredValue: enteredGenre,
    valueBlurHandler: genreBlurHandler,
    valueChangeHandler: genreChangeHandler,
    reset: genreReset,
    enteredValueIsValid: genreIsValid,
    hasError: genreError,
  } = UserForm((enteredValue) => enteredValue.trim().length > 0);
  const {
    enteredValue: enteredDuration,
    valueBlurHandler: durationBlurHandler,
    valueChangeHandler: durationChangeHandler,
    reset: durationReset,
    enteredValueIsValid: durationIsValid,
    hasError: durationError,
  } = UserForm((enteredValue) => enteredValue > 0);
  let formIsValid = false;
  if (titleIsValid && singerIsValid && genreIsValid && durationIsValid) {
    formIsValid = true;
  }
  const addSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredTitle);
    console.log(enteredGenre);
    console.log(enteredDuration);
    console.log(enteredSinger);
    props.onAddSong({
      title: enteredTitle,
      genre: enteredGenre,
      singer: enteredSinger,
      duration: enteredDuration,
    });
    titleReset();
    singerReset();
    genreReset();
    durationReset();
  };
  return (
    <Layout>
      {props.isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      <form onSubmit={addSubmitHandler} className={classes.newSong}>
        <h1>Add New Song</h1>
        <div className={titleError ? classes.invalidControl : classes.control}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
          {titleError && (
            <div className={classes.formError}>TITLE IS EMPTY</div>
          )}
        </div>
        <div className={singerError ? classes.invalidControl : classes.control}>
          <label htmlFor="singer">Singer</label>
          <br />
          <input
            type="text"
            id="singer"
            value={enteredSinger}
            onChange={singerChangeHandler}
            onBlur={singerBlurHandler}
          />
          {singerError && (
            <div className={classes.formError}>SINGER IS EMPTY</div>
          )}
        </div>
        <div className={genreError ? classes.invalidControl : classes.control}>
          <label htmlFor="genre">Genre</label>
          <br />
          <input
            type="text"
            id="genre"
            value={enteredGenre}
            onChange={genreChangeHandler}
            onBlur={genreBlurHandler}
          />
          {genreError && (
            <div className={classes.formError}>GENRE IS EMPTY</div>
          )}
        </div>
        <div
          className={durationError ? classes.invalidControl : classes.control}
        >
          <label htmlFor="duration">Duration</label>
          <br />
          <input
            type="number"
            min="2"
            max="9"
            id="duration"
            value={enteredDuration}
            onChange={durationChangeHandler}
            onBlur={durationBlurHandler}
          />
          {durationError && (
            <div className={classes.formError}>DURATION IS OUT OF LIMIT</div>
          )}
        </div>
        <div className={classes.addSong}>
          <button disabled={!formIsValid}>Add Song</button>
        </div>
      </form>
    </Layout>
  );
};

export default SongForm;
