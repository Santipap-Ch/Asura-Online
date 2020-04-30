import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

export const itemReducer = (data = [], action) => {
  switch (action.type) {
    case "GET_ITEM":
      return action.items;
    case "ADD_ITEM":
      return [...data, action.data_item];
    case "DELETE_ITEM":
      return data.filter((item) => +action.id !== +item.id);
    case "UPDATE_ITEM":
      return data.map((item) => {
        if (+item.id === +action.id) return action.itemNew;
        else return item;
      });
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
    await axios.get(`https://lostitem.herokuapp.com/api/items`).then((res) => {
      dispatch({ type: "GET_ITEM", items: res.data });
    });
  },
  addItem: (data_form) => async (dispatch) => {
    await axios.post(`https://lostitem.herokuapp.com/api/insert`, {
      ...data_form,
    });
    dispatch({ type: "ADD_ITEM", data_item: { ...data_form } });
  },
  deleteItem: (id) => async (dispatch) => {
    console.log(id);

    await axios.delete(`https://lostitem.herokuapp.com/api/items/${id}`, id);
    dispatch({ type: "DELETE_ITEM", id });
  },
  updateItem: (data_new) => async (dispatch) => {
    await axios.put(
      `https://lostitem.herokuapp.com/api/items/${data_new.id}`,
      data_new
    );
    dispatch({ type: "UPDATE_ITEM", itemNew: data_new ,id:data_new.id});
  },

  loginPsu: (data_login) => async (dispatch) => {
    console.log("111", { ...data_login });
    const result = await axios.post(
      `https://lostitem.herokuapp.com/api/login`,
      data_login
    );
    const [id, name, surname] = [...result.data.GetStudentDetailsResult.string];
    dispatch({ type: "LOGIN", id: id, name: name, surname: surname });
  },
  logoutPsu: () => async (dispatch) => {
    dispatch({ type: "LOGOUT" });
  },
};

export const rootReducer = combineReducers({
  items: itemReducer,
  psuPass: loginReducer,
});

export const Reducer = createStore(rootReducer, applyMiddleware(thunk));

export default Reducer;
