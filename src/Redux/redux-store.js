import { postsReducer } from "./posts-reducer";
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  postsPage: postsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
