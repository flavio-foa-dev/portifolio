import React from 'react';
import {Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
import Perfil from './pages/perfil';
import Project from './pages/project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
