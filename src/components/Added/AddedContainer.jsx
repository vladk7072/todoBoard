import React from "react";
import { connect } from "react-redux";
import Added from "./Added";
import { setEdit } from "./../../Redux/posts-reducer";

const AddedContainer = (props) => {

  let onEditMode = () => {
    props.setEdit(true);
  };
  if (props.isLoadingPosts) {
    return;
  }
  return <Added editMode={props.editMode} posts={props.posts} onEditMode={onEditMode} />;
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    isLoadingPosts: state.postsPage.isLoadingPosts
  };
};

export default connect(mapStateToProps, { setEdit })(AddedContainer);
