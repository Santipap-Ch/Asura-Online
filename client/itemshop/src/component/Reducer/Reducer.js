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
    default:
      return data;
  }
};
export const loginReducer = (data = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        id: action.id,
        name: action.name,
        surname: action.surname,
      };
    case "LOGOUT":
      return {
        id: "",
        name: "",
        surname: "",
      };
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
    await axios.put(`http://localhost/api/items/${data_new.id}`, {
      ...data_new,
    });
  },

  loginPsu: (data_login) => async (dispatch) => {
    console.log("111",{...data_login});
    const result = await axios.post(`http://localhost/api/login`, data_login);
    const [id, name, surname] = [...result.data.GetStudentDetailsResult.string];
    dispatch({ type: "LOGIN", id: id, name: name, surname: surname });
  },
  logoutPsu:()=>async(dispatch)=>{
    dispatch({type:"LOGOUT"});
  }
};

export const rootReducer = combineReducers({
  items: itemReducer,
  psuPass: loginReducer,
});

export const Reducer = createStore(rootReducer, applyMiddleware(logger,thunk));

export default Reducer;
