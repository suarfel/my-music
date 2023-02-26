import { Link } from 'react-router-dom';
import classes from './NoSongsFound.module.css';

const NoSongsFound = () => {
  return (
    <div className={classes.nosongs}>
      <p>No Songs Found!</p>
      <Link className={classes.nobutton} to='/new'>
        Add Song
      </Link>
    </div>
  );
};

export default NoSongsFound;
