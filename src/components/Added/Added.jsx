import React from "react";
import "./added.scss";

const Added = (props) => {

  return (
    <div
      className={props.posts.length < 1 ? "added added-non" : "added"}
      onClick={() => props.onEditMode()}
    ></div>
  );
};

export default Added;
