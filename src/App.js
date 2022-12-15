import React from 'react';
import {Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Perfil from './pages/perfil';
import Project from './pages/project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
