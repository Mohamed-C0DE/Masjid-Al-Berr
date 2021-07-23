import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [isEmailValid, setIsEmailValid] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isNameValid, setIsNameValid] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [isMessageValid, setIsMessageValid] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const nameInput = (e) => {
    if (e.target.value) {
      setEnteredName(e.target.value);
    }
  };

  const emailInput = (e) => {
    if (e.target.value) {
      setEnteredEmail(e.target.value);
    }
  };

  const messageInput = (e) => {
    if (e.target.value) {
      setEnteredMessage(e.target.value);
    }
  };

  const validateNameHandler = () => {
    if (enteredName.trim().length > 1) {
      setIsNameValid(true);
    }
  };

  const validateEmailHandler = () => {
    if (enteredEmail.includes("@")) {
      setIsEmailValid(true);
    }
  };

  const validateMessageHandler = () => {
    if (enteredMessage.trim().length > 7) {
      setIsMessageValid(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      isEmailValid === true &&
      isNameValid === true &&
      isMessageValid === true
    ) {
      props.onSubmittedForm(true);
    } else {
      props.onSubmittedForm(false);
    }
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <label className="form-label">Name (Required)</label>
      <input
        type="text"
        className="form-input"
        onChange={nameInput}
        onBlur={validateNameHandler}
      ></input>
      <label className="form-label">Email (Required)</label>
      <input
        type="email"
        className="form-input"
        onChange={emailInput}
        onBlur={validateEmailHandler}
      ></input>
      <label className="form-label">Subject</label>
      <input type="text" className="form-input"></input>
      <label className="form-label">Message (Required)</label>
      <input
        type="text"
        className="form-input form-message"
        onChange={messageInput}
        onBlur={validateMessageHandler}
      ></input>
      <input type="submit" placeholder="Submit" className="form-btn"></input>
    </form>
  );
};

export default Form;
