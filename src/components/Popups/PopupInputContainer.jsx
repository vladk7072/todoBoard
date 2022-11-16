import React from "react";
import "./popupInput.scss";
import PopupInput from "./PopupInput";
import { addPost, setEdit, setStopLimit, setEditPost, putEditPost } from "./../../Redux/posts-reducer";
import { connect } from "react-redux";
import dayjs from "dayjs";

const PopupInputContainer = (props) => {

  const showTime = dayjs().format("DD.MM.YYYY HH:mm:ss");

  let addNewPost = (id, values) => {
    if (props.posts.length >= 100) {
      props.setStopLimit(true);
    }
    if (props.posts.length < 100 && values.text.length > 0) {
      props.addPost(values, id, showTime);
    }
  };
  let onEditMode = () => {
    props.setEdit(false);
    props.setStopLimit(false);
    props.setEditPost(false, "")
  };

  return (
    <PopupInput
      posts={props.posts}
      isFetching={props.isFetching}
      isLimit={props.isLimit}
      addNewPost={addNewPost}
      onEditMode={onEditMode}
      valueEdit={props.valueEdit}
      isEditPost={props.isEditPost}
      putEditPost={props.putEditPost}
      editId={props.editId}
      setEditPost={props.setEditPost}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    isFetching: state.postsPage.isFetching,
    isLimit: state.postsPage.isLimit,
    isEditPost: state.postsPage.isEditPost,
    valueEdit: state.postsPage.valueEdit,
    editId: state.postsPage.editId
  };
};

export default connect(mapStateToProps, { addPost, setEdit, setStopLimit, setEditPost, putEditPost })(
  PopupInputContainer
);