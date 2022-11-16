import React, { Suspense, lazy } from "react";
import "./App.scss";
import Loading from "./components/Loading/Loading";

const AddedContainer = lazy(() => import("./components/Added/AddedContainer"));
const PostsContainer = lazy(() => import("./components/Posts/PostsContainer"));
const CounterContainer = lazy(() =>
  import("./components/Counter/CounterContainer")
);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="app">
        <div className="container">
          <div className="app__inner">
            <div className="app__wrapper">
              <CounterContainer />
              <AddedContainer />
              <PostsContainer />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
