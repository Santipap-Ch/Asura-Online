import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { allActions } from "../Reducer/Reducer";
import { bindActionCreators } from "redux";

const Counter = (props) => {
  const actions = bindActionCreators(allActions, useDispatch());
  const items = useSelector((state) => state.items);

  useEffect(() => {
    actions.getItem();
  }, []);

  const test = () => {
    if (items) {
      return items.map((item, index) => {
        console.log(item.name);
        return (
          <li key={index}>
            {" "}
            {item.name}
          </li>
        );
      });
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      {/* Counter: {number} <br />
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>-</button> */}
      test
      {test()}
    </div>
  );
};
export default Counter;
