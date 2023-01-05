import React from 'react';
import {Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Project from './pages/project';
import Tools from './pages/tools';

function App() {
  return (
    <div className="h-screen">

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/project" component={ Project } />
          <Route exact path="/tools" component={ Tools } />
          <Route exact path="*" component={ NotFound } />
        </Switch>

    </div>
  );
}

export default App;
