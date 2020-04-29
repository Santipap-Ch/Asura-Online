import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";

export const itemReducer = (data = [], action) => {
  switch (action.type) {
    case "GET_ITEM":
      console.log("action", action.items);
      return action.items;
    default:
      return data;
  }
};

export const allActions = {
  getItem: () => async (dispatch) => {
    await axios.get(`http://localhost/api/items`).then(res => {
      console.log("testttt", res.data);
      dispatch({ type: "GET_ITEM", items: res.data });
    });
  },
};

export const rootReducer = combineReducers({ items: itemReducer });

export const Reducer = createStore(rootReducer, applyMiddleware(logger, thunk));

export default Reducer;
