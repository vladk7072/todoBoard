import React from "react";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          <div className="app__wrapper">
            <div className="loading">
              <p className="loading__text">Завантаження даних..</p>
              <RiInboxUnarchiveLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
