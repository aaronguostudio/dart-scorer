import React from 'react';
import HomePage from './pages/HomePage';
import  { FirebaseContext } from './firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScoresPage from './pages/ScoresPage';
import './App.css';

function App() {
  return (
    <FirebaseContext.Consumer>
      {
        firebase => (
          <div className="App">
            <Router>
              <Switch>
                <Route path='/scores/:host' component={() => <ScoresPage firebase={firebase} />} />
                <Route path='/scores' component={() => <ScoresPage firebase={firebase} />} />
                <Route path="/" component={() => <HomePage firebase={firebase} />}/>
              </Switch>
            </Router>
          </div>
        )
      }
    </FirebaseContext.Consumer>
  );
}

export default App;
