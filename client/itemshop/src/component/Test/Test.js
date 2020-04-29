import React from "react";
import { Provider } from "react-redux";
import store from "../Reducer/Reducer";
import { createStore, combineReducers } from "redux";
import Count from "./Count";

// ========  reducer (As Controller) =========
export const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};
// export const rootReducer = combineReducers({ number: numberReducer });
// export const store = createStore(rootReducer);

// ======== wrap root element by Provider with Store ========
const Test = () => {
  return (
    // <div>afafsaf</div>
    <Provider store={store}>
      <Count />
    </Provider>
  );
};
export default Test;
