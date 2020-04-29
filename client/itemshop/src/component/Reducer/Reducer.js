import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";

export const itemReducer = (data = [], action) => {
  switch (action.type) {
    case "GET_ITEM":
      console.log("action", action.items);
      return action.items;
    case "ADD_ITEM":
      return [...data, action.data_item];
    case "UPDATE_ITEM":
      return;
    case "DELETE_ITEM":
      return;
    default:
      return data;
  }
};

export const allActions = {
  getItem: () => async (dispatch) => {
    await axios.get(`http://localhost/api/items`).then((res) => {
      dispatch({ type: "GET_ITEM", items: res.data });
    });
  },
  addItem: (data_form) => async (dispatch) => {
    await axios.post(`http://localhost/api/insert`, { ...data_form });
    dispatch({ type: "ADD_ITEM", data_item: { ...data_form } });
  },
  deleteItem: (id) => async (dispatch) => {
    await axios.delete(`http://localhost/api/items/${id}`, id);
  },
  updateItem: (data_new) => async (dispatch) => {
    await axios.put(`http://localhost/api/items/${data_new.id}`, {...data_new});
  },
};

export const rootReducer = combineReducers({ items: itemReducer });

export const Reducer = createStore(rootReducer, applyMiddleware(thunk));

export default Reducer;
