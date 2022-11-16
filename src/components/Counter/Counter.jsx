import React from "react";
import "./Counter.scss";

const Counter = (props) => {
  return (
    <div className="counter">
      {props.posts.length > 0 && (
        <div className="counter__title">{props.posts.length} / 100</div>
      )}
    </div>
  );
};

export default Counter;
