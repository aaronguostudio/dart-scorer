import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Test from './Test'
=======
import ScoresPage from './pages/ScoresPage';
>>>>>>> homepage-dev

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
