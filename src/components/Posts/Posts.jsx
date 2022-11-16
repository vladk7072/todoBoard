import React from "react";
import "./posts.scss";
import { CgTrashEmpty } from "react-icons/cg";
import { MdCheck } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";

const Posts = (props) => {
  let onEdit = (id, text) => {
    props.setEditPost(true, text, id);
  };

  return (
    <div
      className={props.posts.length > 0 ? "posts posts-pt" : "posts posts-non"}
    >
      {props.posts.length > 0 ? (
        props.posts.map((p) => (
          <div
            className={
              p.isCheck ? "posts__inner posts__inner-check" : "posts__inner"
            }
            key={p.id}
          >
            <div className="posts__post">
              <div className="posts__text-box">
                {p.isCheck ? (
                  <div
                    className="posts__point"
                    onClick={() => props.onUnCheck(p.id)}
                  >
                    <MdCheck />
                  </div>
                ) : (
                  <div
                    className="posts__point"
                    onClick={() => props.onCheck(p.id)}
                  ></div>
                )}
                <div className="posts__num">{p.id}.</div>
                <p className="posts__text">{p.text}</p>
              </div>
              {p.openInfo ? (
                <div
                  className="posts__info"
                  onClick={() => props.onClose(p.id)}
                >
                  <FiInfo />
                </div>
              ) : (
                <div className="posts__info" onClick={() => props.onOpen(p.id)}>
                  <FiInfo />
                </div>
              )}
              <div className="posts__edit" onClick={() => onEdit(p.id, p.text)}>
                <FiEdit3 />
              </div>
              <div
                className="posts__delete"
                onClick={() => props.onDelete(p.id)}
              >
                <CgTrashEmpty />
              </div>
            </div>
            <div
              className={
                p.openInfo
                  ? "posts__info-box posts__info-box--open"
                  : "posts__info-box"
              }
            >
              <div className="posts__info-text">Створено: {p.timeCreate}</div>
            </div>
          </div>
        ))
      ) : (
        <p className="posts__text">Додай свою першу замітку!</p>
      )}
    </div>
  );
};

export default Posts;
