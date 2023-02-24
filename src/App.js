
import { Route, BrowserRouter as Router, Routes,Navigate } from 'react-router-dom';
import AllSongs from './pages/AllSongs';
import NewSong from './pages/NewSong';

function App() {
 return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="songs"/>} />
        <Route path="songs" element={<AllSongs />}/>
        <Route path="new" element={<NewSong />}/>
      </Routes> 
    </Router>
  </div>
 );
}

export default App;
