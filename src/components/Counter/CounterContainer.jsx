import { connect } from "react-redux";
import React from "react";
import Counter from "./Counter";

const CounterContainer = (props) => {
  return <Counter posts={props.posts} />;
};

const mapStateToProps = (state) => {
  return{
    posts: state.postsPage.posts
  }
}

export default connect(mapStateToProps)(CounterContainer);
