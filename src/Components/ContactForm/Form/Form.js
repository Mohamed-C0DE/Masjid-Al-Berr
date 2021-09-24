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
    setTimeout(() => {
      setEnteredName(e.target.value);
    }, 500);
  };

  const emailInput = (e) => {
    setTimeout(() => {
      setEnteredEmail(e.target.value);
    }, 500);
  };

  const messageInput = (e) => {
    setTimeout(() => {
      setEnteredMessage(e.target.value);
    }, 500);
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
    // Get form data and store into obj
    let userData;
    if (isEmailValid && isNameValid && isMessageValid) {
      userData = {
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      };
    }
    // Send obj to parent
    props.onSubmittedForm(userData);
    // Clear input fields
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
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
      <textarea
        type="text"
        className="form-input form-message"
        onChange={messageInput}
        onBlur={validateMessageHandler}
      ></textarea>
      <input type="submit" placeholder="Submit" className="form-btn"></input>
    </form>
  );
};

export default Form;
