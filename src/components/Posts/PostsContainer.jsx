import React, { useEffect } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import {
  getPost,
  deletePost,
  setCheck,
  openInfo,
  setEditPost
} from "./../../Redux/posts-reducer";
import PopupInputContainer from "./../../components/Popups/PopupInputContainer";
import { RiInboxUnarchiveLine } from "react-icons/ri";

const PostsContainer = (props) => {
  useEffect(() => {
    props.getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let onOpen = (id) => {
    props.openInfo(id, true);
  };
  let onClose = (id) => {
    props.openInfo(id, false);
  };
  let onCheck = (id) => {
    props.setCheck(id, true);
  };
  let onUnCheck = (id) => {
    props.setCheck(id, false);
  };
  let onDelete = (id) => {
    props.deletePost(id);
  };

  if (props.isLoadingPosts) {
    return (
      <div className="loading">
        <p className="loading__text">Перевірка на наявність заміток.. </p>
        <RiInboxUnarchiveLine />
      </div>
    );
  }

  return (
    <div>
      <Posts
        posts={props.posts}
        deletePost={props.deletePost}
        isCheck={props.isCheck}
        setCheck={props.setCheck}
        openInfo={props.openInfo}
        
        setEditPost={props.setEditPost}
        onDelete={onDelete}
        onCheck={onCheck}
        onUnCheck={onUnCheck}
        onOpen={onOpen}
        onClose={onClose}
      />
      {props.editMode && <PopupInputContainer />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    editMode: state.postsPage.editMode,
    isLoadingPosts: state.postsPage.isLoadingPosts,
  };
};

export default connect(mapStateToProps, {
  getPost,
  deletePost,
  setCheck,
  openInfo,
  setEditPost
})(PostsContainer);
