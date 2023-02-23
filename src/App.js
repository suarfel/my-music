import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MainNavigation from './components/layout/MainNavigation';
import { Route, BrowserRouter as Router, Routes,Navigate } from 'react-router-dom';

function App() {
 return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="songs"/>} />
        <Route path="songs" element={<MainNavigation />}/>
      </Routes> 
    </Router>
  </div>
 );
}

export default App;
