import React from "react";
import "./popupInput.scss";
import { Formik } from "formik";
import { BsPen } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PopupInput = (props) => {
  let onEditing = (value) => {
    props.setEditPost(false, "");
    props.putEditPost(props.editId, value);
  };

  return (
    <div className="popup">
      <div className="popup__wrapper">
        <div className="popup__close" onClick={() => props.onEditMode()}>
          <VscClose />
        </div>

        <p className="popup__text">Введіть замітку в поле нижче:</p>
        {props.isLimit && (
          <div className="popup__text-limit">
            Ви перевищили ліміт заміток, максимальна кількість 100
          </div>
        )}
        <Formik
          initialValues={{ text: props.valueEdit }}
          onSubmit={(values) => {
            props.addNewPost(props.posts.length, values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="popup__form" onSubmit={handleSubmit}>
              <textarea
                className={
                  props.isLimit
                    ? "popup__textarea popup__textarea-limit"
                    : "popup__textarea"
                }
                type="text"
                name="text"
                onChange={handleChange}
                value={values.text}
              />
              {props.isEditPost ? (
                props.isFetching ? (
                  <button className="popup__btn popup__btn-load" type="button">
                    <AiOutlineLoading3Quarters />
                  </button>
                ) : (
                  <button
                    className="popup__btn"
                    onClick={() => onEditing(values.text)}
                    type="button"
                  >
                    <BsPen />
                  </button>
                )
              ) : props.isFetching ? (
                <button className="popup__btn popup__btn-load" type="button">
                  <AiOutlineLoading3Quarters />
                </button>
              ) : (
                <button className="popup__btn" type="submit">
                  <BsPen />
                </button>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PopupInput;
