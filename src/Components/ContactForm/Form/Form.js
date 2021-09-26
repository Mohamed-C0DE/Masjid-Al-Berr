import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [isEmailValid, setIsEmailValid] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isNameValid, setIsNameValid] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [isMessageValid, setIsMessageValid] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState();
  const [toggle, setToggle] = useState(false);

  const nameInput = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInput = (e) => {
    setEnteredEmail(e.target.value);
  };

  const messageInput = (e) => {
    setEnteredMessage(e.target.value);
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
    if (enteredMessage.trim().length > 1) {
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
      // Send obj to parent
      props.onSubmittedForm(userData);
      // Display success msg
      setSubmittedMessage(true);
      setToggle(true);
      // Clear input fields
      setTimeout(() => {
        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("");
        setSubmittedMessage();
        setIsNameValid("");
        setIsEmailValid("");
        setIsMessageValid("");
        setToggle(false);
      }, 2000);
    } else {
      // Display error msg
      setSubmittedMessage(false);
      setToggle(true);
    }
    console.log(enteredName, enteredEmail, enteredMessage);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      {submittedMessage ? (
        <p
          className={`success-message + ${
            toggle ? "toggle-show" : "toggle-hidden"
          }`}
        >
          Form sent!
        </p>
      ) : (
        <p
          className={`error-message + ${
            toggle ? "toggle-show" : "toggle-hidden"
          }`}
        >
          Please fill in the required fields correctly!
        </p>
      )}
      <label className="form-label">Name (Required)</label>
      <input
        type="text"
        className="form-input"
        onChange={nameInput}
        onBlur={validateNameHandler}
        value={enteredName}
      ></input>
      <label className="form-label">Email (Required)</label>
      <input
        type="email"
        className="form-input"
        onChange={emailInput}
        onBlur={validateEmailHandler}
        value={enteredEmail}
      ></input>
      <label className="form-label">Subject</label>
      <input type="text" className="form-input"></input>
      <label className="form-label">Message (Required)</label>
      <textarea
        type="text"
        className="form-input form-message"
        onChange={messageInput}
        onBlur={validateMessageHandler}
        value={enteredMessage}
      ></textarea>
      <input type="submit" placeholder="Submit" className="form-btn"></input>
    </form>
  );
};

export default Form;
