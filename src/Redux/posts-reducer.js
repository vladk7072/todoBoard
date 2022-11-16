import { postsAPI } from "./../DAL/api";

const SET_EDIT = "posts/SET_EDIT";
const GET_POSTS = "posts/GET_POSTS";
const SET_LOADING = "posts/SET_LOADING";
const DELETE_POST = "posts/DELETE_POST";
const ADD_POST = "posts/ADD_POST";
const SET_CHECK = "posts/SET_CHECK";
const ADD_TIME = "posts/ADD_TIME";
const SET_OPEN = "posts/SET_OPEN";
const SET_FETCHING = "posts/SET_FETCHING";
const SET_STOP_LIMIT = "posts/SET_STOP_LIMIT";
const SET_EDIT_POST = "posts/SET_EDIT_POST";
const ADD_NEW_VALUE = "posts/ADD_NEW_VALUE";

let initialState = {
  posts: [],
  isLoadingPosts: false,
  editMode: false,
  isFetching: false,
  isLimit: false,
  valueEdit: "",
  isEditPost: false,
  editId: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT: {
      return { ...state, editMode: action.boolean };
    }
    case GET_POSTS: {
      return { ...state, posts: action.posts };
    }
    case SET_LOADING: {
      return { ...state, isLoadingPosts: action.boolean };
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter((p) => p.id !== action.id) };
    }
    case ADD_POST: {
      return { ...state, posts: [...state.posts, action.data] };
    }
    case SET_CHECK: {
      return {
        ...state,
        posts: state.posts.map((p) =>
          action.id === p.id ? { ...p, isCheck: action.boolean } : p
        ),
      };
    }
    case ADD_TIME: {
      return {
        ...state,
        posts: state.posts.map((p) =>
          action.id === p.id ? { timeCreate: action.showTime } : p
        ),
      };
    }
    case SET_OPEN: {
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.id ? { ...p, openInfo: action.boolean } : p
        ),
      };
    }
    case SET_FETCHING: {
      return { ...state, isFetching: action.boolean };
    }
    case SET_STOP_LIMIT: {
      return { ...state, isLimit: action.boolean };
    }
    case SET_EDIT_POST: {
      return {
        ...state,
        valueEdit: action.text,
        isEditPost: action.boolean,
        editId: action.id,
      };
    }
    case ADD_NEW_VALUE: {
      return{
        ...state, posts: state.posts.map((p) => p.id === action.id ? {...p, text: action.text} : p)
      }
    }
    default:
      return state;
  }
};

const setEditAC = (boolean) => ({ type: SET_EDIT, boolean });
const getPostsAC = (posts) => ({ type: GET_POSTS, posts });
const setLoadingAC = (boolean) => ({ type: SET_LOADING, boolean });
const deletePostsAC = (id) => ({ type: DELETE_POST, id });
const addPostAC = (data) => ({ type: ADD_POST, data });
const setCheckAC = (id, boolean) => ({ type: SET_CHECK, id, boolean });
const addTimeAC = (id, showTime) => ({ type: ADD_TIME, id, showTime });
const openInfoAC = (id, boolean) => ({ type: SET_OPEN, id, boolean });
const setFetchiingAC = (boolean) => ({ type: SET_FETCHING, boolean });
const setStopLimitAC = (boolean) => ({ type: SET_STOP_LIMIT, boolean });
const setEditPostAC = (text, boolean, id) => ({
  type: SET_EDIT_POST,
  text,
  boolean,
  id,
});
const addNewValueAC = (id, text) => ({ type: ADD_NEW_VALUE, id, text });

export const setEdit = (boolean) => (dispatch) => {
  dispatch(setEditAC(boolean));
};
export const getPost = () => async (dispatch) => {
  dispatch(setLoadingAC(true));
  let response = await postsAPI.getPosts();
  if (response.status === 200) {
    dispatch(getPostsAC(response.data));
    dispatch(setLoadingAC(false));
  }
};
export const deletePost = (id) => async (dispatch) => {
  let response = await postsAPI.deletePost(id);
  if (response.status === 200) {
    dispatch(deletePostsAC(id));
  }
};
export const addPost = (values, id, showTime) => async (dispatch) => {
  dispatch(setFetchiingAC(true));
  let response = await postsAPI.addPost(values, showTime);
  if (response.status === 201) {
    dispatch(addPostAC(response.data));
    dispatch(setEditAC(false));
    dispatch(addTimeAC(id, showTime));
    dispatch(setFetchiingAC(false));
  }
};
export const setStopLimit = (boolean) => (dispatch) => {
  dispatch(setStopLimitAC(boolean));
};
export const setCheck = (id, boolean) => async (dispatch) => {
  let response = await postsAPI.putCheck(id, boolean);
  if (response.status === 200) {
    dispatch(setCheckAC(id, boolean));
  }
};
export const openInfo = (id, boolean) => (dispatch) => {
  dispatch(openInfoAC(id, boolean));
};
export const setEditPost = (boolean, text, id) => (dispatch) => {
  dispatch(setEditPostAC(text, boolean, id));
  dispatch(setEditAC(boolean));
};
export const putEditPost = (id, text) => async (dispatch) => {
  dispatch(setEditAC(false));
  let response = await postsAPI.putEditPost(id, text);
  console.log(response);
  dispatch(addNewValueAC(id, response.data.text));
};
