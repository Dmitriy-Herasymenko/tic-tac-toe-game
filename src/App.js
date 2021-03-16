import React from 'react';
import './App.css';
import Main from '../src/components/Main/Main';
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/settings">
                   <Settings />
                </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
        </Router>
    );
}

export default App;
