import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/Login/Login'
import FormItem from './component/Form/FormItem'
import {Switch,Route,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/formitem" component={FormItem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
