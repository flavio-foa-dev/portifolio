import React from 'react';
import {Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Perfil from './pages/perfil';
import Project from './pages/project';

function App() {
  return (
    <div className="">

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/perfil" component={ Perfil } />
          <Route exact path="/project" component={ Project } />
          <Route exact path="*" component={ NotFound } />
        </Switch>

    </div>
  );
}

export default App;
