import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login/Login";
import FormItem from "./component/Form/FormItem";
import ItemList from "./component/ItemList/ItemList";
import { Provider } from "react-redux";
import store from "./component/Reducer/Reducer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/formitem" component={FormItem} />
            <Route exact path="/items" component={ItemList} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
