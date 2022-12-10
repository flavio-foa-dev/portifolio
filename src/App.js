import {Switch, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/home';
import Perfil from './pages/perfil';
import Project from './pages/project';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/perfil" component={Perfil}></Route>
        <Route path="/project" component={Project}></Route>
      </Switch>
    </div>
  );
}

export default App;
