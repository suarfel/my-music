import UserForm from "../../hooks/userInput";
import Layout from "../layout/Layout";
import classes from "./SongForm.module.css";
const SongForm = () => {
  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    valueBlurHandler: titleBlurHandler,
    reset: titleReset,
    enteredValueIsValid: titleIsValid,
    hasError: titleError,
  } = UserForm((enteredValue) => enteredValue.trim().length > 0);
  let formIsValid = false;
  if (titleIsValid) {
    formIsValid = true;
  }
  const addSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredTitle);
    titleReset();
  };
  return (
    <Layout>
      <form onSubmit={addSubmitHandler} className={classes.newSong}>
        <h1>Add New Song</h1>
        <div className={titleError ? classes.invalidControl : classes.control}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text "
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
          {titleError && (
            <div className={classes.formError}>TITLE IS NOT VALID</div>
          )}
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
          <button disabled={!formIsValid}>Add Song</button>
        </div>
      </form>
    </Layout>
  );
};

export default SongForm;
