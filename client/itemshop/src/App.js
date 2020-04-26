import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/Login/Login'
import {Switch,Route,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
