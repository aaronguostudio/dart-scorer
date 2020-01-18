import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ScoresPage from './pages/ScoresPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/scores' component={ScoresPage} />
          <Route component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
