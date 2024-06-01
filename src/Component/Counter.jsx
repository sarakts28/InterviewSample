// components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/action/counterAction";
import "./style.css";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="mainContainer">
        <h1 className="headingCounter">Count: {count}</h1>
        <div className="buttonContainer">
        <button className="buttonStyle" onClick={() => dispatch(increment())}>Increment</button>
        <button className="buttonStyle" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  );
};

export default Counter;
