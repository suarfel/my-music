import UserForm from "../../hooks/userInput";
import { useState } from "react";
import Layout from "../layout/Layout";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./SongForm.module.css";
const SongForm = (props) => {
  const [genre,setGenre] = useState("pop");
  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    valueBlurHandler: titleBlurHandler,
    reset: titleReset,
    enteredValueIsValid: titleIsValid,
    hasError: titleError,
  } = UserForm((enteredValue) => 11 > enteredValue.trim().length > 0);
  const {
    enteredValue: enteredSinger,
    valueBlurHandler: singerBlurHandler,
    valueChangeHandler: singerChangeHandler,
    reset: singerReset,
    enteredValueIsValid: singerIsValid,
    hasError: singerError,
  } = UserForm((enteredValue) => 11 > enteredValue.trim().length > 0);

  const {
    enteredValue: enteredDuration,
    valueBlurHandler: durationBlurHandler,
    valueChangeHandler: durationChangeHandler,
    reset: durationReset,
    enteredValueIsValid: durationIsValid,
    hasError: durationError,
  } = UserForm((enteredValue) => enteredValue > 0);
  let formIsValid = false;
  if (titleIsValid && singerIsValid  && durationIsValid) {
    formIsValid = true;
  }

  const genreChangeHandler = (event) => {
    setGenre(event.target.value);
  }

  const addSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredTitle);
    console.log(genre);
    console.log(enteredDuration);
    console.log(enteredSinger);
    props.onAddSong({
      title: enteredTitle,
      genre: genre,
      singer: enteredSinger,
      duration: enteredDuration,
    });
    titleReset();
    singerReset();
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
          {titleError && enteredTitle.trim().length === 0  && (
            <div className={classes.formError}>TITLE IS EMPTY</div>
          )}
           {titleError && enteredTitle.trim().length > 10  && (
            <div className={classes.formError}>TITLE MUST BE SHORT</div>
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
          {singerError && enteredSinger.trim().length === 0 && (
            <div className={classes.formError}>SINGER NAME IS EMPTY</div>
          )}
          {singerError && enteredSinger.trim().length > 10 && (
            <div className={classes.formError}>SINGER NAME MUST BE SHORT</div>
          )}
        </div>
        <div className={classes.selectControl}>
          <label htmlFor="genre">Genre</label>
          <br />
          <select name="genre" id="genre" value={genre} onChange={genreChangeHandler}  >
            <option value="POP">POP</option>
            <option value="ROCK">ROCK</option>
            <option value="COUNTRY">COUNTRY</option>
            <option value="REGGAE">REGGAE</option>
            <option value="FUNK">FUNK</option>
            <option value="JAZZ">JAZZ</option>
            <option value="DISCO">DISCO</option>
            <option value="ELECTONIC">ELECTONIC</option>
          </select> 
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
