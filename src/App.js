import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='/games' element={<GamesPage />} /> */}
      {/* <Route path='/register' element={<RegisterPage />} />           
      <Route path='/signin' element={<SignInPage />} />
      <Route path='*' element={<HomePage />} /> */}
      
    </Routes>
    </Router>
  );
}

export default App;