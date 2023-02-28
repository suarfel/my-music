import { Route, BrowserRouter as Router, Routes,Navigate } from 'react-router-dom';
import AllSongs from './pages/AllSongs';
import NewSong from './pages/NewSong';
import PlaySong from './pages/PlaySong';

function App() {
 return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="songs"/>} />
        <Route path="songs" element={<AllSongs />}/>
        <Route path="songs/:songId" element={<PlaySong />}/>
        <Route path="new" element={<NewSong />}/>
      </Routes> 
    </Router>
  </div>
 );
}

export default App;
