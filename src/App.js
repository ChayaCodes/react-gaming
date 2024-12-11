import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import GamesPage from './Pages/Games/GamesPage';
import LoginForm from './Pages/LoginForm/LoginForm';
import RegisterForm from './Pages/RegisterForm/RegisterForm';

import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/games' element={<GamesPage />} />
      <Route path='/register' element={<RegisterForm />} />           
      <Route path='/signin' element={<LoginForm />} />
      <Route path='*' element={<HomePage />} />
      
    </Routes>
    </Router>
  );
}

export default App;